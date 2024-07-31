"use strict";

import { resources } from "./resource_loader.js";
import { canvas, report_error } from "./globals.js";

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
};

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

const cube_vertices = new Float32Array([
    // front
    -0.5, -0.5, -0.5,
    +0.5, -0.5, -0.5,
    -0.5, +0.5, -0.5,
    +0.5, -0.5, -0.5,
    +0.5, +0.5, -0.5,
    -0.5, +0.5, -0.5,
    // back
    -0.5, -0.5, +0.5,
    -0.5, +0.5, +0.5,
    +0.5, -0.5, +0.5,
    +0.5, -0.5, +0.5,
    -0.5, +0.5, +0.5,
    +0.5, +0.5, +0.5,
    // left
    -0.5, -0.5, -0.5,
    -0.5, +0.5, -0.5,
    -0.5, -0.5, +0.5,
    -0.5, -0.5, +0.5,
    -0.5, +0.5, -0.5,
    -0.5, +0.5, +0.5,
    // right
    +0.5, -0.5, -0.5,
    +0.5, -0.5, +0.5,
    +0.5, +0.5, -0.5,
    +0.5, -0.5, +0.5,
    +0.5, +0.5, +0.5,
    +0.5, +0.5, -0.5,
    // top
    -0.5, +0.5, -0.5,
    +0.5, +0.5, -0.5,
    -0.5, +0.5, +0.5,
    -0.5, +0.5, +0.5,
    +0.5, +0.5, -0.5,
    +0.5, +0.5, +0.5,
    // bottom
    -0.5, -0.5, -0.5,
    -0.5, -0.5, +0.5,
    +0.5, -0.5, -0.5,
    -0.5, -0.5, +0.5,
    +0.5, -0.5, +0.5,
    +0.5, -0.5, -0.5,
]);
const NUM_VERTICES = cube_vertices.length / 3;

const MAX_POSITION_BUFFER_SIZE_BYTES = 1536;

/**
 * @typedef {Object} Locations
 * @property {number} a_position
 * @property {number} a_object_position
 * @property {number} a_colour
 * @property {number} u_view_matrix
 * 
 * @typedef {Object} RenderInfo
 * @property {Locations} locations
 * @property {WebGLVertexArrayObject} vao
 * @property {WebGLProgram} program
 * @property {WebGLBuffer} position_buffer
 * @property {WebGLBuffer} colour_buffer
 */

/** @type {RenderInfo} */
const renderinfo = {locations: {}}
const renderinfo_initialized = shaders_initialized.then((program) => {
    renderinfo.locations.a_position = gl.getAttribLocation(program, "a_vertex_position");
    renderinfo.locations.a_object_position = gl.getAttribLocation(program, "a_object_position");
    renderinfo.locations.a_colour = gl.getAttribLocation(program, "a_colour");
    renderinfo.locations.u_view_matrix = gl.getUniformLocation(program, "view_matrix");
    renderinfo.program = program;

    // buffer
    const vertex_position_buffer = gl.createBuffer();
    if (vertex_position_buffer == null) {
        report_error("");
        return Promise.reject("Error during location init");
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_position_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, cube_vertices, gl.STATIC_DRAW);

    // attributes
    renderinfo.vao = gl.createVertexArray();
    gl.bindVertexArray(renderinfo.vao);
    gl.enableVertexAttribArray(renderinfo.locations.a_position);

    const size = 3;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    // Note: This also binds the current ARRAY_BUFFER (ie `positions`) to the `a_position` location
    gl.vertexAttribPointer(renderinfo.locations.a_position, size, type, normalize, stride, offset);

    // position buffer
    renderinfo.position_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, renderinfo.position_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, MAX_POSITION_BUFFER_SIZE_BYTES, gl.DYNAMIC_DRAW);
    gl.enableVertexAttribArray(renderinfo.locations.a_object_position)
    gl.vertexAttribPointer(
        renderinfo.locations.a_object_position,
        3,
        gl.FLOAT,
        false,
        3*4,
        0,
    );
    gl.vertexAttribDivisor(renderinfo.locations.a_object_position, 1);

    // colour buffer
    renderinfo.colour_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, renderinfo.colour_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, MAX_POSITION_BUFFER_SIZE_BYTES, gl.DYNAMIC_DRAW);
    gl.enableVertexAttribArray(renderinfo.locations.a_colour)
    gl.vertexAttribPointer(
        renderinfo.locations.a_colour,
        3,
        gl.FLOAT,
        false,
        3*4,
        0,
    );
    gl.vertexAttribDivisor(renderinfo.locations.a_colour, 1);

    // options
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.enable(gl.CULL_FACE);

    return renderinfo;
});

export const gl_ready = renderinfo_initialized;

const ASPECT = canvas.height / canvas.width;
const identity4x4 = new Float32Array([
    ASPECT, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1,
]);

/**
 * Draws the current state. Assumes renderinfo has been initialized.
 * @param {AppState} app_state 
 */
export const gl_draw = (app_state) => {
    // uniforms
    gl.useProgram(renderinfo.program);
    // gl.uniformMatrix4fv(renderinfo.locations.u_view_matrix, true, identity4x4, 0, 0);

    const positions = new Float32Array([
        0, 0, 0,
        0.5, 0.5, 0,
        1, 1, 0,
    ])
    const colours = new Float32Array([
        1, 0.5, 0.1,
        13/16, 9/16, 0.97,
        1, 0, 1,
    ])
    if (positions.length != colours.length) {
        report_error("colour and position buffers must be the same size!");
        return;
    }
    const num_instances = positions.length / 3;

    if (app_state.state == "menu") {
        const transform = new Float32Array([
            ASPECT, 0, 0, app_state.menu_state.cursor_pos[0] * ASPECT,
            0, 1, 0, app_state.menu_state.cursor_pos[1],
            0, 0, 1, 0,
            0, 0, 0, 1,
        ]);
        gl.uniformMatrix4fv(renderinfo.locations.u_view_matrix, true, transform, 0, 0);
    } else {
        // game
        const transform = new Float32Array([
            ASPECT, 0, 0, app_state.game_state.player_pos[0] / 30 * ASPECT,
            0, 1, 0, app_state.game_state.player_pos[1] / 30,
            0, 0, 1, 0,
            0, 0, 0, 1,
        ]);
        gl.uniformMatrix4fv(renderinfo.locations.u_view_matrix, true, transform, 0, 0);
    }

    // buffer the colour / cube position data
    gl.bindBuffer(gl.ARRAY_BUFFER, renderinfo.position_buffer);
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, positions);
    gl.bindBuffer(gl.ARRAY_BUFFER, renderinfo.colour_buffer);
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, colours);

    // actually draw
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.bindVertexArray(renderinfo.vao);
    // gl.drawArrays(gl.TRIANGLES, 0, NUM_VERTICES);
    gl.drawArraysInstanced(gl.TRIANGLES, 0, NUM_VERTICES, num_instances);
};
