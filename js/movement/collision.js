function collisionLeft () {

    if ( map[ pacman.y ][ pacman.x - 1 ] !== WALL ) {

        if ( map[ pacman.y ][ pacman.x - 1 ] === COIN ) {

            score = score + 10;
            eat.play();

        }

        else if ( map[ pacman.y ][ pacman.x - 1 ] === COIN_2 ) {

            score = score + 10;
            eatPill.play();

        }

        else if ( map[ pacman.y ][ pacman.x - 1 ] === COIN_1 ) {

            score = score + 40;
            eat.play();

        }

        else if ( currentLevel > 0 && map[ pacman.y ][ pacman.x ] === map[ 3 ][ 0 ] ) {

            newPositionLeft ( pacman );
            winner.play();

        }

    document.getElementById( 'score' ).innerHTML = ( "SCORE: " + score );
    moveLeft( pacman );
    lose();
    won();

    }
    drawWorld();
}

function collisionTop() {

    if ( map[ pacman.y-1 ][ pacman.x ] !== WALL ) {

        if ( map[ pacman.y - 1 ][ pacman.x ] === COIN ) {

            score = score + 10;
            eat.play();

        }

        else if ( map[ pacman.y - 1 ][ pacman.x ] === COIN_2 ) {

            score = score + 10;
            eatPill.play();

        }

        else if ( map[ pacman.y - 1 ][ pacman.x ] === COIN_1 ) {

            score = score + 40;
            eat.play();

        }

    document.getElementById( 'score' ).innerHTML = ( "SCORE: " + score );
    moveUp( pacman );
    won();
    lose();

    }

}

function collisionRight() {

    if ( map[ pacman.y ][ pacman.x + 1 ] !== WALL ) {

        if ( map[ pacman.y ][ pacman.x + 1 ] === COIN ) {

            score = score + 10;
            eat.play();

        }

        if ( map[ pacman.y ][ pacman.x + 1 ] === COIN_2 ) {

            score = score + 40;
            eatPill.play();

        }

        if ( map[ pacman.y ][ pacman.x + 1 ] === COIN_1 ) {

            score = score + 10;
            eat.play();

        }

        if ( currentLevel > 0 && map[ pacman.y ][ pacman.x ] === map[ 9 ][ 19 ] ) {

            newPositionRight (pacman);
            winner.play();

        }

    document.getElementById( 'score' ).innerHTML = ( "SCORE: " + score );
    moveRight ( pacman );
    won();
    lose();

    }


}

function collisionBottom() {

    if ( map[ pacman.y+1 ][ pacman.x ] !== WALL ) {

        if ( map[ pacman.y + 1 ][ pacman.x ] === COIN ) {

            score = score + 10;
            eat.play();

        }

        else if ( map[ pacman.y + 1 ][ pacman.x ] === COIN_2 ) {

            score = score + 40;
            eatPill.play();

        }

        else if ( map[ pacman.y+1 ][ pacman.x ] === COIN_1 ) {

            score = score + 40;
            eat.play();

        }

    document.getElementById( 'score' ).innerHTML = ( "SCORE: " + score );
    moveDown( pacman );
    won();
    lose();

    }

}