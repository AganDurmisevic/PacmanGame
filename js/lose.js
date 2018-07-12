/**
 * Function checks if the player has lost the game.
 * Every encounter with the spirit takes away a life.
 */
function lose()
{
    if(!won() && pacman.y === redGhost.y && pacman.x === redGhost.x)
    {
        ghosts.play();
        newPosition();
        drawWorld();
        life -= 1;
        heartsDraw();
        drawWorld();
        if(life === 0)
        {
            die.play();
            highscore += score;
            document.getElementById('score').innerHTML = "DEAD, PRESS R TO RESTART";
            document.onkeydown = newStart;
            return true;
        }
    }
    else if (!won() && pacman.y === yellowGhost.y && pacman.x === yellowGhost.x)
    {
        ghosts.play();
        newPosition();
        drawWorld();
        life -= 1;
        heartsDraw();
        drawWorld();
    if(life === 0)
        {
            die.play();
            highscore += score;
            document.getElementById('score').innerHTML = "DEAD, PRESS R TO RESTART";
            document.onkeydown = newStart;
            return true;
        }
    }
    else if (!won() && pacman.y === greenGhost.y && pacman.x === greenGhost.x)
    {
        ghosts.play();
        newPosition();
        drawWorld();
        life -= 1;
        heartsDraw();
        drawWorld();
    if (life === 0)
        {
            die.play();
            highscore += score;
            document.getElementById('score').innerHTML = "DEAD, PRESS R TO RESTART";
            document.onkeydown = newStart;
            return true;
        }
    }
    else if (!won() && pacman.y === pinkGhost.y && pacman.x === pinkGhost.x)
    {
        ghosts.play();
        newPosition();
        drawWorld();
        life -= 1;
        heartsDraw();
        drawWorld();
    if(life === 0)
        {
            localStorageHighscore();
            die.play();
            highscore += score;
            document.getElementById('score').innerHTML = "DEAD, PRESS R TO RESTART";
            document.onkeydown = newStart;
            return true;
        }
    }
    return false;
}