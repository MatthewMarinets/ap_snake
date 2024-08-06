"use strict";

import { init_menu_state } from "./menu.js";

const UP = 0;
const DOWN = 1;
const RIGHT = 2;
const LEFT = 3;
const directions = [
    new Float32Array([0, 1]),  // UP
    new Float32Array([0, -1]),  // DOWN
    new Float32Array([1, 0]),  // RIGHT
    new Float32Array([-1, 0]),  // LEFT
];

/**
 * @typedef {Float32Array} Camera
 */

/**
 * Initialize a camera
 * @returns {Camera}
 */
const init_camera = () => {
    return new Float32Array([
        2/33, 0, 0, -0.96666,
        0, 2/33, 0, -0.96666,
        0, 0, 1, 0,
        0, 0, 0, 1,
    ]);
}

const LEVEL_ONE_WALLS = [
    [16, 0, 33, 1],
    [0, 16, 1, 33],
    [16, 32, 33, 1],
    [32, 16, 1, 33],
    [8, 16, 1, 17],
    [24, 16, 1, 17],
];
const LEVEL_ONE_WALL_COLOUR = [13/6, 9/16, 0.97];

/**
 * @typedef {Object} GameState
 * @property {number} width
 * @property {number} height
 * @property {number[][]} walls
 * @property {number[]} wall_colour
 * @property {number[][]} player_pos
 * @property {Camera} camera
 * @property {0|1|2|3} player_direction
 * @property {0|1|2|3} last_player_direction
 * @property {number} player_last_moved
 * @property {number} level_time_ms
 */

/**
 * Initializes a new game state
 * @param {GameState} game_state - An existing object to initialize into a fresh game state
 * @returns {GameState}
 */
export const init_game_state = (game_state) => {
    game_state.width = 33;
    game_state.height = 33;
    game_state.walls = LEVEL_ONE_WALLS;
    game_state.wall_colour = LEVEL_ONE_WALL_COLOUR;

    game_state.player_pos = [[16, 0, 0], [16, 0, 0], [16, 0, 0]];
    game_state.player_colour = [1, 0.5, 0.1];
    game_state.player_direction = UP;
    game_state.player_last_direction = UP;
    game_state.player_move_period_ms = 100;
    game_state.player_last_moved = 0;
    game_state.level_time_ms = 0;

    game_state.last_update_inputs = {};
    game_state.camera = init_camera();
    return game_state;
};

/**
 * Iterates an active game state by an iteration
 * @param {AppState} app_state - The input game state to be mutated.
 * @param {Number} dt - The time since the last update.
 * @param {Object} inputs - The keyboard inputs from the player
 */
export const iterate_game_state = (app_state, dt, inputs) => {
    let game_state = app_state.game_state;
    game_state.level_time_ms += dt;

    // apply inputs
    if (game_state.last_player_direction != DOWN
        && (inputs.w && !game_state.last_update_inputs.w
            || inputs.ArrowUp && !game_state.last_update_inputs.ArrowUp)
    ) {
        game_state.player_direction = UP;
    }
    if (game_state.last_player_direction != UP
        && (inputs.s && !game_state.last_update_inputs.s
            || inputs.ArrowDown && !game_state.last_update_inputs.ArrowDown)
    ) {
        game_state.player_direction = DOWN;
    }
    if (game_state.last_player_direction != RIGHT
        && (inputs.a && !game_state.last_update_inputs.a
            || inputs.ArrowLeft && !game_state.last_update_inputs.ArrowLeft)
    ) {
        game_state.player_direction = LEFT;
    }
    if (game_state.last_player_direction != LEFT
        && (inputs.d && !game_state.last_update_inputs.d
            || inputs.ArrowRight && !game_state.last_update_inputs.ArrowRight)
    ) {
        game_state.player_direction = RIGHT;
    }
    game_state.last_update_inputs = inputs;

    if (game_state.level_time_ms > game_state.player_last_moved + game_state.player_move_period_ms) {
        game_state.last_player_direction = game_state.player_direction;
        if (update_position(game_state)) {
            app_state.state = "menu";
            init_menu_state(app_state.menu_state);
        }
    }
}

/**
 * 
 * @param {GameState} game_state 
 * @returns 
 */
const update_position = (game_state) => {
    let player_pos = game_state.player_pos;
    let new_pos = player_pos[0].slice();
    const player_velocity = directions[game_state.player_direction]
    new_pos[0] += player_velocity[0];
    new_pos[1] += player_velocity[1];
    game_state.player_last_moved += game_state.player_move_period_ms;

    // out of bounds
    if (new_pos[0] < 0 || new_pos[0] >= game_state.width || new_pos[1] < 0 || new_pos[1] >= game_state.height) {
        // GAME OVER
        return true;
    }

    // collision with wall
    for (let i = 0; i < game_state.walls.length; ++i) {
        let wall = game_state.walls[i];
        if (new_pos[0] < wall[0] + wall[2]/2
            && new_pos[0] > wall[0] - wall[2]/2
            && new_pos[1] < wall[1] + wall[3]/2
            && new_pos[1] > wall[1] - wall[3]/2
        ) {
            return true;
        }
    }

    game_state.player_pos = [new_pos].concat(player_pos.slice(0, -1));
}
