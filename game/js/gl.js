"use strict";

import { resources } from "./resource_loader.js"
import { canvas, report_error } from "./globals.js"

/** @type {WebGL2RenderingContext} */
const gl = canvas.getContext("webgl2");
if (!gl) {
    report_error("Could not load webgl context!");
}

const gl_initialized = new Promise((resolve, reject) => {
    if (gl) {
        resolve(gl);
    } else {
        reject("gl init failed");
    }
});

/**
 * 
 * @param {WebGL2RenderingContext} gl - The webgl context
 * @param {number} type - The shader type, either `gl.VERTEX_SHADER` or `gl.FRAGMENT_SHADER`
 * @param {string} source - The shader source code
 * @returns {WebGLShader|null} The resulting shader reference if successful
 */
const create_shader = (gl, type, source) => {
    let shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    let success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (success) {
        return shader;
    }
    report_error("Could not compile shader");
    console.log(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
}

const shaders_initialized = Promise.all(resources.load_all_text.concat(gl_initialized)).then((inputs) => {
    let program = gl.createProgram();
    let vertex_shader = create_shader(gl, gl.VERTEX_SHADER, resources.vertex_shader);
    let fragment_shader = create_shader(gl, gl.FRAGMENT_SHADER, resources.fragment_shader);
    if (program == null || vertex_shader == null || fragment_shader == null) {
        return new Promise.reject("Shader program initialization failed");
    }
    gl.attachShader(program, vertex_shader);
    gl.attachShader(program, fragment_shader);
    gl.linkProgram(program, fragment_shader);
    let success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (success) {
        return program;
    }
    report_error("Unable to link shader program");
    console.log(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    return new Promise.reject("Shader program initialization failed");
});

/**
 * @typedef {Object} Locations
 * @property {number} a_position
 * @property {number} u_colour
 */
/** @type {Locations} */
const locations = {}
const locations_initialized = shaders_initialized.then((program) => {
    locations.a_position = gl.getAttribLocation(program, "a_position");
    locations.u_colour = gl.getUniformLocation(program, "colour");

    // buffer
    const position_buffer = gl.createBuffer();
    if (position_buffer == null) {
        report_error("");
        return Promise.reject("Error during location init");
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, position_buffer);
    const positions = new Float32Array([
        0.0, 0.0, 0.0,
        0.0, 1.0, 0.0,
        0.5, 0.0, 0.0,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    // attributes
    const vao = gl.createVertexArray();
    gl.bindVertexArray(vao);
    gl.enableVertexAttribArray(locations.a_position);

    const size = 3;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    // Note: This also binds the current ARRAY_BUFFER (ie `positions`) to the `a_position` location
    gl.vertexAttribPointer(locations.a_position, size, type, normalize, stride, offset);

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    // uniforms
    gl.useProgram(program);
    gl.uniform4f(locations.u_colour, 1.0, 0.5, 0.1, 1.0);

    // actually draw
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.bindVertexArray(vao);
    gl.drawArrays(gl.TRIANGLES, 0, 3);

    return locations;
});

export const gl_ready = locations_initialized;
