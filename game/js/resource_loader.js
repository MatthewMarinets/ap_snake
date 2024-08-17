"use strict";

/**
 * Loads resource files such as shader source and metadata.
 * @param {string} filename - The filename to load
 * @param {function} callback - The function to call after the xhr request is done
 */
const load_text_file = (filename, callback) => {
    let contents;
    const xhr = new XMLHttpRequest();
    xhr.open("get", filename);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === xhr.DONE) {
            contents = xhr.responseText;
            callback(contents)
        }
    }
    xhr.responseType = "text";
    xhr.send();
    return contents;
}

const load_image_file = (filename, callback) => {
    var image = new Image();
    image.src = filename;
    image.addEventListener('load', callback);
}

const init_resources = () => {
    const vert_shader_path = "shaders/snake.vert";
    const frag_shader_path = "shaders/snake.frag";
    const tiles_image_path = "resources/tiles.png";

    const text_resources = [
        {"name": "vertex_shader", "path": vert_shader_path, "loader": load_text_file},
        {"name": "fragment_shader", "path": frag_shader_path, "loader": load_text_file},
    ];
    const image_resources = [
        {"name": "tiles_image", "path": tiles_image_path, "loader": load_image_file},
    ];
    const resource_config = text_resources.concat(image_resources)

    for (let resource_index = 0; resource_index < resource_config.length; ++resource_index) {
        resources["load_" + resource_config[resource_index].name] = new Promise((resolve) => {
            resource_config[resource_index].loader(resource_config[resource_index].path, (contents) => {
                resources[resource_config[resource_index].name] = contents;
                resolve(contents);
            });
        }).catch((error) => console.error(error));
    }

    resources.load_all_text = text_resources.map((resource_info) => resources["load_" + resource_info.name]);
    resources.load_all = resource_config.map((resource_info) => resources["load_" + resource_info.name]);

    Promise.all(
        resources.load_all
    ).then(
        () => {
            console.log("All resources loaded successfully");
        }
    );

};

/**
 * @type {Resources}
 */
export const resources = {};
init_resources(resources);
