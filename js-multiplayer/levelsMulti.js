    // Hilfe bei der Zuweisung der Objekte:
	// 1 = <div class='wall'></div>            Wall
	// 2 = <div class='coin'></div>            Food
	// 3 = <div class='ground'></div>          Ground
    // 4 = <div class='coin1'></div>           Food
	// 5 = <div class='pacman'></div>          Pacman(Yellow)
    // 6 = <div class='coin2'></div>           Food
    // 7 = <div class='wallL'></div>           Wall
    // 8 = <div class='redGhost'></div>        Red Ghost
    // 9 = <div class='yellowGhost'></div>     Yellow Ghost


    //An array that contains the levels and is related to CurrentLevel and function won or KeyListener (Space).
    //If CurrentArray becomes larger after the operation of the Space key, the next digit of the array is loaded (newer level).
var level = 
    [
        //Level 1 (Array [0])
        {
            pacman: 
                {
                    id: 5,
                    x: 2,
                    y: 1,
                    direction: ""
                },
            map: 
                [
                    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
                    [1,3,5,2,2,2,2,2,3,2,2,2,2,2,8,1],
                    [1,3,1,1,12,1,1,1,11,1,1,1,1,1,1,1],
                    [1,10,3,3,3,3,9,3,3,1,1,1,1,1,1,1],
                    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
                ],
            redGhost: 
                {
                    id: 8,
                    x: 14,
                    y: 1,
                    fieldBehindTheGhost: 3
                },
            yellowGhost: 
                {
                    id: 9,
                    x: 6,
                    y: 3,
                    fieldBehindTheGhost: 3
                },
            greenGhost: 
                {
                    id: 10,
                    x: 1,
                    y: 3,
                    fieldBehindTheGhost: 3
                },
            pinkGhost: 
                {
                    id: 11,
                    x: 8,
                    y: 2,
                    fieldBehindTheGhost: 3
                },
            pacman2: 
                {
                    id: 12,
                    x: 4,
                    y: 2,
                    direction: ""
                }
        },
        
        //Level 2 (Array [1])
        {
            pacman: 
                {
                    id: 5,
                    x : 4,
                    y: 2,
                    direction: ""
                    
                },
            map: 
                [
                      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3],
                      [1,6,9,3,12,10,3,11,3,1,3,2,3,3,8,3,3,3,1,3],
                      [1,2,1,1,5,2,1,1,4,2,3,1,1,1,1,1,1,1,1,3],
                      [3,4,3,2,3,2,1,1,3,1,2,3,2,3,2,2,3,3,1,3],
                      [1,1,1,2,1,4,1,1,4,1,1,1,1,1,1,4,1,1,1,3],
                      [1,2,3,2,1,2,2,3,2,1,4,3,4,2,4,2,1,2,1,3],
                      [1,3,1,1,1,2,1,1,2,1,1,1,1,2,3,3,1,3,1,3],
                      [1,3,2,4,1,2,1,1,4,1,6,3,3,3,1,3,1,3,1,3],
                      [1,1,1,3,1,4,2,2,2,1,1,1,1,1,1,3,1,3,1,1],
                      [1,2,1,2,2,2,1,1,2,1,3,3,3,3,3,3,3,3,3,3],
                      [1,6,3,2,3,2,3,1,4,1,3,3,3,3,3,2,2,3,6,1],
                      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
                ],
            redGhost: 
                {
                    id: 8,
                    x: 14,
                    y: 1,
                    fieldBehindTheGhost: 3
                },
            yellowGhost:
                {
                    id: 9,
                    x:2,
                    y:1,
                    fieldBehindTheGhost: 3
                },
            greenGhost: 
                {
                    id: 10,
                    x: 5,
                    y: 1,
                    fieldBehindTheGhost: 3
                },
            pinkGhost: 
                {
                    id: 11,
                    x: 7,
                    y: 1,
                    fieldBehindTheGhost: 3
                },
            pacman2: 
                {
                    id: 12,
                    x: 4,
                    y: 1,
                    direction: ""
                }
        },
        
        //Level 3 (Array [2])
        {
            pacman: 
                {
                    id: 5,
                    x: 9,
                    y: 12,
                    direction: ""
                },
            map: 
              [
                  [3,1,1,1,1,1,1,1,1,1,7,1,1,1,1,1,1,1,1,7,1,1,1,3],
                  [3,1,9,6,2,3,2,6,3,1,3,2,3,2,2,3,2,3,7,3,2,3,3,3],
                  [3,1,1,1,2,1,1,1,2,1,10,1,1,1,2,1,1,4,2,3,1,1,1,3],
                  [3,1,1,1,4,2,2,3,2,6,4,3,2,3,2,1,1,3,7,2,3,2,1,3],
                  [3,1,8,7,2,1,3,1,1,1,1,1,2,7,4,1,1,4,7,2,7,1,1,3],
                  [3,1,2,2,2,1,3,2,11,1,2,3,2,1,2,2,3,2,7,4,3,4,1,3],
                  [3,1,1,1,2,1,1,1,3,1,3,1,1,1,2,1,1,2,1,2,3,7,1,3],
                  [1,1,7,1,4,1,2,3,3,2,3,2,4,1,2,1,1,4,1,3,3,3,1,3],
                  [3,3,2,2,2,1,3,1,1,6,7,1,3,1,4,2,2,2,1,1,1,1,1,1],
                  [1,1,1,1,2,3,2,1,6,2,2,1,2,2,2,1,1,2,1,3,3,3,3,3],
                  [3,1,1,2,3,7,2,1,1,7,7,1,2,1,2,2,1,4,1,3,3,3,1,1],
                  [3,1,1,2,1,1,2,2,3,2,3,2,2,1,1,3,1,2,1,7,7,3,1,3],
                  [3,1,3,3,2,6,4,1,2,5,1,1,3,2,4,3,2,6,3,3,3,3,1,3],                         
                  [3,1,1,1,7,7,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3]
              ],
            redGhost:
              {
                  id: 8,
                  x: 2,
                  y: 4,
                  fieldBehindTheGhost: 3
              },
            yellowGhost:
                {
                    id: 9,
                    x:2,
                    y:1
                },
            greenGhost: 
                {
                    id: 10,
                    x: 10,
                    y: 2,
                    fieldBehindTheGhost: 3
                },
            pinkGhost: 
                {
                    id: 11,
                    x: 8,
                    y: 5,
                    fieldBehindTheGhost: 3
                },
            pacman2: 
                {
                    id: 12,
                    x: 5,
                    y: 1,
                    direction: ""
                }
        }
    ];