#version 300 es
precision mediump float;
in vec3 v_colour;
out vec4 out_colour;

void main() {
    out_colour = vec4(v_colour, 1.0);
}