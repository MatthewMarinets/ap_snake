"use strict";
import { resources } from "./resource_loader.js";
import { gl_ready } from "./gl.js";

export const main = () => {
    Promise.all(
        resources.load_all.concat(gl_ready)
    ).then((inputs) => {
        let canvas = document.getElementById("snake_canvas");
        console.log("started");
    }).catch((error_message) => {
        console.log(error_message)
    });
}

main();