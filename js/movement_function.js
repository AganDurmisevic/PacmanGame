//Universal ghosts movement
function moveLeft ( movement ) {

    if ( map[ movement.y ][ movement.x-1 ] !== 1 ) {

        map[ movement.y ][ movement.x ] = 3;
        movement.x -= 1;
        map[ movement.y ][ movement.x ] = movement.id;

    }

}

function moveUp ( movement ) {

    if ( map[ movement.y-1 ][ movement.x ] !== 1 ) {

        map[ movement.y ][ movement.x ] = 3;
        movement.y -= 1;
        map[ movement.y ][ movement.x ] = movement.id;

    }

}

function moveRight ( movement ) {

    if ( map[ movement.y ][ movement.x+1 ] !== 1 ) {

        map[ movement.y ][ movement.x ] = 3;
        movement.x += 1;
        map[ movement.y ][ movement.x ] = movement.id;

    }

}

function moveDown ( movement ) {

    if ( map[ movement.y+1 ][ movement.x ] !== 1 ) {

        map[ movement.y ][ movement.x ] = 3;
        movement.y += 1;
        map[ movement.y ][ movement.x ] = movement.id;

    }

}

//Ghost movements that are careful not to eat the fruit.
function moveLeftCoin ( movement )  {

    if ( map[ movement.y ][ movement.x-1 ] !== 1 ) {

        if( fieldBehindTheGhost === 5 ) {

            fieldBehindTheGhost = 3;

        }

        else if( map[ movement.y ][ movement.x-1 ] === 2 ) {

            map[ movement.y ][ movement.x ] = fieldBehindTheGhost;
            movement.x -= 1;
            map[ movement.y ][ movement.x ] = movement.id;
            fieldBehindTheGhost = 2;

        }

        else if( map[ movement.y ][ movement.x-1 ] === 6) {

            map[ movement.y ][ movement.x ] = fieldBehindTheGhost;
            movement.x -= 1;
            map[ movement.y ][ movement.x ] = movement.id;
            fieldBehindTheGhost = 6;

        }

    }

}

function moveUpCoin ( movement ) {

    if ( map[ movement.y+1 ][ movement.x ] !== 1 ) {

        if ( fieldBehindTheGhost === 5 ) {

            fieldBehindTheGhost = 3;

        }

        else if ( map[ movement.y+1 ][ movement.x ] === 2 ) {

            map[ movement.y ][ movement.x ] = fieldBehindTheGhost;
            movement.y += 1;
            map[ movement.y ][ movement.x ] = movement.id;
            fieldBehindTheGhost = 2;

        }

        else if ( map[ movement.y+1 ][ movement.x ] === 6 ) {

            map[ movement.y ][ movement.x ] = fieldBehindTheGhost;
            movement.y += 1;
            map[ movement.y ][ movement.x ] = movement.id;
            fieldBehindTheGhost = 6;

        }

    }

}

function moveRightCoin( movement ) {

    if ( map[ movement.y ][ movement.x+1 ] !== 1 ) {

        if ( fieldBehindTheGhost === 5 ) {

            fieldBehindTheGhost = 3;

        }

        else if ( map[ movement.y ][ movement.x+1 ] === 2 ) {

            map[ movement.y ][ movement.x ] = fieldBehindTheGhost;
            movement.x += 1;
            map[ movement.y ][ movement.x ] = movement.id;
            fieldBehindTheGhost = 2;

        }

        else if( map[ redGhost.y ][ redGhost.x+1 ] === 6 || map[ yellowGhost.y ][ yellowGhost.x+1 ] === 6 ) {

            map[ movement.y ][ movement.x ] = fieldBehindTheGhost;
            movement.x += 1;
            map[ movement.y ][ movement.x ] = movement.id;
            fieldBehindTheGhost = 6;

        }

    }

}

function moveDownCoin( movement ) {

    if ( map[ movement.y-1 ][ movement.x ] !== 1 ) {

        if ( fieldBehindTheGhost === 5 ) {

            fieldBehindTheGhost = 3;

        }

        else if ( map[ movement.y-1 ][ movement.x ] === 2 ) {

            map[ movement.y ][ movement.x ] = fieldBehindTheGhost;
            movement.y -= 1;
            map[ movement.y ][ movement.x ] = movement.id;
            fieldBehindTheGhost = 2;

        }

        else if ( map[ movement.y-1 ][ movement.x ] === 6 ) {

            map[ movement.y ][ movement.x ] = fieldBehindTheGhost;
            movement.y -= 1;
            map[ movement.y ][ movement.x ] = movement.id;
            fieldBehindTheGhost = 6;

        }

    }

}