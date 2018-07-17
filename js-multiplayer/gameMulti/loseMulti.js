//Function checks if one of the players has the game loose and. whether one has encountered the Ghost (if yes, 1 life is deducted).

function loseMulti () {

    if ( !wonMulti () && pacman.y === redGhost.y && pacman.x === redGhost.x || redGhost.y === positionBeforeMoveY && redGhost.x === positionBeforeMoveX ) {

        newPosition ();
        life -= 1;
        die.play ();
        heartsDrawMulti ();
        drawWorld ();

        if ( life === 0 ) {

            highscore += score;
            die.play ();
            document.getElementById( 'score' ).innerHTML = "DEAD, PRESS R TO RESTART";
            document.onkeydown = newStart;
            return true;

        }

    }

    else if ( !wonMulti () && pacman2.y === redGhost.y && pacman2.x === redGhost.x || redGhost.y === positionBeforeMoveYTwo && redGhost.x === positionBeforeMoveXTwo ) {

        newPosition2 ();
        life2 -= 1;
        die.play ();
        heartsDrawMulti ();
        drawWorld ();

        if ( life2 === 0 ) {

            highscore2 += score2;
            document.getElementById( 'score2' ).innerHTML = "DEAD, PRESS R TO RESTART";
            document.onkeydown = newStart;
            return true;

        }

    }

    else if ( !wonMulti () && pacman.y === yellowGhost.y && pacman.x === yellowGhost.x || yellowGhost.y === positionBeforeMoveY && yellowGhost.x === positionBeforeMoveX ) {

        newPosition ();
        life -= 1;
        die.play ();
        heartsDrawMulti ();
        drawWorld ();

        if ( life === 0 ) {

            highscore += score;
            saveInLocalStorage ();
            document.getElementById( 'score' ).innerHTML = "DEAD, PRESS R TO RESTART";
            document.onkeydown = newStart;
            return true;

        }

    }

    else if ( !wonMulti () && pacman2.y === yellowGhost.y && pacman2.x === yellowGhost.x || yellowGhost.y === positionBeforeMoveYTwo && yellowGhost.x === positionBeforeMoveXTwo ) {

        newPosition2 ();
        life2 -= 1;
        die.play ();
        heartsDrawMulti ();
        drawWorld ();

        if ( life2 === 0 ) {

            highscore2 += score2;
            document.getElementById( 'score2' ).innerHTML = "DEAD, PRESS R TO RESTART";
            document.onkeydown = newStart;
            return true;

        }

    }

    else if ( !wonMulti () && pacman.y === greenGhost.y && pacman.x === greenGhost.x || greenGhost.y === positionBeforeMoveY && greenGhost.x === positionBeforeMoveX ) {

        newPosition ();
        life -= 1;
        die.play ();
        heartsDrawMulti ();
        drawWorld ();

        if ( life === 0 ) {

            highscore += score;
            document.getElementById( 'score' ).innerHTML = "DEAD, PRESS R TO RESTART";
            document.onkeydown = newStart;
            return true;

        }

    }

    else if ( !wonMulti () && pacman2.y === greenGhost.y && pacman2.x === greenGhost.x || greenGhost.y === positionBeforeMoveYTwo && greenGhost.x === positionBeforeMoveXTwo ) {

        newPosition2 ();
        life2 -= 1;
        die.play ();
        heartsDrawMulti ();
        drawWorld ();

        if ( life2 === 0 ) {

            highscore2 += score2;
            document.getElementById( 'score2' ).innerHTML = "DEAD, PRESS R TO RESTART";
            document.onkeydown = newStart;
            return true;

        }

    }

    else if ( !wonMulti () && pacman.y === pinkGhost.y && pacman.x === pinkGhost.x || pinkGhost.y === positionBeforeMoveY && pinkGhost.x === positionBeforeMoveX ) {

        newPosition ();
        life -= 1;
        die.play ();
        heartsDrawMulti ();
        drawWorld ();

        if ( life === 0 ) {

            highscore += score;
            document.getElementById( 'score' ).innerHTML = "DEAD, PRESS R TO RESTART";
            document.onkeydown = newStart;
            return true;

        }

    }

    else if ( !wonMulti () && pacman2.y === pinkGhost.y && pacman2.x === pinkGhost.x || pinkGhost.y === positionBeforeMoveYTwo && pinkGhost.x === positionBeforeMoveXTwo ) {

        newPosition2 ();
        life2 -= 1;
        die.play ();
        heartsDrawMulti ();
        drawWorld ();

        if ( life2 === 0 ) {

            highscore2 += score2;
            document.getElementById( 'score2' ).innerHTML = "DEAD, PRESS R TO RESTART";
            document.onkeydown = newStart;
            return true;

        }

    }

    else if ( !wonMulti () && pacman2.y === pacman.y && pacman2.x === pacman.x ) {

       newPosition2 ();
       newPosition ();
       life2 -= 1;
       life -= 1;
       die.play ();
       heartsDrawMulti ();
       drawWorld ();

       if ( life === 0 ) {

           highscore += score;
           highscore2 += score2;
           document.getElementById( 'score' ).innerHTML = "DEAD, PRESS R TO RESTART";
           document.onkeydown = newStart;
           return true;

       }

       else if ( life2 === 0 ) {

            highscore2 += score2;
            highscore += score;
            document.getElementById( 'score2' ).innerHTML = "DEAD, PRESS R TO RESTART";
            document.onkeydown = newStart;
            return true;

        }

    }

    drawWorld();
    return false;

}