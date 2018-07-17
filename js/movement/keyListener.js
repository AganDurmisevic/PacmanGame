const ENTER = 13;
const SPACE = 32;
const LEFT = 37;
const UP = 38;
const RIGHT = 39;
const DOWN = 40;
const ONE = 49;
const TWO = 50;
const THREE = 51;
const LEFT_A = 65;
const RIGHT_D = 68;
const R = 82;
const DOWN_S = 83;
const UP_W = 87;
const DASH = 189;

//Standard mode / Game mode
//Waiting on keyboard input to control Pacman.
var standard = function ( e ) {

        moveGhost(e);


        //If <- is pressed then the Pacman runs to the left, but only if there are no obstacles in front of him, otherwise he gets points when he meets 'fruits'.
        if ( e.keyCode === LEFT ) {

            // turns the Pacman 180deg because he starts to look to the right.
            pacman.direction = 'turn-180';
            collisionLeft ();
            drawWorld();

        }

        //   ^
        //If | is pressed then the Pacman runs to the top, but only if there are no obstacles in front of him, otherwise he gets points on 'fruits'.
        else if ( e.keyCode === UP ) {

            // Turning Pacman 270deg because he starts to look to the right and 90deg turns him down.
            pacman.direction = 'turn-270';
            collisionTop ();
            drawWorld ();

        }

        //If -> is pressed then the Pacman runs to the right, but only if there are no obstacles in front of him, otherwise he gets points on 'fruits'.
        else if ( e.keyCode === RIGHT ) {

            //direction is empty because looking to the right is default (unchanged state).
            pacman.direction = '';
            collisionRight ();
            drawWorld ();

        }

        //   |
        //If v is pressed then the Pacman runs down, but only if there are no obstacles in front of him, otherwise he gets points when he hits fruits.
        else if ( e.keyCode === DOWN ) {

            //Turn the Pacman 90deg (down) because it starts to look right.
            pacman.direction = 'turn-90';
            collisionBottom ();
            drawWorld ();

        }

        //If Enter ('13 ') is pressed then the game switches to pause mode and ignores the EventListener in standard mode (so that you can not control during the break) and writes that you have paused.
        else if ( e.keyCode === ENTER ) {

            document.onkeydown = pause;
            document.getElementById( 'score' ).innerHTML = ( "PAUSED" );

        }

        //     When R ('82 ') is pressed and function lose() return true the level game will be reaped.
        if ( e.keyCode === R && lose () ) {

            document.onkeydown = newStart;
            sound.play ();

        }

        //When Space ('32') is pressed and function won() returns true
        //the level is increased resp. Map, Pacman etc. also loaded new if the new level
        //exists, otherwise comes the Message that you have reached the maximum level.
        if ( won () ) {

            winner.play ();
            document.onkeydown = wonMode;
            drawWorld ();

        }

    drawWorld();

}

//paused mode
//Wait of Enter(13) key to change the mode or enter standard mode - (responds only to the Enter key).
var pause = function ( e ) {

    if ( e.keyCode === ENTER ) {

        document.onkeydown = standard;
        document.getElementById( 'score' ).innerHTML = ( "SCORE: " + score );
        paused.play();

    }

    drawWorld();

}

//lose mode
//Wait for R to change the mode or to go into standard mode and start from the beginning - (responds only to R).
var newStart = function ( start ) {

    if( start.keyCode === R ) {

        document.onkeydown = standard;
        javascript:location.reload ();
        die.play ();

    }

    drawWorld();

}

//won mode
//Waiting for space key to change the mode or come in the standard mode to load next level - (responds to the space bar).
var wonMode = function ( winn ) {

    if ( winn.keyCode === SPACE ) {

            document.onkeydown = standard;
            document.getElementById( 'score' ).innerHTML = ( "SCORE: " + score );
            document.getElementById( 'nextLvl' ).innerHTML = "";
            life = 3;
            currentLevel++;

            if ( currentLevel >= level.length ) {

                document.getElementById( 'nextLvl' ).innerHTML = ( "MAX LVL REACHED" );
                return;

            }

            map = level[ currentLevel ].map;
            pacman = level[ currentLevel ].pacman;
            redGhost = level[ currentLevel ].redGhost;
            yellowGhost = level[ currentLevel ].yellowGhost;
            pinkGhost = level[ currentLevel ].pinkGhost;
            greenGhost = level[ currentLevel ].greenGhost;
            highscore = highscore + score;

    }

    //Hidden possibility in the won mode to change the level.
    //With 1 the first Lvl, with 2 the second etc ...
    else if ( winn.keyCode === ONE ) {

        document.getElementById( 'nextLvl' ).innerHTML = "";
        document.onkeydown = standard;
        currentLevel = 0;
        life = 3;
        map = level[ currentLevel ].map;
        pacman = level[ currentLevel ].pacman;
        redGhost = level[ currentLevel ].redGhost;
        yellowGhost = level[ currentLevel ].yellowGhost;
        score = 0;

    }

    else if ( winn.keyCode === TWO ) {

        document.getElementById('nextLvl').innerHTML = "";
        document.onkeydown = standard;
        currentLevel = 1;
        life = 3;
        map = level[ currentLevel ].map;
        pacman = level[ currentLevel ].pacman;
        redGhost = level[ currentLevel ].redGhost;
        yellowGhost = level[ currentLevel ].yellowGhost;
        score = 0;

    }

    else if ( winn.keyCode === THREE ) {
        document.getElementById( 'nextLvl' ).innerHTML = "";
        document.onkeydown = standard;
        currentLevel = 2;
        life = 3;
        map = level[ currentLevel ].map;
        pacman = level[ currentLevel ].pacman;
        redGhost = level[ currentLevel ].redGhost;
        yellowGhost = level[ currentLevel ].yellowGhost;
        score = 0;
    }

    drawWorld ();

}

document.onkeydown = standard;
