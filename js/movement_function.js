var fieldBehindTheGhost = "";

//Universal ghosts movement
function moveLeft ( movement ) {

<<<<<<< HEAD
    fieldBehindTheGhost = 3;
    positionBeforeMoveX = pacman.x;
    positionBeforeMoveY = pacman.y;

    if ( map[ movement.y ][ movement.x-1 ] !== 1 ) {

        map[ movement.y ][ movement.x ] = fieldBehindTheGhost;
        movement.x -= 1;

        if ( map[ movement.y ][ movement.x ] === 2 ) {

            fieldBehindTheGhost = 2;

        }

        else if ( map[ movement.y ][ movement.x ] === 6 ) {

            fieldBehindTheGhost = 6;

        }

        map[ movement.y ][ movement.x ] = movement.id;

    }
=======
    thisdoesnotwork;
>>>>>>> f2c6b4a9374e06d565318437c8b7b987bfcf0da8

}

function moveUp ( movement ) {

    fieldBehindTheGhost = 3;
    positionBeforeMove = map[ pacman.y ][ pacman.x ];

    if ( map[ movement.y-1 ][ movement.x ] !== 1 ) {

        map[ movement.y ][ movement.x ] = fieldBehindTheGhost;
        movement.y -= 1;

        if ( map[ movement.y ][ movement.x ] === 2 ) {

            fieldBehindTheGhost = 2;

        }

        else if ( map[ movement.y ][ movement.x ] === 6 ) {

            fieldBehindTheGhost = 6;

        }

        map[ movement.y ][ movement.x ] = movement.id;

    }

}

function moveRight ( movement ) {

    fieldBehindTheGhost = 3;
    positionBeforeMove = map[ pacman.y ][ pacman.x ];

    if ( map[ movement.y ][ movement.x+1 ] !== 1 ) {

        map[ movement.y ][ movement.x ] = fieldBehindTheGhost;
        movement.x += 1;

        if ( map[ movement.y ][ movement.x ] === 2 ) {

            fieldBehindTheGhost = 2;

        }

        else if ( map[ movement.y ][ movement.x ] === 6 ) {

            fieldBehindTheGhost = 6;

        }

        map[ movement.y ][ movement.x ] = movement.id;

    }

}

function moveDown ( movement ) {

    fieldBehindTheGhost = 3;
    positionBeforeMove = map[ pacman.y ][ pacman.x ];

    if ( map[ movement.y+1 ][ movement.x ] !== 1 ) {

        map[ movement.y ][ movement.x ] = fieldBehindTheGhost;
        movement.y += 1;

        if ( map[ movement.y ][ movement.x ] === 2 ) {

            fieldBehindTheGhost = 2;

        }

        else if ( map[ movement.y ][ movement.x ] === 6 ) {

            fieldBehindTheGhost = 6;

        }

        map[ movement.y ][ movement.x ] = movement.id;

    }

}

//Ghost movements that are careful not to eat the fruit.
function moveLeftCoin ( movementCoin )  {

    if ( map[ movementCoin.y ][ movementCoin.x-1 ] !== 1 ) {

        if( map[ movementCoin.y ][ movementCoin.x-1 ] === 2 ) {

            map[ movementCoin.y ][ movementCoin.x ] = movementCoin.fieldBehindTheGhost;
            movementCoin.x -= 1;
            map[ movementCoin.y ][ movementCoin.x ] = movementCoin.id;
            movementCoin.fieldBehindTheGhost = 2;

        }

        else if( map[ movementCoin.y ][ movementCoin.x-1 ] === 6) {

            map[ movementCoin.y ][ movementCoin.x ] = movementCoin.fieldBehindTheGhost;
            movementCoin.x -= 1;
            map[ movementCoin.y ][ movementCoin.x ] = movementCoin.id;
            movementCoin.fieldBehindTheGhost = 6;

        }

    }

}

function moveUpCoin ( movementCoin ) {

    if ( map[ movementCoin.y+1 ][ movementCoin.x ] !== 1 ) {

        if ( map[ movementCoin.y+1 ][ movementCoin.x ] === 2 ) {

            map[ movementCoin.y ][ movementCoin.x ] = movementCoin.fieldBehindTheGhost;
            movementCoin.y += 1;
            map[ movementCoin.y ][ movementCoin.x ] = movementCoin.id;
            movementCoin.fieldBehindTheGhost = 2;

        }

        else if ( map[ movementCoin.y+1 ][ movementCoin.x ] === 6 ) {

            map[ movementCoin.y ][ movementCoin.x ] = movementCoin.fieldBehindTheGhost;
            movement.y += 1;
            map[ movementCoin.y ][ movementCoin.x ] = movementCoin.id;
            movementCoin.fieldBehindTheGhost = 6;

        }

    }

}

function moveRightCoin( movementCoin ) {

    if ( map[ movementCoin.y ][ movementCoin.x+1 ] !== 1 ) {

        if ( map[ movementCoin.y ][ movementCoin.x+1 ] === 2 ) {

            map[ movementCoin.y ][ movementCoin.x ] = movementCoin.fieldBehindTheGhost;
            movementCoin.x += 1;
            map[ movementCoin.y ][ movementCoin.x ] = movementCoin.id;
            movementCoin.fieldBehindTheGhost = 2;

        }

        else if( map[ redGhost.y ][ redGhost.x+1 ] === 6 || map[ yellowGhost.y ][ yellowGhost.x+1 ] === 6 ) {

            map[ movementCoin.y ][ movementCoin.x ] = movementCoin.fieldBehindTheGhost;
            movementCoin.x += 1;
            map[ movementCoin.y ][ movementCoin.x ] = movementCoin.id;
            movementCoin.fieldBehindTheGhost = 6;

        }

    }

}

function moveDownCoin( movementCoin ) {

    if ( map[ movementCoin.y-1 ][ movementCoin.x ] !== 1 ) {

        if ( map[ movementCoin.y-1 ][ movementCoin.x ] === 2 ) {

            map[ movementCoin.y ][ movementCoin.x ] = movementCoin.fieldBehindTheGhost;
            movementCoin.y -= 1;
            map[ movementCoin.y ][ movementCoin.x ] = movementCoin.id;
            movementCoin.fieldBehindTheGhost = 2;

        }

        else if ( map[ movementCoin.y-1 ][ movementCoin.x ] === 6 ) {

            map[ movementCoin.y ][ movementCoin.x ] = movementCoin.fieldBehindTheGhost;
            movementCoin.y -= 1;
            map[ movementCoin.y ][ movementCoin.x ] = movementCoin.id;
            movementCoin.fieldBehindTheGhost = 6;

        }

    }

}
