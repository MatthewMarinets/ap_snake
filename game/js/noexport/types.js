/**
 * @typedef {Object} Resources
 * @property {Promise[]} load_all - A list of all resource promises
 * @property {Promise<string>[]} load_all_text - A list of all text resource promises
 * @property {Promise<string>} load_vertex_shader - Vertex Shader Promise
 * @property {Promise<string>} load_fragment_shader - Fragment Shader Promise
 * @property {Promise<string>} vertex_shader - Vertex Shader loaded value
 * @property {Promise<string>} fragment_shader - Fragment Shader loaded value
 * 
 * @typedef {Object} AppState
 * @property {"menu"|"game"} state
 * @property {number} time
 * @property {MenuState} menu_state
 * @property {GameState} game_state
 * 
 * @typedef {Object} MenuState
 * @property {number} cursor_position
 * @property {[number, number]} cursor_pos
 * @property {string[]} menu_options
 * 
 * @typedef {Object} GameState
 * @property {number} width
 * @property {number} height
 * @property {number[][]} walls
 * @property {number[]} wall_colour
 * @property {number[]} apples
 * @property {number[][]} player_pos
 * @property {Camera} camera
 * @property {0|1|2|3} player_direction
 * @property {0|1|2|3} player_last_direction
 * @property {-1|0|1|2|3} player_buffered_direction
 * @property {number} player_last_moved
 * @property {number} level_time_ms
 * 
 */