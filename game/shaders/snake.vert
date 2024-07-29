#version 300 es
in vec4 a_position;
uniform mat4 view_matrix;

void main() {
    gl_Position = view_matrix * a_position;
}
