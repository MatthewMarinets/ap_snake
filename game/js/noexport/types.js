/**
 * @typedef {Object} Resources
 * @property {Promise[]} load_all - A list of all resource promises
 * @property {Promise<string>[]} load_all_text - A list of all text resource promises
 * @property {Promise<string>} load_vertex_shader - Vertex Shader Promise
 * @property {Promise<string>} load_fragment_shader - Fragment Shader Promise
 * @property {Promise<string>} vertex_shader - Vertex Shader loaded value
 * @property {Promise<string>} fragment_shader - Fragment Shader loaded value
 */