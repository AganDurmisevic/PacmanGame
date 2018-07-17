//Function checks where you are and what you enter.
function collisionLeftMulti () {


    if ( map[ pacman.y ][ pacman.x - 1 ] !== 1 && map[ pacman.y ][ pacman.x - 1 ] !== 7 ) {

        if ( map[ pacman.y ][ pacman.x - 1 ] === 2 ) {

            score = score + 10;
            eat.play ();

        }

        if ( map[ pacman.y ][ pacman.x - 1 ] === 6 ) {

            score = score + 10;
            eatPill.play ();

        }

        if ( map[ pacman.y ][ pacman.x - 1 ] === 4 ) {

            score = score + 40;
            eat.play ();

        }

        if ( currentLevel > 0 && map[ pacman.y ][ pacman.x ] === map[ 3 ][ 0 ] ) {

            newPositionLeft (pacman);
            drawWorld ();
            winner.play ();

        }

        document.getElementById ( 'score' ).innerHTML = ( "SCORE: " + score );
        moveLeft ( pacman );
        drawWorld ();
        loseMulti ();
        wonMulti ();
        drawWorld ();

    }

    drawWorld ();

}

function collisionUpMulti () {

    if ( map[ pacman.y-1 ][ pacman.x ] !== 1 && map[ pacman.y-1 ][ pacman.x ] !== 7 ) {

        if ( map[ pacman.y-1 ][ pacman.x ] === 2 ) {

            score = score + 10;
            eat.play ();

        }

        if ( map[ pacman.y-1 ][ pacman.x ] === 6 ) {

            score = score + 10;
            eatPill.play ();

        }

        if ( map[ pacman.y-1 ][ pacman.x ] === 4 ) {

            score = score + 40;
            eat.play ();

        }

        document.getElementById( 'score' ).innerHTML = ( "SCORE: " + score );
        moveUp ( pacman );
        drawWorld ();
        loseMulti ();
        wonMulti ();

    }

    drawWorld ();

}

function collisionRightMulti () {

    if ( map[ pacman.y ][ pacman.x+1 ] !== 1 && map[ pacman.y ][ pacman.x+1 ] !== 7 ) {

        if ( map[ pacman.y ][ pacman.x+1 ] === 2 ) {

            score = score + 10;
            eat.play ();

        }

        if ( map[ pacman.y ][ pacman.x+1 ] === 6 ) {

            score = score + 40;
            eatPill.play ();

        }

        if ( currentLevel > 0 && map[ pacman.y ][ pacman.x ] === map[ 9 ][ 19 ] ) {

            newPositionRight (pacman);
            winner.play ();

        }

        document.getElementById( 'score' ).innerHTML = ( "SCORE: " + score );
        moveRight ( pacman );
        drawWorld ();
        loseMulti ();
        wonMulti ();

    }

    drawWorld();

}

function collisionBottomMulti () {

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
        drawWorld ();
        loseMulti ();
        wonMulti ();

    }

    drawWorld ();

}

function collisionLeftMultiTwo () {

    if ( map[ pacman2.y ][ pacman2.x-1 ] !== 1 && map[ pacman2.y ][ pacman2.x-1 ] !== 7 ) {

        if ( map[ pacman2.y ][ pacman2.x-1 ] === 2 ) {

            score2 += 10;
            eat.play ();

        }

        if ( map[ pacman2.y ][ pacman2.x-1 ] === 6 ) {

            score2 += 10;
            eatPill.play ();

        }

        if ( map[ pacman2.y ][ pacman2.x-1 ] === 4 ) {

            score2 += 40;
            eat.play ();

        }

        if ( currentLevel > 0 && map[ pacman2.y ][ pacman2.x ] === map[ 3 ][ 0 ] ) {

            newPositionLeft ( pacman2 );
            winner.play ();

        }

        document.getElementById( 'score2' ).innerHTML = ( "SCORE: " + score2 );
        moveLeft ( pacman2 );
        drawWorld ();
        loseMulti ();
        wonMulti ();

    }

    drawWorld ();

}

function collisionUpMultiTwo () {

    if ( map[ pacman2.y-1 ][ pacman2.x ] !== 1 && map[ pacman2.y-1 ][ pacman2.x ] !== 7 ) {

        if ( map[ pacman2.y-1 ][ pacman2.x ] === 2 ) {

            score2 += 10;

        }

        if ( map[ pacman2.y-1 ][ pacman2.x ] === 6 ) {

            score2 += 10;

        }

        if ( map[ pacman2.y-1 ][ pacman2.x ] === 4 ) {

            score2 += 40;

        }

        document.getElementById( 'score2' ).innerHTML = ( "SCORE: " + score2 );
        moveUp ( pacman2 );
        drawWorld ();
        wonMulti ();
        loseMulti ();

    }

    drawWorld ();

}

function collisionRightMultiTwo () {

    if ( map[ pacman2.y ][ pacman2.x+1 ] !== 1 && map[ pacman2.y ][ pacman2.x+1 ] !== 7 ) {

        if ( map[ pacman2.y ][ pacman2.x+1 ] === 2 ) {

            score2 += 10;
            eat.play ();

        }

        if ( map[ pacman2.y ][ pacman2.x+1 ] === 6 ) {

            score2 += 40;
            eatPill.play ();

        }

        if( currentLevel > 0 && map[ pacman2.y ][ pacman2.x ] === map[ 9 ][ 19 ] ) {

            newPositionRight ( pacman2 );
            winner.play ();

        }

        document.getElementById( 'score2' ).innerHTML = ( "SCORE: " + score2 );
        moveRight ( pacman2 );
        drawWorld ();
        wonMulti ();
        loseMulti ();

    }

    drawWorld ();

}

function collisionBottomMultiTwo () {

    if ( map[ pacman2.y+1 ][ pacman2.x ] !== 1 && map[ pacman2.y+1 ][ pacman2.x ] !== 7 ) {

        if ( map[ pacman2.y+1 ][ pacman2.x ] === 2 ) {

            score2 += 10;
            eat.play ();

        }

        if ( map[ pacman2.y+1 ][ pacman2.x ] === 6 ) {

            score2 += 40;
            eatPill.play ();

        }

        document.getElementById( 'score2' ).innerHTML = ( "SCORE: " + score2 );
        moveDown ( pacman2 );
        drawWorld ();
        wonMulti ();
        loseMulti ();

    }

    drawWorld ();

}