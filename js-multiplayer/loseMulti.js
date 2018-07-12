//Function checks if one of the players has the game loose and. whether one has encountered the Ghost (if yes, 1 life is deducted).
function loseMulti()
{
    drawWorld();
   if(!wonMulti() && pacman.y === redGhost.y && pacman.x === redGhost.x)
    {
        newPosition();
        drawWorld();
        life -= 1;
        die.play();
        heartsDrawMulti();
        drawWorld();
        if(life === 0)
        {  
            highscore += score;
            saveInLocalStorage();
            die.play();
            document.getElementById('score').innerHTML = "DEAD, PRESS R TO RESTART";
            document.onkeydown = newStart;
            return true;
        }
    }
    else if(!wonMulti() && pacman2.y === redGhost.y && pacman2.x === redGhost.x)
    {
        newPosition2();
        drawWorld();
        life2 -= 1;
        die.play();
        heartsDrawMulti();
        drawWorld();
        if(life2 === 0)
        {
            highscore2 += score2;
            document.getElementById('score2').innerHTML = "DEAD, PRESS R TO RESTART";
            document.onkeydown = newStart;
            return true;
        }
    }
    else if (!wonMulti() && pacman.y === yellowGhost.y && pacman.x === yellowGhost.x)
    {
        newPosition();
        drawWorld();
        life -= 1;
        die.play();
        heartsDrawMulti();
        drawWorld();
    if(life === 0)
        {
            highscore += score;
            saveInLocalStorage();
            document.getElementById('score').innerHTML = "DEAD, PRESS R TO RESTART";
            document.onkeydown = newStart;
            return true;
        }
    }
    else if (!wonMulti() && pacman2.y === yellowGhost.y && pacman2.x === yellowGhost.x)
    {
        newPosition2();
        drawWorld();
        life2 -= 1;
        die.play();
        heartsDrawMulti();
        drawWorld();
    if(life2 === 0)
        {
            highscore2 += score2;
            document.getElementById('score2').innerHTML = "DEAD, PRESS R TO RESTART";
            document.onkeydown = newStart;
            return true;
        }
    }
    else if (!wonMulti() && pacman.y === greenGhost.y && pacman.x === greenGhost.x)
    {
        newPosition();
        drawWorld();
        life -= 1;
        die.play();
        heartsDrawMulti();
        drawWorld();
    if(life === 0)
        {
            highscore += score;
            saveInLocalStorage();
            document.getElementById('score').innerHTML = "DEAD, PRESS R TO RESTART";
            document.onkeydown = newStart;
            return true;
        }
    }
    else if (!wonMulti() && pacman2.y === greenGhost.y && pacman2.x === greenGhost.x)
    {
        newPosition2();
        drawWorld();
        life2 -= 1;
        die.play();
        heartsDrawMulti();
        drawWorld();
    if(life2 === 0)
        {
            highscore2 += score2;
            document.getElementById('score2').innerHTML = "DEAD, PRESS R TO RESTART";
            document.onkeydown = newStart;
            return true;
        }
    }
    else if (!wonMulti() && pacman.y === pinkGhost.y && pacman.x === pinkGhost.x)
    {
        newPosition();
        drawWorld();
        life -= 1;
        die.play();
        heartsDrawMulti();
        drawWorld();
    if(life === 0)
        {
            highscore += score;
            saveInLocalStorage();
            document.getElementById('score').innerHTML = "DEAD, PRESS R TO RESTART";
            document.onkeydown = newStart;
            return true;
        }
    }
    else if (!wonMulti() && pacman2.y === pinkGhost.y && pacman2.x === pinkGhost.x)
    {
        newPosition2();
        drawWorld();
        life2 -= 1;
        die.play();
        heartsDrawMulti();
        drawWorld();
    if(life2 === 0)
        {
            highscore2 += score2;
            document.getElementById('score2').innerHTML = "DEAD, PRESS R TO RESTART";
            document.onkeydown = newStart;
            return true;
        }
    }
   else if (!wonMulti() && pacman2.y === pacman.y && pacman2.x === pacman.x || pacman.y === pacman2.y && pacman.x === pacman2.x)
   {
       newPosition2();
       newPosition();
       drawWorld();
       life2 -= 1;
       life -= 1;
       die.play();
       heartsDrawMulti();
       drawWorld();
       if(life2 === 0 || life === 0)
       {
           highscore2 += score2;
           highscore += score;
           document.getElementById('score2').innerHTML = "DEAD, PRESS R TO RESTART";
           document.onkeydown = newStart;
           return true;
       }
   }
    drawWorld();
    return false;
}