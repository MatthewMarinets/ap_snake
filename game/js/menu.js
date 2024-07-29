"use strict";

/**
 * Initializes a new menu state
 * @returns {MenuState}
 */
export const init_menu_state = () => {
    return {
        cursor_position: 0,
        cursor_pos: [0, 0],
    }
};

/**
 * Iterates an active game state by an iteration
 * @param {MenuState} menu_state - The input menu state to be mutated.
 * @param {Number} dt - The time since the last update.
 * @param {Object} inputs - The keyboard inputs from the player
 */
export const iterate_menu_state = (menu_state, dt, inputs) => {
    let cursor_pos = menu_state.cursor_pos;
    if (inputs.w) {
        cursor_pos[1] = Math.min(cursor_pos[1] + 0.001 * dt, 0.75)
    }
    if (inputs.s) {
        cursor_pos[1] = Math.max(cursor_pos[1] - 0.001 * dt, -1)
    }
    if (inputs.d) {
        cursor_pos[0] = Math.min(cursor_pos[0] + 0.001 * dt, 0.75)
    }
    if (inputs.a) {
        cursor_pos[0] = Math.max(cursor_pos[0] - 0.001 * dt, -1)
    }
};
