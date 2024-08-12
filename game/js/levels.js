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

const LEVEL_NINE_WALLS = [
    // bounds
    [16, 0, 33, 1],
    [0, 16, 1, 33],
    [16, 32, 33, 1],
    [32, 16, 1, 33],
    // [[]]
    [5, 16, 1, 23],
    [8, 16, 1, 17],
    [24, 16, 1, 17],
    [27, 16, 1, 23],
    [9, 27, 9, 1],
    [23, 27, 9, 1],
    [10.5, 24, 6, 1],
    [21.5, 24, 6, 1],
    [9, 5, 9, 1],
    [23, 5, 9, 1],
    [10.5, 8, 6, 1],
    [21.5, 8, 6, 1],
];
const LEVEL_NINE_WALL_COLOUR = [13/6, 9/16, 0.97];

const LEVEL_TEN_WALLS = [
    // bounds
    [16, 0, 33, 1],
    [0, 16, 1, 33],
    [16, 32, 33, 1],
    [32, 16, 1, 33],
    // LL*??
    [5, 16, 1, 23],
    [8, 17.5, 1, 20],
    [24, 14.5, 1, 20],
    [27, 16, 1, 23],
    [20.5, 27, 14, 1],
    [19, 24, 11, 1],
    [11.5, 5, 14, 1],
    [13, 8, 11, 1],
    [15, 15, 1, 1],
    [15, 17, 1, 1],
    [17, 15, 1, 1],
    [17, 17, 1, 1],
];
const LEVEL_TEN_WALL_COLOUR = [13/6, 9/16, 0.97];

const LEVEL_ELEVEN_WALLS = [
    // bounds
    [16, 0, 33, 1],
    [0, 16, 1, 33],
    [16, 32, 33, 1],
    [32, 16, 1, 33],
    // ||| |||
    [6, 16, 1, 23],
    [9, 16, 1, 23],
    [12, 16, 1, 23],
    [26, 16, 1, 23],
    [23, 16, 1, 23],
    [20, 16, 1, 23],
];
const LEVEL_ELEVEN_WALL_COLOUR = [13/6, 9/16, 0.97];

const LEVEL_TWELVE_WALLS = [
    // bounds
    [16, 0, 33, 1],
    [0, 16, 1, 33],
    [16, 32, 33, 1],
    [32, 16, 1, 33],
    // iTi
    [16, 28, 25, 1],
    [9, 24, 11, 1],
    [23, 24, 11, 1],
    [7, 20, 7, 1],
    [25, 20, 7, 1],
    [10, 12, 1, 17],
    [14, 14, 1, 21],
    [18, 14, 1, 21],
    [22, 12, 1, 17],
];
const LEVEL_TWELVE_WALL_COLOUR = [13/6, 9/16, 0.97];

const LEVEL_THIRTEEN_WALLS = [
    // bounds
    [16, 0, 33, 1],
    [0, 16, 1, 33],
    [16, 32, 33, 1],
    [32, 16, 1, 33],
    // |!|=|!|
    [4, 10, 1, 21],
    [6, 12, 1, 17],
    [6, 2, 1, 1],
    [8, 10, 1, 21],
    [28, 10, 1, 21],
    [26, 12, 1, 17],
    [26, 2, 1, 1],
    [24, 10, 1, 21],
    [16, 28, 25, 1],
    [16, 24, 25, 1],
];
const LEVEL_THIRTEEN_WALL_COLOUR = [13/6, 9/16, 0.97];

const LEVEL_FOURTEEN_WALLS = [
    // bounds
    [16, 0, 33, 1],
    [0, 16, 1, 33],
    [16, 32, 33, 1],
    [32, 16, 1, 33],
    // [[=]]
    [4, 16, 1, 25],
    [8, 16, 1, 17],
    [12, 19, 1, 3],
    [12, 13, 1, 3],
    [20, 13, 1, 3],
    [20, 19, 1, 3],
    [24, 16, 1, 17],
    [28, 16, 1, 25],

    [9, 28, 11, 1],
    [23, 28, 11, 1],
    [11, 24, 7, 1],
    [21, 24, 7, 1],
    [16, 20, 9, 1],
    [16, 12, 9, 1],
    [21, 8, 7, 1],
    [11, 8, 7, 1],
    [23, 4, 11, 1],
    [9, 4, 11, 1],
];
const LEVEL_FOURTEEN_WALL_COLOUR = [13/6, 9/16, 0.97];

export const LEVELS = [
    {walls: LEVEL_ONE_WALLS, colour: LEVEL_ONE_WALL_COLOUR, num_apples: 10, num_rounds: 2, exit: GENERAL_EXIT},
    {walls: LEVEL_TWO_WALLS, colour: LEVEL_TWO_WALL_COLOUR, num_apples: 10, num_rounds: 2, exit: GENERAL_EXIT},
    {walls: LEVEL_THREE_WALLS, colour: LEVEL_THREE_WALL_COLOUR, num_apples: 10, num_rounds: 2, exit: GENERAL_EXIT},
    {walls: LEVEL_FOUR_WALLS, colour: LEVEL_FOUR_WALL_COLOUR, num_apples: 10, num_rounds: 2, exit: GENERAL_EXIT},
    {walls: LEVEL_FIVE_WALLS, colour: LEVEL_FIVE_WALL_COLOUR, num_apples: 10, num_rounds: 2, exit: GENERAL_EXIT},
    {walls: LEVEL_SIX_WALLS, colour: LEVEL_SIX_WALL_COLOUR, num_apples: 10, num_rounds: 2, exit: GENERAL_EXIT},
    {walls: LEVEL_SEVEN_WALLS, colour: LEVEL_SEVEN_WALL_COLOUR, num_apples: 10, num_rounds: 2, exit: GENERAL_EXIT},
    {walls: LEVEL_EIGHT_WALLS, colour: LEVEL_EIGHT_WALL_COLOUR, num_apples: 10, num_rounds: 2, exit: GENERAL_EXIT},
    {walls: LEVEL_NINE_WALLS, colour: LEVEL_NINE_WALL_COLOUR, num_apples: 10, num_rounds: 2, exit: GENERAL_EXIT},
    {walls: LEVEL_TEN_WALLS, colour: LEVEL_TEN_WALL_COLOUR, num_apples: 10, num_rounds: 2, exit: GENERAL_EXIT},
    {walls: LEVEL_ELEVEN_WALLS, colour: LEVEL_ELEVEN_WALL_COLOUR, num_apples: 10, num_rounds: 2, exit: GENERAL_EXIT},
    {walls: LEVEL_TWELVE_WALLS, colour: LEVEL_TWELVE_WALL_COLOUR, num_apples: 10, num_rounds: 2, exit: GENERAL_EXIT},
    {walls: LEVEL_THIRTEEN_WALLS, colour: LEVEL_THIRTEEN_WALL_COLOUR, num_apples: 10, num_rounds: 2, exit: GENERAL_EXIT},
    {walls: LEVEL_FOURTEEN_WALLS, colour: LEVEL_FOURTEEN_WALL_COLOUR, num_apples: 10, num_rounds: 2, exit: GENERAL_EXIT},
];
