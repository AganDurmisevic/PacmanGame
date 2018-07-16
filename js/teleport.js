//Teleports for Pacman if he goes through tunnels on the left side.
function newPositionLeft () {

    map[ pacman.y ][ pacman.x]  = 3;
    pacman.x = 19;
    pacman.y = 9;
    map[ pacman.y ][ pacman.x]  = 5;
    drawWorld ();

}

function newPositionLeft2 () {

    map[ pacman2.y ][ pacman2.x ] = 3;
    pacman2.x = 19;
    pacman2.y = 9;
    map[ pacman2.y ][ pacman2.x ] = 12;
    drawWorld ();

}

//Teleports for Pacman if he goes through tunnels on the right side.
function newPositionRight () {

    map[ pacman.y ][ pacman.x ] = 3;
    pacman.x = 0;
    pacman.y = 3;
    map[ pacman.y ][ pacman.x ] = 5;
    drawWorld ();
}

function newPositionRight2 () {

    map[ pacman2.y ][ pacman2.x ] = 3;
    pacman2.x = 0;
    pacman2.y = 3;
    map[ pacman2.y ][ pacman2.x ] = 12;
    drawWorld ();

}

// Teleports for Pacman when he gets deducted life to start coordinates.
function newPosition () {

    map[ pacman.y ][ pacman.x]  = 3;
    pacman.x = 2;
    pacman.y = 1;
    map[ pacman.y ][ pacman.x]  = 5;

}

//Teleports for Pacman2 if he gets deducted live! He gets to start coordinates.
function newPosition2 () {

    map[ pacman2.y ][ pacman2.x]  = 3;
    pacman2.x = 4;
    pacman2.y = 2;
    map[ pacman2.y ][ pacman2.x]  = 12;

}