"use strict";

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
