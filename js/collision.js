function collisionLeft () {

    if ( map[ pacman.y ][ pacman.x - 1 ] !== 1 && map[ pacman.y ][ pacman.x - 1 ] !== 7 ) {

        if ( map[ pacman.y ][ pacman.x - 1 ] === 2 ) {

            score = score + 10;
            eat.play ();

        }

        else if ( map[ pacman.y ][ pacman.x - 1 ] === 6 ) {

            score = score + 10;
            eatPill.play ();

        }

        else if ( map[ pacman.y ][ pacman.x - 1 ] === 4 ) {

            score = score + 40;
            eat.play ();

        }

        else if ( currentLevel > 0 && map[ pacman.y ][ pacman.x ] === map[ 3 ][ 0 ] ) {

            newPositionLeft ();
            winner.play ();

        }

    document.getElementById( 'score' ).innerHTML = ( "SCORE: " + score );
    moveLeft ( pacman );
    lose ();
    won ();

    }
    drawWorld ();
}

function collisionTop () {

    if ( map[ pacman.y-1 ][ pacman.x ] !== 1 && map[ pacman.y-1 ][ pacman.x ] !== 7 ) {

        if ( map[ pacman.y - 1 ][ pacman.x ] === 2 ) {

            score = score + 10;
            eat.play ();

        }

        else if ( map[ pacman.y - 1 ][ pacman.x ] === 6 ) {

            score = score + 10;
            eatPill.play ();

        }

        else if ( map[ pacman.y - 1 ][ pacman.x ] === 4 ) {

            score = score + 40;
            eat.play ();

        }

    document.getElementById( 'score' ).innerHTML = ( "SCORE: " + score );
    moveUp ( pacman );
    won ();
    lose ();

    }

}

function collisionRight () {

    if ( map[ pacman.y ][ pacman.x + 1 ] !== 1 && map[ pacman.y ][ pacman.x + 1 ] !== 7 ) {

        if ( map[ pacman.y ][ pacman.x + 1 ] === 2 ) {

            score = score + 10;
            eat.play ();

        }

        if ( map[ pacman.y ][ pacman.x + 1 ] === 6 ) {

            score = score + 40;
            eatPill.play ();

        }

        if ( currentLevel > 0 && map[ pacman.y ][ pacman.x ] === map[ 9 ][ 19 ] ) {

            newPositionRight ();
            winner.play ();

        }

    document.getElementById( 'score' ).innerHTML = ( "SCORE: " + score );
    moveRight ( pacman );
    won ();
    lose ();

    }


}

function collisionBottom () {

    if ( map[ pacman.y+1 ][ pacman.x ] !== 1 && map[ pacman.y+1 ][ pacman.x ] !== 7 ) {

        if ( map[ pacman.y + 1 ][ pacman.x ] === 2 ) {

            score = score + 10;
            eat.play ();

        }

        else if ( map[ pacman.y + 1 ][ pacman.x ] === 6 ) {

            score = score + 40;
            eatPill.play ();

        }

        else if ( map[ pacman.y+1 ][ pacman.x ] === 4 ) {

            score = score + 40;
            eat.play ();

        }

    document.getElementById( 'score' ).innerHTML = ( "SCORE: " + score );
    moveDown ( pacman );
    won ();
    lose ();

    }

}