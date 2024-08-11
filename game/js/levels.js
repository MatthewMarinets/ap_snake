"use strict";

const LEVEL_ONE_WALLS = [
    // bounds
    [16, 0, 33, 1],
    [0, 16, 1, 33],
    [16, 32, 33, 1],
    [32, 16, 1, 33],
    // ||
    [8, 16, 1, 17],
    [24, 16, 1, 17],
];
const LEVEL_ONE_WALL_COLOUR = [13/6, 9/16, 0.97];
const LEVEL_ONE_EXIT = [16, 32, 0];

const LEVEL_TWO_WALLS = [
    // bounds
    [16, 0, 33, 1],
    [0, 16, 1, 33],
    [16, 32, 33, 1],
    [32, 16, 1, 33],
    // T
    [16, 24, 19, 1],
    [16, 16, 1, 17],
];
const LEVEL_TWO_WALL_COLOUR = [13/6, 9/16, 0.97];
const LEVEL_TWO_EXIT = [16, 32, 0];

const LEVEL_THREE_WALLS = [
    // bounds
    [16, 0, 33, 1],
    [0, 16, 1, 33],
    [16, 32, 33, 1],
    [32, 16, 1, 33],
    // l`l
    [8, 8, 1, 17],
    [25, 8, 1, 17],
    [16.5, 24, 18, 1],
];
const LEVEL_THREE_WALL_COLOUR = [13/6, 9/16, 0.97];
const LEVEL_THREE_EXIT = [16, 32, 0];

export const LEVELS = [
    {walls: LEVEL_ONE_WALLS, colour: LEVEL_ONE_WALL_COLOUR, num_apples: 10, num_rounds: 2, exit: LEVEL_ONE_EXIT},
    {walls: LEVEL_TWO_WALLS, colour: LEVEL_TWO_WALL_COLOUR, num_apples: 10, num_rounds: 2, exit: LEVEL_TWO_EXIT},
    {walls: LEVEL_THREE_WALLS, colour: LEVEL_THREE_WALL_COLOUR, num_apples: 10, num_rounds: 2, exit: LEVEL_THREE_EXIT},
];
