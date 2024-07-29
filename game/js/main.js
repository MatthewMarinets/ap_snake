"use strict";
import { GAME_UPDATE_PERIOD_MS } from "./globals.js";
import { gl_ready, gl_draw } from "./gl.js";
import { init_app_state, iterate_app_state } from "./game.js";


const pressed_keys = {};

document.addEventListener("keydown", (keyEvent) => {
    pressed_keys[keyEvent.key] = true;
});
document.addEventListener("keyup", (keyEvent) => {
    pressed_keys[keyEvent.key] = false;
});


const app_state = init_app_state();

const render_loop = (time) => {
    gl_draw(app_state);
    window.requestAnimationFrame(render_loop);
}

const game_update_loop = (time) => {
    app_state.time += GAME_UPDATE_PERIOD_MS;
    iterate_app_state(app_state, GAME_UPDATE_PERIOD_MS, {...pressed_keys});
}

export const main = () => {
    // game state update loop
    setInterval(game_update_loop, GAME_UPDATE_PERIOD_MS);

    // render loop
    gl_ready.then((inputs) => {
        render_loop();
    }).catch((error_message) => {
        console.log(error_message)
    });

    // todo: sound loop
}

main();