const WALL = 1;
const COIN = 2;
const GROUND = 3;
const COIN_1 = 4;
const PACMAN = 5;
const COIN_2 = 6;
const RED_GHOST = 8;
const YELLOW_GHOST = 9;
const GREEN_GHOST = 10;
const PINK_GHOST = 11;
const PACMAN_2 = 12;

var level = [
        //Level 1 (Array [0])
        {
            pacman: {

                    id: 5,
                    x: 2,
                    y: 1,
                    direction: ""

                },

            map: [

                    [WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL],
                    [WALL,GROUND,PACMAN,COIN,COIN,COIN,COIN,COIN,GROUND,COIN,COIN,COIN,COIN,COIN,RED_GHOST,WALL],
                    [WALL,GROUND,WALL,WALL,GROUND,WALL,WALL,WALL,PINK_GHOST,WALL,WALL,WALL,WALL,WALL,WALL,WALL],
                    [WALL,GREEN_GHOST,GROUND,GROUND,GROUND,GROUND,YELLOW_GHOST,GROUND,GROUND,WALL,WALL,WALL,WALL,WALL,WALL,WALL],
                    [WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL]

                ],

            redGhost: {

                    id: 8,
                    x: 14,
                    y: 1,
                    fieldBehindTheGhost: GROUND

                },

            yellowGhost: {

                    id: 9,
                    x: 6,
                    y: 3,
                    fieldBehindTheGhost: 3

                },

            greenGhost: {

                    id: 10,
                    x: 1,
                    y: 3,
                    fieldBehindTheGhost: 3

                },

            pinkGhost: {

                    id: 11,
                    x: 8,
                    y: 2,
                    fieldBehindTheGhost: 3

                }

        },
        
        //Level 2 (Array [1])
        {
            pacman: {

                    id: 5,
                    x : 4,
                    y: 2,
                    direction: ""
                    
                },

            map: [

                      [WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,GROUND],
                      [WALL,COIN_1,YELLOW_GHOST,GROUND,COIN,GREEN_GHOST,GROUND,PINK_GHOST,GROUND,WALL,GROUND,COIN,GROUND,GROUND,RED_GHOST,GROUND,GROUND,GROUND,WALL,GROUND],
                      [WALL,COIN,WALL,WALL,PACMAN,COIN,WALL,WALL,COIN_1,COIN,GROUND,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,GROUND],
                      [WALL,COIN_1,GROUND,COIN,GROUND,COIN,WALL,WALL,GROUND,WALL,COIN,GROUND,COIN,GROUND,COIN,COIN,GROUND,GROUND,WALL,GROUND],
                      [WALL,WALL,WALL,COIN,WALL,COIN_1,WALL,WALL,COIN_1,WALL,WALL,WALL,WALL,WALL,WALL,COIN_1,WALL,WALL,WALL,GROUND],
                      [WALL,COIN,GROUND,COIN,WALL,COIN,COIN,GROUND,COIN,WALL,COIN_1,GROUND,COIN_1,COIN,COIN_1,COIN,WALL,COIN,WALL,GROUND],
                      [WALL,GROUND,WALL,WALL,WALL,COIN,WALL,WALL,COIN,WALL,WALL,WALL,WALL,COIN,GROUND,GROUND,WALL,GROUND,WALL,GROUND],
                      [WALL,GROUND,COIN,COIN_2,WALL,COIN,WALL,WALL,COIN_2,WALL,COIN_2,GROUND,GROUND,GROUND,WALL,GROUND,WALL,GROUND,WALL,GROUND],
                      [WALL,WALL,WALL,GROUND,WALL,COIN_2,COIN,COIN,COIN,WALL,WALL,WALL,WALL,WALL,WALL,GROUND,WALL,GROUND,WALL,WALL],
                      [WALL,COIN,WALL,COIN,COIN,COIN,WALL,WALL,COIN,WALL,GROUND,GROUND,GROUND,GROUND,GROUND,GROUND,GROUND,GROUND,GROUND,GROUND],
                      [WALL,COIN_2,GROUND,COIN,GROUND,COIN,GROUND,WALL,COIN_2,WALL,GROUND,GROUND,GROUND,GROUND,GROUND,COIN,COIN,GROUND,COIN_2,WALL],
                      [WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL]

                ],

            redGhost: {

                    id: 8,
                    x: 14,
                    y: 1,
                    fieldBehindTheGhost: 3

                },

            yellowGhost: {

                    id: 9,
                    x:2,
                    y:1,
                    fieldBehindTheGhost: 3

                },

            greenGhost: {

                    id: 10,
                    x: 5,
                    y: 1,
                    fieldBehindTheGhost: 3

                },

            pinkGhost: {

                    id: 11,
                    x: 7,
                    y: 1,
                    fieldBehindTheGhost: 3

                }

        },
        
        //Level 3 (Array [2])
        {
            pacman: {

                    id: 5,
                    x: 9,
                    y: 12,
                    direction: ""

                },

            map: [

                  [GROUND,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,GROUND],
                  [GROUND,WALL,YELLOW_GHOST,COIN_2,COIN,GROUND,COIN,COIN_2,GROUND,WALL,GROUND,COIN,GROUND,COIN,COIN,GROUND,COIN,GROUND,WALL,GROUND,COIN,GROUND,GROUND,GROUND],
                  [GROUND,WALL,WALL,WALL,COIN,WALL,WALL,WALL,COIN,WALL,GREEN_GHOST,WALL,WALL,WALL,COIN,WALL,WALL,COIN_1,COIN,GROUND,WALL,WALL,WALL,GROUND],
                  [GROUND,WALL,WALL,WALL,COIN_1,COIN,COIN,GROUND,COIN,COIN_2,COIN_1,GROUND,COIN,GROUND,COIN,WALL,WALL,GROUND,WALL,COIN,GROUND,COIN,WALL,GROUND],
                  [GROUND,WALL,RED_GHOST,WALL,COIN,WALL,GROUND,WALL,WALL,WALL,WALL,WALL,COIN,WALL,COIN_1,WALL,WALL,COIN_1,WALL,COIN,WALL,WALL,WALL,GROUND],
                  [GROUND,WALL,COIN,COIN,COIN,WALL,GROUND,COIN,PINK_GHOST,WALL,COIN,GROUND,COIN,WALL,COIN,COIN,GROUND,COIN,WALL,COIN_1,GROUND,COIN_1,WALL,GROUND],
                  [GROUND,WALL,WALL,WALL,COIN,WALL,WALL,WALL,GROUND,WALL,GROUND,WALL,WALL,WALL,COIN,WALL,WALL,COIN,WALL,COIN,GROUND,WALL,WALL,GROUND],
                  [WALL,WALL,WALL,WALL,COIN_1,WALL,COIN,GROUND,GROUND,COIN,GROUND,COIN,COIN_1,WALL,COIN,WALL,WALL,COIN_1,WALL,GROUND,GROUND,GROUND,WALL,GROUND],
                  [GROUND,GROUND,COIN,COIN,COIN,WALL,GROUND,WALL,WALL,COIN_2,WALL,WALL,GROUND,WALL,COIN_1,COIN,COIN,COIN,WALL,WALL,WALL,WALL,WALL,WALL],
                  [WALL,WALL,WALL,WALL,COIN,GROUND,COIN,WALL,COIN_2,COIN,COIN,WALL,COIN,COIN,COIN,WALL,WALL,COIN,WALL,GROUND,GROUND,GROUND,GROUND,GROUND],
                  [GROUND,WALL,WALL,COIN,GROUND,WALL,COIN,WALL,WALL,WALL,WALL,WALL,COIN,WALL,COIN,COIN,WALL,COIN_1,WALL,GROUND,GROUND,GROUND,WALL,WALL],
                  [GROUND,WALL,WALL,COIN,WALL,WALL,COIN,COIN,GROUND,COIN,GROUND,COIN,COIN,WALL,WALL,GROUND,WALL,COIN,WALL,WALL,WALL,GROUND,WALL,GROUND],
                  [GROUND,WALL,GROUND,GROUND,COIN,COIN_2,COIN_1,WALL,COIN,PACMAN,WALL,WALL,GROUND,COIN,COIN_1,GROUND,COIN,COIN_2,GROUND,GROUND,GROUND,GROUND,WALL,GROUND],
                  [GROUND,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,GROUND]

              ],

            redGhost: {

                  id: 8,
                  x: 2,
                  y: 4,
                  fieldBehindTheGhost: 3

              },

            yellowGhost: {

                    id: 9,
                    x:2,
                    y:1,
                    fieldBehindTheGhost: 3

                },

            greenGhost: {

                    id: 10,
                    x: 10,
                    y: 2,
                    fieldBehindTheGhost: 3

                },

            pinkGhost: {

                    id: 11,
                    x: 8,
                    y: 5,
                    fieldBehindTheGhost: 3

                }

        }

    ];