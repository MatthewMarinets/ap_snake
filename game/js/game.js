"use strict";

import { init_menu_state } from "./menu.js";
import { LEVELS } from "./levels.js";
import { decode_coord, encode_coord, report_error } from "./globals.js";

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
const opposite = (direction) => {
    return direction ^ 1;
}

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

/**
 * @param {number} width
 * @param {number} height
 * @param {number[][]} walls
 * @param {number[]} snake
 * @param {number} num_apples
 * @returns {number[]}
 */
const init_apples = (width, height, walls, snake, num_apples) => {
    /** @type {number[]} */
    let apples = [];
    for (let attempt = 0; attempt < 100; ++attempt) {
        let x = Math.floor(Math.random() * width);
        let y = Math.floor(Math.random() * height);
        if (collides_with_walls([x, y], walls)) {
            continue;
        }
        // Array.indexOf can't check for sub-arrays, so encode the coord as an int
        let coord = encode_coord(x, y);
        if (apples.indexOf(coord) > -1) {
            continue;
        }
        if (snake.indexOf(coord) > -1) {
            continue;
        }
        apples.push(coord)
        if (apples.length >= num_apples) {
            break;
        }
    }
    return apples;
}

/**
 * Initializes a new game state
 * @param {GameState} game_state - An existing object to initialize into a fresh game state
 * @param {number} level - The level to load. Defaults to 0 (level 1)
 * @returns {GameState}
 */
export const init_game_state = (game_state, level) => {
    if (level == null) {
        level = 0;
    }
    if (level >= LEVELS.length) {
        level = LEVELS.length - 1;
    }
    game_state.level = level;
    game_state.level_info = LEVELS[level];
    game_state.width = 33;
    game_state.height = 33;
    game_state.walls = LEVELS[level].walls;
    game_state.wall_colour = LEVELS[level].colour;
    game_state.round = 1;
    game_state.apples = init_apples(game_state.width, game_state.height, game_state.walls, [], LEVELS[level].num_apples);
    game_state.length_per_apple = 4;
    game_state.exit_open = false;

    const start_coord = encode_coord(16, 0);
    game_state.player_pos = [start_coord, start_coord, start_coord];
    game_state.player_colour = [1, 0.5, 0.1];
    game_state.player_direction = UP;
    game_state.player_last_direction = UP;
    game_state.player_buffered_direction = -1;
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
    const MOVEMENT_HOOKUPS = [
        ["w", "ArrowUp", UP],
        ["s", "ArrowDown", DOWN],
        ["a", "ArrowLeft", LEFT],
        ["d", "ArrowRight", RIGHT],
    ];
    for (let i = 0; i < MOVEMENT_HOOKUPS.length; ++i) {
        let [key, alt_key, direction] = MOVEMENT_HOOKUPS[i];
        if (inputs[key] && !game_state.last_update_inputs[key]
            || inputs[alt_key] && !game_state.last_update_inputs[alt_key]
        ) {
            if (game_state.player_last_direction === opposite(direction)) {
                game_state.player_buffered_direction = direction;
            } else {
                game_state.player_direction = direction;
            }
        }
    }
    game_state.last_update_inputs = inputs;

    if (game_state.level_time_ms > game_state.player_last_moved + game_state.player_move_period_ms) {
        const move_result = update_position(game_state);
        if (move_result === MOVE_RESULT_COLLISION) {
            app_state.state = "menu";
            init_menu_state(app_state.menu_state);
        } else if (move_result === MOVE_RESULT_EXIT) {
            init_game_state(game_state, game_state.level+1);
        } else {
            game_state.player_last_direction = game_state.player_direction;
    
            // apply coyote-time inputs for U-turns
            if (game_state.player_buffered_direction >= 0
                && game_state.player_buffered_direction !== opposite(game_state.player_direction)
            ) {
                game_state.player_direction = game_state.player_buffered_direction;
            }
            game_state.player_buffered_direction = -1;
    
            if (game_state.apples.length == 0 && game_state.round < game_state.level_info.num_rounds) {
                game_state.round += 1;
                game_state.apples = init_apples(
                    game_state.width, game_state.height, game_state.walls, game_state.player_pos, game_state.level_info.num_apples
                );
            } else if (game_state.apples.length === 0) {
                game_state.exit_open = true;
            }
        }
    }
}

const MOVE_RESULT_OKAY = 0;
const MOVE_RESULT_COLLISION = 1;
const MOVE_RESULT_EXIT = 2;

/**
 * 
 * @param {GameState} game_state 
 * @returns {MOVE_RESULT_COLLISION|MOVE_RESULT_EXIT|MOVE_RESULT_OKAY}
 */
const update_position = (game_state) => {
    const player_velocity = directions[game_state.player_direction]
    let new_pos = decode_coord(game_state.player_pos[0]);
    new_pos[0] += player_velocity[0];
    new_pos[1] += player_velocity[1];
    game_state.player_last_moved += game_state.player_move_period_ms;

    // out of bounds
    if (new_pos[0] < 0 || new_pos[0] >= game_state.width || new_pos[1] < 0 || new_pos[1] >= game_state.height) {
        return MOVE_RESULT_COLLISION;
    }
    
    // exit
    if (game_state.exit_open && new_pos[0] === game_state.level_info.exit[0] && new_pos[1] === game_state.level_info.exit[1]) {
        return MOVE_RESULT_EXIT;
    }
    
    // collision with wall
    if (collides_with_walls(new_pos, game_state.walls)) {
        return MOVE_RESULT_COLLISION;
    }

    let new_coord = encode_coord(new_pos[0], new_pos[1]);

    // collides with self
    const self_collision_index = game_state.player_pos.indexOf(new_coord);
    if (self_collision_index > -1 && self_collision_index < game_state.player_pos.length - 1) {
        return MOVE_RESULT_COLLISION;
    }

    // catches apple
    let apple_index = game_state.apples.indexOf(new_coord);
    if (apple_index >= 0) {
        game_state.apples.splice(apple_index, 1);
        for (let i = 0; i < game_state.length_per_apple; ++i) {
            game_state.player_pos.push(game_state.player_pos[game_state.player_pos.length - 1]);
        }
    }

    game_state.player_pos.unshift(new_coord);
    game_state.player_pos.pop()
    return MOVE_RESULT_OKAY;
}

const collides_with_walls = (position, walls) => {
    for (let i = 0; i < walls.length; ++i) {
        let wall = walls[i];
        if (position[0] < wall[0] + wall[2]/2
            && position[0] > wall[0] - wall[2]/2
            && position[1] < wall[1] + wall[3]/2
            && position[1] > wall[1] - wall[3]/2
        ) {
            return true;
        }
    }
    return false;
}
