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
const GENERAL_EXIT = [16, 32, 0];

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

const LEVEL_THREE_WALLS = [
    // bounds
    [16, 0, 33, 1],
    [0, 16, 1, 33],
    [16, 32, 33, 1],
    [32, 16, 1, 33],
    // l`l
    [8, 8, 1, 17],
    [24, 8, 1, 17],
    [16, 24, 17, 1],
];
const LEVEL_THREE_WALL_COLOUR = [13/6, 9/16, 0.97];

const LEVEL_FOUR_WALLS = [
    // bounds
    [16, 0, 33, 1],
    [0, 16, 1, 33],
    [16, 32, 33, 1],
    [32, 16, 1, 33],
    // [ ]
    [8, 16, 1, 17],
    [24, 16, 1, 17],
    [10, 24, 5, 1],
    [22, 24, 5, 1],
    [10, 8, 5, 1],
    [22, 8, 5, 1],
];
const LEVEL_FOUR_WALL_COLOUR = [13/6, 9/16, 0.97];

const LEVEL_FIVE_WALLS = [
    // bounds
    [16, 0, 33, 1],
    [0, 16, 1, 33],
    [16, 32, 33, 1],
    [32, 16, 1, 33],
    // L*?
    [8, 16, 1, 17],
    [24, 16, 1, 17],
    [16, 16, 1, 1],
    [20, 24, 9, 1],
    [12, 8, 9, 1],
];
const LEVEL_FIVE_WALL_COLOUR = [13/6, 9/16, 0.97];

const LEVEL_SIX_WALLS = [
    // bounds
    [16, 0, 33, 1],
    [0, 16, 1, 33],
    [16, 32, 33, 1],
    [32, 16, 1, 33],
    // || ||
    [6, 16, 1, 23],
    [9, 16, 1, 23],
    [23, 16, 1, 23],
    [26, 16, 1, 23],
];
const LEVEL_SIX_WALL_COLOUR = [13/6, 9/16, 0.97];

const LEVEL_SEVEN_WALLS = [
    // bounds
    [16, 0, 33, 1],
    [0, 16, 1, 33],
    [16, 32, 33, 1],
    [32, 16, 1, 33],
    // T
    [16, 27, 23, 1],
    [9.5, 24, 10, 1],
    [22.5, 24, 10, 1],
    [14, 14.5, 1, 20],
    [18, 14.5, 1, 20],
];
const LEVEL_SEVEN_WALL_COLOUR = [13/6, 9/16, 0.97];

const LEVEL_EIGHT_WALLS = [
    // bounds
    [16, 0, 33, 1],
    [0, 16, 1, 33],
    [16, 32, 33, 1],
    [32, 16, 1, 33],
    // ||=||
    [16, 27, 23, 1],
    [16, 24, 23, 1],
    [5, 10, 1, 21],
    [8, 10, 1, 21],
    [24, 10, 1, 21],
    [27, 10, 1, 21],
];
const LEVEL_EIGHT_WALL_COLOUR = [13/6, 9/16, 0.97];

export const LEVELS = [
    {walls: LEVEL_ONE_WALLS, colour: LEVEL_ONE_WALL_COLOUR, num_apples: 10, num_rounds: 2, exit: GENERAL_EXIT},
    {walls: LEVEL_TWO_WALLS, colour: LEVEL_TWO_WALL_COLOUR, num_apples: 10, num_rounds: 2, exit: GENERAL_EXIT},
    {walls: LEVEL_THREE_WALLS, colour: LEVEL_THREE_WALL_COLOUR, num_apples: 10, num_rounds: 2, exit: GENERAL_EXIT},
    {walls: LEVEL_FOUR_WALLS, colour: LEVEL_FOUR_WALL_COLOUR, num_apples: 10, num_rounds: 2, exit: GENERAL_EXIT},
    {walls: LEVEL_FIVE_WALLS, colour: LEVEL_FIVE_WALL_COLOUR, num_apples: 10, num_rounds: 2, exit: GENERAL_EXIT},
    {walls: LEVEL_SIX_WALLS, colour: LEVEL_SIX_WALL_COLOUR, num_apples: 10, num_rounds: 2, exit: GENERAL_EXIT},
    {walls: LEVEL_SEVEN_WALLS, colour: LEVEL_SEVEN_WALL_COLOUR, num_apples: 10, num_rounds: 2, exit: GENERAL_EXIT},
    {walls: LEVEL_EIGHT_WALLS, colour: LEVEL_EIGHT_WALL_COLOUR, num_apples: 10, num_rounds: 2, exit: GENERAL_EXIT},
];
