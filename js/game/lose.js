 //Function checks if the player has lost the game.
 //Every encounter with the spirit takes away a life.
function lose () {

    if( !won () && pacman.y === redGhost.y && pacman.x === redGhost.x || redGhost.y === positionBeforeMoveY && redGhost.x === positionBeforeMoveX ) {

        ghosts.play ();
        life -= 1;
        heartsDraw ();
        newPosition ();

        if( life === 0 ) {

            die.play ();
            highscore += score;
            document.getElementById( 'score' ).innerHTML = "DEAD, PRESS R TO RESTART";
            document.onkeydown = newStart;
            return true;

        }

    }

    else if ( !won () && pacman.y === yellowGhost.y && pacman.x === yellowGhost.x || yellowGhost.y === positionBeforeMoveY && yellowGhost.x === positionBeforeMoveX ) {

        ghosts.play ();
        life -= 1;
        heartsDraw ();
        newPosition ();

        if( life === 0 ) {
                die.play ();
                highscore += score;
                document.getElementById( 'score' ).innerHTML = "DEAD, PRESS R TO RESTART";
                document.onkeydown = newStart;
                return true;

            }

    }

    else if ( !won () && pacman.y === greenGhost.y && pacman.x === greenGhost.x || greenGhost.y === positionBeforeMoveY && greenGhost.x === positionBeforeMoveX ) {

        ghosts.play ();
        life -= 1;
        heartsDraw ();
        newPosition ();

        if (life === 0) {

                die.play ();
                highscore += score;
                document.getElementById( 'score' ).innerHTML = "DEAD, PRESS R TO RESTART";
                document.onkeydown = newStart;
                return true;

            }

    }

    else if ( !won () && pacman.y === pinkGhost.y && pacman.x === pinkGhost.x || pinkGhost.y === positionBeforeMoveY && pinkGhost.x === positionBeforeMoveX ) {

        ghosts.play ();
        life -= 1;
        heartsDraw ();
        newPosition ();

        if( life === 0 ) {

                localStorageHighscore ();
                die.play ();
                highscore += score;
                document.getElementById( 'score' ).innerHTML = "DEAD, PRESS R TO RESTART";
                document.onkeydown = newStart;
                return true;

            }

    }

    drawWorld ();
    return false;

}