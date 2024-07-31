#version 300 es
in vec4 a_vertex_position;
in vec3 a_object_position;
uniform mat4 view_matrix;

void main() {
    gl_Position = view_matrix * (a_vertex_position + vec4(a_object_position, 0.0));
}
