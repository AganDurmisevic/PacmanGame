var fieldBehindTheGhost = "";

//Universal ghosts movement
function moveLeft ( movement ) {

    fieldBehindTheGhost = GROUND;
    positionBeforeMoveX = pacman.x;
    positionBeforeMoveY = pacman.y;

    if ( map[ movement.y ][ movement.x-1 ] !== WALL ) {

        map[ movement.y ][ movement.x ] = fieldBehindTheGhost;
        movement.x -= 1;

        if ( map[ movement.y ][ movement.x ] === COIN ) {

            fieldBehindTheGhost = COIN;

        }

        else if ( map[ movement.y ][ movement.x ] === COIN_2 ) {

            fieldBehindTheGhost = COIN_2;

        }

        else if ( map[ movement.y ][ movement.x ] === COIN_1 ) {

            fieldBehindTheGhost = COIN_1;

        }

        map[ movement.y ][ movement.x ] = movement.id;

    }
}

function moveUp ( movement ) {

    fieldBehindTheGhost = GROUND;
    positionBeforeMove = map[ pacman.y ][ pacman.x ];

    if ( map[ movement.y-1 ][ movement.x ] !== WALL ) {

        map[ movement.y ][ movement.x ] = fieldBehindTheGhost;
        movement.y -= 1;

        if ( map[ movement.y ][ movement.x ] === COIN ) {

            fieldBehindTheGhost = COIN;

        }

        else if ( map[ movement.y ][ movement.x ] === COIN_2 ) {

            fieldBehindTheGhost = COIN_2;

        }

        else if ( map[ movement.y ][ movement.x ] === COIN_1 ) {

            fieldBehindTheGhost = COIN_1;

        }

        map[ movement.y ][ movement.x ] = movement.id;

    }

}

function moveRight ( movement ) {

    fieldBehindTheGhost = GROUND;
    positionBeforeMove = map[ pacman.y ][ pacman.x ];

    if ( map[ movement.y ][ movement.x+1 ] !== WALL ) {

        map[ movement.y ][ movement.x ] = fieldBehindTheGhost;
        movement.x += 1;

        if ( map[ movement.y ][ movement.x ] === COIN ) {

            fieldBehindTheGhost = COIN;

        }

        else if ( map[ movement.y ][ movement.x ] === COIN_2 ) {

            fieldBehindTheGhost = COIN_2;

        }

        else if ( map[ movement.y ][ movement.x ] === COIN_1 ) {

            fieldBehindTheGhost = COIN_1;

        }

        map[ movement.y ][ movement.x ] = movement.id;

    }

}

function moveDown ( movement ) {

    fieldBehindTheGhost = GROUND;
    positionBeforeMove = map[ pacman.y ][ pacman.x ];

    if ( map[ movement.y+1 ][ movement.x ] !== WALL ) {

        map[ movement.y ][ movement.x ] = fieldBehindTheGhost;
        movement.y += 1;

        if ( map[ movement.y ][ movement.x ] === COIN ) {

            fieldBehindTheGhost = COIN;

        }

        else if ( map[ movement.y ][ movement.x ] === COIN_2 ) {

            fieldBehindTheGhost = COIN_2;

        }

        else if ( map[ movement.y ][ movement.x ] === COIN_1 ) {

            fieldBehindTheGhost = COIN_1;

        }

        map[ movement.y ][ movement.x ] = movement.id;

    }

}

//Ghost movements that are careful not to eat the fruit.
function moveLeftCoin ( movementCoin )  {

    if ( map[ movementCoin.y ][ movementCoin.x-1 ] !== WALL ) {

        if( map[ movementCoin.y ][ movementCoin.x-1 ] === COIN ) {

            map[ movementCoin.y ][ movementCoin.x ] = movementCoin.fieldBehindTheGhost;
            movementCoin.x -= 1;
            map[ movementCoin.y ][ movementCoin.x ] = movementCoin.id;
            movementCoin.fieldBehindTheGhost = COIN;

        }

        else if( map[ movementCoin.y ][ movementCoin.x-1 ] === COIN_2) {

            map[ movementCoin.y ][ movementCoin.x ] = movementCoin.fieldBehindTheGhost;
            movementCoin.x -= 1;
            map[ movementCoin.y ][ movementCoin.x ] = movementCoin.id;
            movementCoin.fieldBehindTheGhost = COIN_2;

        }

        else if( map[ movementCoin.y ][ movementCoin.x-1 ] === COIN_1) {

            map[ movementCoin.y ][ movementCoin.x ] = movementCoin.fieldBehindTheGhost;
            movementCoin.x -= 1;
            map[ movementCoin.y ][ movementCoin.x ] = movementCoin.id;
            movementCoin.fieldBehindTheGhost = COIN_1;

        }

    }

}

function moveUpCoin ( movementCoin ) {

    if ( map[ movementCoin.y+1 ][ movementCoin.x ] !== WALL ) {

        if ( map[ movementCoin.y+1 ][ movementCoin.x ] === COIN ) {

            map[ movementCoin.y ][ movementCoin.x ] = movementCoin.fieldBehindTheGhost;
            movementCoin.y += 1;
            map[ movementCoin.y ][ movementCoin.x ] = movementCoin.id;
            movementCoin.fieldBehindTheGhost = COIN;

        }

        else if ( map[ movementCoin.y+1 ][ movementCoin.x ] === COIN_2 ) {

            map[ movementCoin.y ][ movementCoin.x ] = movementCoin.fieldBehindTheGhost;
            movement.y += 1;
            map[ movementCoin.y ][ movementCoin.x ] = movementCoin.id;
            movementCoin.fieldBehindTheGhost = COIN_2;

        }

        else if ( map[ movementCoin.y+1 ][ movementCoin.x ] === COIN_1 ) {

            map[ movementCoin.y ][ movementCoin.x ] = movementCoin.fieldBehindTheGhost;
            movement.y += 1;
            map[ movementCoin.y ][ movementCoin.x ] = movementCoin.id;
            movementCoin.fieldBehindTheGhost = COIN_1;

        }

    }

}

function moveRightCoin( movementCoin ) {

    if ( map[ movementCoin.y ][ movementCoin.x+1 ] !== WALL ) {

        if ( map[ movementCoin.y ][ movementCoin.x+1 ] === COIN ) {

            map[ movementCoin.y ][ movementCoin.x ] = movementCoin.fieldBehindTheGhost;
            movementCoin.x += 1;
            map[ movementCoin.y ][ movementCoin.x ] = movementCoin.id;
            movementCoin.fieldBehindTheGhost = COIN;

        }

        else if( map[ redGhost.y ][ redGhost.x+1 ] === COIN_2 || map[ yellowGhost.y ][ yellowGhost.x+1 ] === COIN_2 ) {

            map[ movementCoin.y ][ movementCoin.x ] = movementCoin.fieldBehindTheGhost;
            movementCoin.x += 1;
            map[ movementCoin.y ][ movementCoin.x ] = movementCoin.id;
            movementCoin.fieldBehindTheGhost = COIN_2;

        }

        else if( map[ redGhost.y ][ redGhost.x+1 ] === COIN_1 || map[ yellowGhost.y ][ yellowGhost.x+1 ] === COIN_1 ) {

            map[ movementCoin.y ][ movementCoin.x ] = movementCoin.fieldBehindTheGhost;
            movementCoin.x += 1;
            map[ movementCoin.y ][ movementCoin.x ] = movementCoin.id;
            movementCoin.fieldBehindTheGhost = COIN_1;

        }

    }

}

function moveDownCoin( movementCoin ) {

    if ( map[ movementCoin.y-1 ][ movementCoin.x ] !== WALL ) {

        if ( map[ movementCoin.y-1 ][ movementCoin.x ] === COIN ) {

            map[ movementCoin.y ][ movementCoin.x ] = movementCoin.fieldBehindTheGhost;
            movementCoin.y -= 1;
            map[ movementCoin.y ][ movementCoin.x ] = movementCoin.id;
            movementCoin.fieldBehindTheGhost = COIN;

        }

        else if ( map[ movementCoin.y-1 ][ movementCoin.x ] === COIN_2 ) {

            map[ movementCoin.y ][ movementCoin.x ] = movementCoin.fieldBehindTheGhost;
            movementCoin.y -= 1;
            map[ movementCoin.y ][ movementCoin.x ] = movementCoin.id;
            movementCoin.fieldBehindTheGhost = COIN_2;

        }

        else if ( map[ movementCoin.y-1 ][ movementCoin.x ] === COIN_1 ) {

            map[ movementCoin.y ][ movementCoin.x ] = movementCoin.fieldBehindTheGhost;
            movementCoin.y -= 1;
            map[ movementCoin.y ][ movementCoin.x ] = movementCoin.id;
            movementCoin.fieldBehindTheGhost = COIN_1;

        }

    }

}
