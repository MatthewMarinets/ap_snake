#version 300 es
in vec3 a_vertex_position;
in vec3 a_object_position;
in vec3 a_object_scale;
in vec3 a_colour;
out vec3 v_colour;
uniform mat4 view_matrix;

void main() {
    vec4 vertex_world_position = vec4(a_vertex_position * a_object_scale + a_object_position, 1.0);
    gl_Position = view_matrix * vertex_world_position;
    v_colour = a_colour;
}
