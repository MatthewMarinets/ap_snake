"use strict";

import { init_menu_state, iterate_menu_state } from "./menu.js";
import { init_game_state, iterate_game_state } from "./game.js";

/**
 * Initializes a new game state
 * @returns {AppState} A new game state object.
 */
export const init_app_state = () => {
    return {
        state: "game",
        time: 0.0,
        menu_state: init_menu_state({}),
        game_state: init_game_state({}),
    };
};

/**
 * Iterates an active game state by an iteration
 * @param {AppState} app_state - The input application state to be mutated.
 * @param {Number} dt - The time since the last update.
 * @param {Object} inputs - The keyboard inputs from the player
 */
export const iterate_app_state = (app_state, dt, inputs) => {
    if (app_state.state == "menu") {
        iterate_menu_state(app_state, dt, inputs);
    } else {
        iterate_game_state(app_state, dt, inputs);
    }
};
