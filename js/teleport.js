//Teleportiert denn Geist wenn er durch Tunnel geht auf der linken Seite.  
function newPositionLeft()
{   
    map[pacman.y][pacman.x] = 3;
    pacman.x = 19;
    pacman.y = 9;
    drawWorld();
}

//Teleportiert denn Geist wenn er durch Tunnel geht auf der rechten Seite. 
function newPositionRight()
{   
    map[pacman.y][pacman.x] = 3;
    pacman.x = 0;
    pacman.y = 3;
    drawWorld();
}

//Teleportiert denn Pacman wenn er leben abgezogen bekommt zu Anfangskoordinaten. 
function newPosition()
{
    pacman.x = 2;
    pacman.y = 1;
    drawWorld();
}

//Teleportiert denn Pacman2 wenn er leben abgezogen bekommt zu Anfangskoordinaten.
function newPosition2()
{
    pacman2.x = 4;
    pacman2.y = 2;
    drawWorld();
}