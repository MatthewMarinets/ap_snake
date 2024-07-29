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

const init_resources = () => {
    const vert_shader_path = "shaders/snake.vert";
    const frag_shader_path = "shaders/snake.frag";

    const text_resources = [
        ["vertex_shader", vert_shader_path],
        ["fragment_shader", frag_shader_path],
    ];
    const all_resources = text_resources;

    for (let resource_index = 0; resource_index < text_resources.length; ++resource_index) {
        resources["load_" + text_resources[resource_index][0]] = new Promise((resolve) => {
            load_text_file(text_resources[resource_index][1], (contents) => {
                resources[text_resources[resource_index][0]] = contents;
                resolve(contents);
            });
        }).catch((error) => console.error(error));
    }

    resources.load_all_text = text_resources.map((resource_info) => resources["load_" + resource_info[0]]);
    resources.load_all = all_resources.map((resource_info) => resources["load_" + resource_info[0]]);

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
