#version 300 es
in vec4 a_vertex_position;
in vec3 a_object_position;
in vec3 a_colour;
out vec3 v_colour;
uniform mat4 view_matrix;

void main() {
    gl_Position = view_matrix * (a_vertex_position + vec4(a_object_position, 0.0));
    v_colour = a_colour;
}
