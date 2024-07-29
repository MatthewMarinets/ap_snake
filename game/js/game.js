"use strict";

/**
 * Initializes a new game state
 * @returns {GameState}
 */
export const init_game_state = () => {
    return {
        width: 51,
        height: 51,
        player_pos: [26, 0],
        player_velocity: [0, 1],
        player_last_moved: -1,
    }
};

/**
 * Iterates an active game state by an iteration
 * @param {GameState} game_state - The input game state to be mutated.
 * @param {Number} dt - The time since the last update.
 * @param {Object} inputs - The keyboard inputs from the player
 */
export const iterate_game_state = (game_state, dt, inputs) => {
    
}
