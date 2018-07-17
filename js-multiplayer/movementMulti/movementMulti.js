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
//Waiting on keyboard listener to control Pacman, Pacman2 and Ghosts.
var standard = function( e ) {

        //Ghosts Movement
        moveGhost( e );

        //Pacman movement
        //If <- is pushed, then the Pacman will turn to the left, but only if there are no obstacles, if he meets 'fruits', will he come.
        if ( e.keyCode === LEFT ) {

            // Turn the Pacman 180deg because he starts to look to the right.
            pacman.direction = 'turn-180';
            positionBeforeMoveX = pacman.x;
            positionBeforeMoveY = pacman.y;
            collisionLeftMulti ();
            drawWorld ();

        }

        //   ^
        //If | is pressed then the Pacman runs to the top, but only if there are no obstacles in front of him, otherwise he gets points on 'fruits'.
        else if ( e.keyCode === UP ) {

            //Turning Pacman 270deg because he starts to look to the right and 90deg turns him down.
            pacman.direction = 'turn-270';
            positionBeforeMoveX = pacman.x;
            positionBeforeMoveY = pacman.y;
            collisionUpMulti ();
            drawWorld ();

        }

        //If -> is pressed then the Pacman runs to the right, but only if there are no obstacles in front of him, otherwise he gets points on 'fruits'.
        else if ( e.keyCode === RIGHT ) {

            //direction is empty because looking to the right is default (unchanged state).
            pacman.direction = '';
            positionBeforeMoveX = pacman.x;
            positionBeforeMoveY = pacman.y;
            collisionRightMulti ();
            drawWorld ();

        }

        //   |
        //If v is pressed then the Pacman runs down, but only if there are no obstacles in front of him, otherwise he gets points when he hits fruits.
        else if ( e.keyCode === DOWN ) {

            //Turn the Pacman 90deg (down) because it starts to look right.
            pacman.direction = 'turn-90';
            positionBeforeMoveX = pacman.x;
            positionBeforeMoveY = pacman.y;
            collisionBottomMulti ();
            drawWorld ();

        }


        //Pacman 2 movement
        else if ( e.keyCode === LEFT_A ) {

            //Turns the Pacman 180deg because he starts to look to the right.
            pacman2.direction = 'turn-180';
            positionBeforeMoveXTwo = pacman2.x;
            positionBeforeMoveYTwo = pacman2.y;
            collisionLeftMultiTwo ();
            drawWorld ();

        }

        //   ^
        //If | is pressed then the Pacman runs to the top, but only if there are no obstacles in front of him, otherwise he gets points on 'fruits'.
        else if ( e.keyCode === UP_W ) {

            //Turning Pacman 270deg because he starts to look to the right and 90deg turns him down.
            pacman2.direction = 'turn-270';
            positionBeforeMoveXTwo = pacman2.x;
            positionBeforeMoveYTwo = pacman2.y;
            collisionUpMultiTwo();
            drawWorld();

        }

        //If -> is pressed then the Pacman runs to the right, but only if there are no obstacles in front of him, otherwise he gets points on 'fruits'.
        else if ( e.keyCode === RIGHT_D ) {

            //Direction is empty because looking to the right is default (unchanged state).
            pacman2.direction = '';
            positionBeforeMoveXTwo = pacman2.x;
            positionBeforeMoveYTwo = pacman2.y;
            collisionRightMultiTwo ();
            drawWorld ();

        }

        //   |
        //If v is pressed then the Pacman2 will run down, but only if there are no obstacles in front of him, otherwise he will score points if he hits 'fruits'.
        else if ( e.keyCode === DOWN_S ) {

            //Turns the Pacman2 90deg (down) because he starts to look right.
            pacman2.direction = 'turn-90';
            positionBeforeMoveXTwo = pacman2.x;
            positionBeforeMoveYTwo = pacman2.y;
            collisionBottomMultiTwo ();
            drawWorld ();

        }

        //If Enter ('13 ') is pressed then the game switches to pause mode and ignores the EventListener in standard mode (so that you can not control during the break) and writes that you have paused.
        else if ( e.keyCode === ENTER ) {

            document.getElementById( 'score' ).innerHTML = ( "PAUSED" );
            document.getElementById('score2').innerHTML = ( "PAUSED" );
            //document.getElementById("container").classList.add('pacman-paused');

        }

        //When R ('82 ') is pressed and function lose() returns true the level game will be reaped.
        else if( e.keyCode === R && loseMulti () ) {

            document.onkeydown = newStart;

        }

        // Press twice to - automatically starts new (without a condition).
        if ( e.keyCode === DASH ) {

            document.onkeydown = newStart;

        }

        //When R ('82 ') is pressed and function lose() returns true the game will be reaped.
        if ( wonMulti () ) {

            document.onkeydown = wonMode;
            winner.play ();
            drawWorld ();

        }

    drawWorld ();

}

//paused mode
//Wait Enter Enter to change the mode or enter standard mode - (responds only to the Enter key).
var paused = function ( e ) {

    if ( e.keyCode === ENTER ) {

        document.onkeydown = standard;
        document.getElementById( 'score' ).innerHTML = ( "SCORE: " + score );
        document.getElementById( 'score2' ).innerHTML = ( "SCORE: " + score2 );

    }

    drawWorld();

}


//lose mode
//Wait for R to change the mode or to go into standard mode and start from the beginning - (responds only to R).
var newStart = function ( start ) {

    if ( start.keyCode === R || start.keyCode === DASH ) {

        document.onkeydown = standard;
        javascript:location.reload ();
        winner.play ();

    }

    drawWorld ();

}

//won mode
//Waiting for space to come in the standard mode and to load next level - (responds to the space bar).
var wonMode = function ( winn ) {

    if ( winn.keyCode === SPACE ) {

            document.onkeydown = standard;
            document.getElementById( 'score' ).innerHTML = ( "SCORE: " + score );
            document.getElementById( 'score2' ).innerHTML = ( "SCORE: " + score2 );
            document.getElementById( 'nextLvl' ).innerHTML = "";
            life = 3;
            life2 = 3;
            currentLevel++;

            if( currentLevel >= level.length ) {

                document.getElementById( 'nextLvl' ).innerHTML = ( "MAX LVL REACHED" );
                return;

            }

            map = level[ currentLevel ].map;
            pacman = level[ currentLevel ].pacman;
            pacman2 = level[ currentLevel ].pacman2;
            redGhost = level[ currentLevel ].redGhost;
            yellowGhost = level[ currentLevel ].yellowGhost;
            greenGhost = level[ currentLevel ].greenGhost;
            pinkGhost = level[ currentLevel ].pinkGhost;
            highscore = highscore + score;
            highscore2 = highscore2 + score2;

    }

    //Hidden possibility in the winning mode also manuel to change the level.
    //With 1 the first Lvl, with 2 the second etc ...
    else if ( winn.keyCode === ONE ) {

        document.getElementById( 'nextLvl' ).innerHTML = "";
        document.onkeydown = standard;
        currentLevel = 0;
        life = 3;
        life2 = 3;
        map = level[ currentLevel ].map;
        pacman = level[ currentLevel ].pacman;
        pacman2 = level[ currentLevel ].pacman2;
        redGhost = level[ currentLevel ].redGhost;
        yellowGhost = level[ currentLevel ].yellowGhost;
        greenGhost = level[ currentLevel ].greenGhost;
        pinkGhost = level[ currentLevel ].pinkGhost;
        score = 0;
        score2 = 0;
    }

    else if ( winn.keyCode === TWO ) {

        document.getElementById( 'nextLvl' ).innerHTML = "";
        document.onkeydown = standard;
        currentLevel = 1;
        life = 3;
        life2 = 3;
        map = level[ currentLevel ].map;
        pacman = level[ currentLevel ].pacman;
        pacman2 = level[ currentLevel ].pacman2;
        redGhost = level[ currentLevel ].redGhost;
        yellowGhost = level[ currentLevel ].yellowGhost;
        greenGhost = level[ currentLevel ].greenGhost;
        pinkGhost = level[ currentLevel ].pinkGhost;
        score = 0;
        score2 = 0;

    }

    else if ( winn.keyCode === THREE ) {

        document.getElementById( 'nextLvl' ).innerHTML = "";
        document.onkeydown = standard;
        currentLevel = 2;
        life = 3;
        life2 = 3;
        map = level[ currentLevel ].map;
        pacman = level[ currentLevel ].pacman;
        pacman2 = level[ currentLevel ].pacman2;
        redGhost = level[ currentLevel ].redGhost;
        yellowGhost = level[ currentLevel ].yellowGhost;
        greenGhost = level[ currentLevel ].greenGhost;
        pinkGhost = level[ currentLevel ].pinkGhost;
        score = 0;
        score2 = 0;

    }

    drawWorld ();

}

document.onkeydown = standard;
