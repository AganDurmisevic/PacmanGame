//Teleports for Pacman if he goes through tunnels on the left side.
function newPositionLeft (position) {

    map[ position.y ][ position.x]  = GROUND;
    position.x = 19;
    position.y = 9;
    map[ position.y ][ position.x]  = PACMAN;
    drawWorld ();

}

//Teleports for Pacman if he goes through tunnels on the right side.
function newPositionRight (position) {

    map[ position.y ][ position.x ] = GROUND;
    position.x = 0;
    position.y = 3;
    map[ position.y ][ position.x ] = PACMAN;
    drawWorld ();
}

// Teleports for Pacman when he gets deducted life to start coordinates.
function newPosition () {

    map[ pacman.y ][ pacman.x]  = GROUND;
    pacman.x = 2;
    pacman.y = 1;
    map[ pacman.y ][ pacman.x]  = PACMAN;

}

//Teleports for Pacman2 if he gets deducted live! He gets to start coordinates.
function newPosition2 () {

    map[ pacman2.y ][ pacman2.x]  = GROUND;
    pacman2.x = 4;
    pacman2.y = 2;
    map[ pacman2.y ][ pacman2.x]  = PACMAN_2;

}