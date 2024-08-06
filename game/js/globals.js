"use strict";

export const GAME_UPDATE_PERIOD_MS = 12;

export const canvas = document.getElementById("snake_canvas");
export const error_log = document.getElementById("error_log");

/**
 * Report an error message to the user through the log and through the debug console.
 * @param {string} error_message
 */
export const report_error = (error_message) => {
    console.log(error_message);
    const p = document.createElement("p")
    p.textContent = error_message;
    error_log.appendChild(p);
}

export const BITS_FOR_COORD = 10;
/**
 * Encodes a 2D coordinates with elements < 1024 into a single number
 * @param {number} x 
 * @param {number} y 
 * @returns {number}
 */
export const encode_coord = (x, y) => {
    return x | (y << BITS_FOR_COORD);
}

/**
 * Decodes an encoded coordinate into x, y coordinates
 * @param {number} coord
 * @returns {number[]}
 */
export const decode_coord = (coord) => {
    return [
        decode_coord_x(coord),
        decode_coord_y(coord),
    ];
}

/**
 * Decodes an encoded coordinate into just the x coordinate
 * @param {number} coord
 * @returns {number}
 */
export const decode_coord_x = (coord) => {
    return coord & ((1 << BITS_FOR_COORD) - 1);
}

/**
 * Decodes an encoded coordinate into just the y coordinate
 * @param {number} coord
 * @returns {number}
 */
export const decode_coord_y = (coord) => {
    return coord >> BITS_FOR_COORD;
}