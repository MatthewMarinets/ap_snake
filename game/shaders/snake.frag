#version 300 es
precision mediump float;
uniform vec4 colour;
out vec4 out_colour;

void main() {
    out_colour = colour;
}