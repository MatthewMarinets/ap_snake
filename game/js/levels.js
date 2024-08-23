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
    [6, 2, 1, 1],   // item
    [8, 10, 1, 21],
    [28, 10, 1, 21],
    [26, 12, 1, 17],
    [26, 2, 1, 1],  // item
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

const LEVEL_FIFTEEN_WALLS = [
    // bounds
    [16, 0, 33, 1],
    [0, 16, 1, 33],
    [16, 32, 33, 1],
    [32, 16, 1, 33],
    // LL*`|`|
    [4, 16, 1, 25],
    [8, 18, 1, 21],
    [28, 16, 1, 25],
    [24, 14, 1, 21],
    [12, 4, 17, 1],
    [14, 8, 13, 1],
    [20, 28, 17, 1],
    [18, 24, 13, 1],

    [14, 13.5, 3, 2],
    [13.5, 14, 2, 3],
    [18, 13.5, 3, 2],
    [18.5, 14, 2, 3],
    [14, 18.5, 3, 2],
    [13.5, 18, 2, 3],
    [18, 18.5, 3, 2],
    [18.5, 18, 2, 3],
    [16, 16, 1, 1],  // item
];
const LEVEL_FIFTEEN_WALL_COLOUR = [13/6, 9/16, 0.97];

const LEVEL_SIXTEEN_WALLS = [
    // bounds
    [16, 0, 33, 1],
    [0, 16, 1, 33],
    [16, 32, 33, 1],
    [32, 16, 1, 33],
    // |||| ||||
    [3, 16, 1, 23],
    [6, 16, 1, 23],
    [9, 16, 1, 23],
    [12, 16, 1, 23],
    [20, 16, 1, 23],
    [23, 16, 1, 23],
    [26, 16, 1, 23],
    [29, 16, 1, 23],
];
const LEVEL_SIXTEEN_WALL_COLOUR = [13/6, 9/16, 0.97];

const LEVEL_SEVENTEEN_WALLS = [
    // bounds
    [16, 0, 33, 1],
    [0, 16, 1, 33],
    [16, 32, 33, 1],
    [32, 16, 1, 33],
    // .\mathbb{T}.
    [16, 28, 25, 1],
    [9, 24, 11, 1],
    [23, 24, 11, 1],
    [7, 20, 7, 1],
    [25, 20, 7, 1],
    [5, 16, 3, 1],
    [27, 16, 3, 1],
    [6, 9.5, 1, 12],
    [26, 9.5, 1, 12],
    [10, 11.5, 1, 16],
    [22, 11.5, 1, 16],
    [14, 13, 1, 23],
    [18, 13, 1, 23],
];
const LEVEL_SEVENTEEN_WALL_COLOUR = [13/6, 9/16, 0.97];

const LEVEL_EIGHTEEN_WALLS = [
    // bounds
    [16, 0, 33, 1],
    [0, 16, 1, 33],
    [16, 32, 33, 1],
    [32, 16, 1, 33],
    // ||===||
    [16, 28, 25, 1],
    [16, 24, 25, 1],
    [16, 20, 9, 1],
    [16, 16, 9, 1],
    [16, 12, 9, 1],
    [16, 8, 9, 1],

    [2, 10.5, 1, 14],
    [2, 2, 1, 1],   // item
    [4, 10, 1, 21],
    [6, 10.5, 1, 14],
    [6, 2, 1, 1],   // item
    [8, 10, 1, 21],

    [30, 10.5, 1, 14],
    [30, 2, 1, 1],   // item
    [28, 10, 1, 21],
    [26, 10.5, 1, 14],
    [26, 2, 1, 1],   // item
    [24, 10, 1, 21],
];
const LEVEL_EIGHTEEN_WALL_COLOUR = [13/6, 9/16, 0.97];

const LEVEL_NINETEEN_WALLS = [
    // bounds
    [16, 0, 33, 1],
    [0, 16, 1, 33],
    [16, 32, 33, 1],
    [32, 16, 1, 33],
    // [*]
    [4, 16, 1, 25],
    [9, 4, 11, 1],
    [9, 28, 11, 1],
    [28, 16, 1, 25],
    [23, 4, 11, 1],
    [23, 28, 11, 1],
    // =
    [16, 24, 17, 1],
    [8, 11, 1, 7],
    [24, 11, 1, 7],
    [16, 8, 17, 1],
    [8, 21, 1, 7],
    [24, 21, 1, 7],
    // []
    [12, 16, 1, 9],
    [13, 12, 3, 1],
    [13, 20, 3, 1],
    [20, 16, 1, 9],
    [19, 12, 3, 1],
    [19, 20, 3, 1],
    // .:.
    [14, 16, 1, 1],  // item
    [16, 14, 1, 1],  // item
    [16, 18, 1, 1],  // item
    [18, 16, 1, 1],  // item
];
const LEVEL_NINETEEN_WALL_COLOUR = [13/6, 9/16, 0.97];

const LEVEL_TWENTY_WALLS = [
    // bounds
    [16, 0, 33, 1],
    [0, 16, 1, 33],
    [16, 32, 33, 1],
    [32, 16, 1, 33],
    // LL`|`|
    [4, 16, 1, 25],
    [8, 19, 1, 23],
    [12, 4, 17, 1],
    [14, 8, 13, 1],

    [28, 16, 1, 25],
    [24, 13, 1, 23],
    [20, 28, 17, 1],
    [18, 24, 13, 1],
    // windmill
    [13.5, 17, 2, 1],
    [14, 19, 3, 1],
    [17, 18.5, 1, 2],
    [19, 18, 1, 3],
    [18.5, 15, 2, 1],
    [18, 13, 3, 1],
    [15, 13.5, 1, 2],
    [13, 14, 1, 3],

    [16, 16, 1, 1],  // item;
];
const LEVEL_TWENTY_WALL_COLOUR = [13/6, 9/16, 0.97];

const LEVEL_TWENTY_ONE_WALLS = [
    // bounds
    [16, 0, 33, 1],
    [0, 16, 1, 33],
    [16, 32, 33, 1],
    [32, 16, 1, 33],
    // |||||||
    [4, 16, 1, 25],
    [8, 16, 1, 25],
    [12, 16, 1, 25],
    [16, 16, 1, 25],
    [20, 16, 1, 25],
    [24, 16, 1, 25],
    [28, 16, 1, 25],
];
const LEVEL_TWENTY_ONE_WALL_COLOUR = [13/6, 9/16, 0.97];

const LEVEL_TWENTY_TWO_WALLS = [
    // bounds
    [16, 0, 33, 1],
    [0, 16, 1, 33],
    [16, 32, 33, 1],
    [32, 16, 1, 33],
    //  _
    [16, 28, 25, 1],
    // `||`
    [7, 24, 15, 1],
    [25, 24, 15, 1],
    [14, 13.4, 1, 22],
    [18, 13.4, 1, 22],
    // .i i.
    [6, 8, 1, 17],
    [4.5, 16, 4, 1],
    [10, 12, 1, 17],
    [7, 20, 7, 1],

    [26, 8, 1, 17],
    [27.5, 16, 4, 1],
    [22, 12, 1, 17],
    [25, 20, 7, 1],
];
const LEVEL_TWENTY_TWO_WALL_COLOUR = [13/6, 9/16, 0.97];

const LEVEL_TWENTY_THREE_WALLS = [
    // bounds
    [16, 0, 33, 1],
    [0, 16, 1, 33],
    [16, 32, 33, 1],
    [32, 16, 1, 33],
    //  -=
    [16, 28, 25, 1],
    [16, 26, 19, 1],
    [16, 24, 25, 1],
    // .-.-.-.-
    [16, 22, 1, 1],  // item
    [16, 20, 5, 1],
    [16, 18, 1, 1],
    [16, 16, 5, 1],
    [16, 14, 1, 1],
    [16, 12, 5, 1],
    [16, 10, 1, 1],
    [16, 8, 5, 1],
    // ;|;|;|
    [2, 14.5, 1, 6],
    [2, 7, 1, 7],
    [4, 10, 1, 21],
    [6, 14.5, 1, 6],
    [6, 7, 1, 7],
    [8, 10, 1, 21],
    [10, 14.5, 1, 6],
    [10, 7, 1, 7],
    [12, 10, 1, 21],

    [30, 14.5, 1, 6],
    [30, 7, 1, 7],
    [28, 10, 1, 21],
    [26, 14.5, 1, 6],
    [26, 7, 1, 7],
    [24, 10, 1, 21],
    [22, 14.5, 1, 6],
    [22, 7, 1, 7],
    [20, 10, 1, 21],
];
const LEVEL_TWENTY_THREE_WALL_COLOUR = [13/6, 9/16, 0.97];

const LEVEL_TWENTY_FOUR_WALLS = [
    // bounds
    [16, 0, 33, 1],
    [0, 16, 1, 33],
    [16, 32, 33, 1],
    [32, 16, 1, 33],
    //  |=|
    [4, 16, 1, 21],
    [28, 16, 1, 21],
    [16, 4, 21, 1],
    [16, 28, 21, 1],
    //  |=|
    [8, 16, 1, 13],
    [24, 16, 1, 13],
    [16, 8, 13, 1],
    [16, 24, 13, 1],
    //  |=|
    [12, 16, 1, 5],
    [20, 16, 1, 5],
    [16, 12, 5, 1],
    [16, 20, 5, 1],
    // ::
    [15, 15, 1, 1],  // item
    [17, 15, 1, 1],  // item
    [15, 17, 1, 1],  // item
    [17, 17, 1, 1],  // item
];
const LEVEL_TWENTY_FOUR_WALL_COLOUR = [13/6, 9/16, 0.97];

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
    {walls: LEVEL_FIFTEEN_WALLS, colour: LEVEL_FIFTEEN_WALL_COLOUR, num_apples: 10, num_rounds: 2, exit: GENERAL_EXIT},
    {walls: LEVEL_SIXTEEN_WALLS, colour: LEVEL_SIXTEEN_WALL_COLOUR, num_apples: 10, num_rounds: 2, exit: GENERAL_EXIT},
    {walls: LEVEL_SEVENTEEN_WALLS, colour: LEVEL_SEVENTEEN_WALL_COLOUR, num_apples: 10, num_rounds: 2, exit: GENERAL_EXIT},
    {walls: LEVEL_EIGHTEEN_WALLS, colour: LEVEL_EIGHTEEN_WALL_COLOUR, num_apples: 10, num_rounds: 2, exit: GENERAL_EXIT},
    {walls: LEVEL_NINETEEN_WALLS, colour: LEVEL_NINETEEN_WALL_COLOUR, num_apples: 10, num_rounds: 2, exit: GENERAL_EXIT},
    {walls: LEVEL_TWENTY_WALLS, colour: LEVEL_TWENTY_WALL_COLOUR, num_apples: 10, num_rounds: 2, exit: GENERAL_EXIT},
    {walls: LEVEL_TWENTY_ONE_WALLS, colour: LEVEL_TWENTY_ONE_WALL_COLOUR, num_apples: 10, num_rounds: 2, exit: GENERAL_EXIT},
    {walls: LEVEL_TWENTY_TWO_WALLS, colour: LEVEL_TWENTY_TWO_WALL_COLOUR, num_apples: 10, num_rounds: 2, exit: GENERAL_EXIT},
    {walls: LEVEL_TWENTY_THREE_WALLS, colour: LEVEL_TWENTY_THREE_WALL_COLOUR, num_apples: 10, num_rounds: 2, exit: GENERAL_EXIT},
    {walls: LEVEL_TWENTY_FOUR_WALLS, colour: LEVEL_TWENTY_FOUR_WALL_COLOUR, num_apples: 10, num_rounds: 2, exit: GENERAL_EXIT},
];
