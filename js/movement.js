    // Map:
    // 1 = <div class='wall'></div>            Wall
    // 2 = <div class='coin'></div>            Food
    // 3 = <div class='ground'></div>          Ground
    // 4 = <div class='coin1'></div>           Food
    // 5 = <div class='pacman'></div>          Pacman(Yellow)
    // 6 = <div class='coin2'></div>           Food
    // 7 = <div class='wallL'></div>           Wall
    // 8 = <div class='redGhost'></div>        Red Ghost
    // 9 = <div class='yellowGhost'></div>     Yellow Ghost

    //Standard mode / Game mode
    //Waiting on keyboard input to control Pacman.
    var standard = function ( e ) {

            moveGhost(e);


            //If <- is pressed then the Pacman runs to the left, but only if there are no obstacles in front of him, otherwise he gets points when he meets 'fruits'.
			if ( e.keyCode === 37 ) {

                // turns the Pacman 180deg because he starts to look to the right.
                pacman.direction = 'turn-180';

                if ( map[ pacman.y ][ pacman.x-1 ] !== 1 && map[ pacman.y ][ pacman.x-1 ] !== 7 ) {

                    if ( map[ pacman.y ][ pacman.x-1 ] === 2) {

                        score = score + 10;
                        eat.play ();

                    }

                    if ( map[ pacman.y ][ pacman.x-1 ] === 6 ) {

                        score = score + 10;
                        eatPill.play ();

                    }

                    if ( map[ pacman.y ][ pacman.x-1 ] === 4 ) {

                        score = score + 40;
                        eat.play ();

                    }

                    if ( currentLevel > 0 && map[ pacman.y ][ pacman.x ] === map[ 3 ][ 0 ]) {

                        newPositionLeft ();
                        winner.play ();

                    }
                    
                    document.getElementById( 'score' ).innerHTML = ( "SCORE: " + score );
                    moveLeft ( pacman );
                    lose ();
                    won ();

                }

                drawWorld();

            }

            //   ^
            //If | is pressed then the Pacman runs to the top, but only if there are no obstacles in front of him, otherwise he gets points on 'fruits'.
			else if ( e.keyCode === 38 ) {

            // Turning Pacman 270deg because he starts to look to the right and 90deg turns him down.
            pacman.direction = 'turn-270';

            if ( map[ pacman.y-1 ][ pacman.x ] !== 1 && map[ pacman.y-1 ][ pacman.x ] !== 7) {

                if ( map[ pacman.y-1 ][ pacman.x ] === 2 ) {

                    score = score + 10;
                    eat.play ();

                }

                if ( map[ pacman.y-1 ][ pacman.x ] === 6 ) {

                    score = score + 10;
                    eatPill.play();

                }

                if ( map[ pacman.y-1 ][ pacman.x ] === 4 ) {

                    score = score + 40;
                    eat.play ();

                }

                document.getElementById( 'score' ).innerHTML = ( "SCORE: " + score );
                moveUp ( pacman );
                won ();
                lose ();

                }

                drawWorld ();

            }

            //If -> is pressed then the Pacman runs to the right, but only if there are no obstacles in front of him, otherwise he gets points on 'fruits'.
			else if ( e.keyCode === 39 ) {

            //direction is empty because looking to the right is default (unchanged state).
            pacman.direction = '';
            if( map[ pacman.y ][ pacman.x+1 ] !== 1 && map[ pacman.y ][ pacman.x+1 ] !== 7 ) {

                if( map[ pacman.y ][ pacman.x+1 ] === 2 ) {

                    score = score + 10;
                    eat.play ();

                }

                if( map[ pacman.y ][ pacman.x+1 ] === 6 ) {

                    score = score + 40;
                    eatPill.play ();

                }

                if( currentLevel > 0 && map[ pacman.y ][ pacman.x ] === map[ 9 ][ 19 ] ) {

                    newPositionRight ();
                    winner.play ();

                }

                document.getElementById( 'score' ).innerHTML = ( "SCORE: " + score );
                moveRight ( pacman );
                won ();
                lose ();

            }

            drawWorld ();

            }

            //   |
            //If v is pressed then the Pacman runs down, but only if there are no obstacles in front of him, otherwise he gets points when he hits fruits.
			else if ( e.keyCode === 40 ) {

            //Turn the Pacman 90deg (down) because it starts to look right.
            pacman.direction = 'turn-90';

                if ( map[ pacman.y+1 ][ pacman.x ] !== 1 && map[ pacman.y+1 ][ pacman.x ] !== 7 ) {

                    if ( map[ pacman.y+1 ][ pacman.x ] === 2 ) {

                        score = score + 10;
                        eat.play ();

                    }

                    if ( map[ pacman.y+1 ][ pacman.x ] === 6 ) {

                        score = score + 40;
                        eatPill.play ();

                    }

                document.getElementById( 'score' ).innerHTML = ( "SCORE: " + score );
                moveDown ( pacman );
                won ();
                lose ();

                }

                drawWorld ();

            }

            //If Enter ('13 ') is pressed then the game switches to pause mode and ignores the EventListener in standard mode (so that you can not control during the break) and writes that you have paused.
            else if ( e.keyCode === 13 ) {

                document.onkeydown = pause;
                document.getElementById( 'score' ).innerHTML = ( "PAUSED" );

            }

            //     When R ('82 ') is pressed and function lose() return true the level game will be reaped.
            else if ( e.keyCode === 82 && lose () ) {

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

        if ( e.keyCode === 13 ) {

            document.onkeydown = standard;
            document.getElementById( 'score' ).innerHTML = ( "SCORE: " + score );
            paused.play();

        }

        drawWorld();

    }

    //lose mode
    //Wait for R to change the mode or to go into standard mode and start from the beginning - (responds only to R).
    var newStart = function ( start ) {

        if( start.keyCode === 82 ) {

            document.onkeydown = standard;
            javascript:location.reload ();
            die.play ();

        }

        drawWorld();

    }
    
    //won mode
    //Waiting for space key to change the mode or come in the standard mode to load next level - (responds to the space bar).
    var wonMode = function ( winn ) {

        if ( winn.keyCode === 32 ) {

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
        else if ( winn.keyCode === 49 ) {

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

        else if ( winn.keyCode === 50 ) {

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

        else if ( winn.keyCode === 51 ) {
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
