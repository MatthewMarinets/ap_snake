"use strict";

import { init_menu_state } from "./menu.js";

const UP = [0, 1];
const DOWN = [0, -1];
const RIGHT = [1, 0];
const LEFT = [-1, 0];

/**
 * Initializes a new game state
 * @param {GameState} game_state - An existing object to initialize into a fresh game state
 * @returns {GameState}
 */
export const init_game_state = (game_state) => {
    game_state.width = 51;
    game_state.height = 51;
    game_state.player_pos = [26, 0];
    game_state.player_velocity = UP;
    game_state.player_last_moved = 0;
    game_state.level_time_ms = 0;
    game_state.last_update_inputs = {};
    return game_state;
};

const MOVEMENT_PERIOD_MS = 100;

/**
 * Iterates an active game state by an iteration
 * @param {AppState} app_state - The input game state to be mutated.
 * @param {Number} dt - The time since the last update.
 * @param {Object} inputs - The keyboard inputs from the player
 */
export const iterate_game_state = (app_state, dt, inputs) => {
    let game_state = app_state.game_state;
    game_state.level_time_ms += dt;
    if (inputs.w && !game_state.last_update_inputs.w) {
        game_state.player_velocity = UP;
    }
    if (inputs.s && !game_state.last_update_inputs.s) {
        game_state.player_velocity = DOWN;
    }
    if (inputs.a && !game_state.last_update_inputs.a) {
        game_state.player_velocity = LEFT;
    }
    if (inputs.d && !game_state.last_update_inputs.d) {
        game_state.player_velocity = RIGHT;
    }
    game_state.last_update_inputs = inputs;
    if (game_state.level_time_ms > game_state.player_last_moved + MOVEMENT_PERIOD_MS) {
        if (update_position(game_state)) {
            app_state.state = "menu";
            init_menu_state(app_state.menu_state);
        }
    }
}

const update_position = (game_state) => {
    let player_pos = game_state.player_pos;
    player_pos[0] += game_state.player_velocity[0];
    player_pos[1] += game_state.player_velocity[1];
    game_state.player_last_moved += MOVEMENT_PERIOD_MS;

    if (player_pos[0] < 0 || player_pos[0] >= game_state.width || player_pos[1] < 0 || player_pos[1] >= game_state.height) {
        // GAME OVER
        return true;
    }
}
