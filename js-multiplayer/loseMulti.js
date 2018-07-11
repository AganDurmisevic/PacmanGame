/*
    Function prüft ob einer der Spieler das Game lose hat und . ob einer den Ghost begegnet ist (falls ja wird 1 life abgezogen).
*/
function loseMulti()
{
   if(!wonMulti() && pacman.y == redGhost.y && pacman.x == redGhost.x)
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
            die.play();
            document.getElementById('score').innerHTML = "DEAD, PRESS R TO RESTART";
            document.onkeydown = newStart;
            return true;
        }
    }
    else if(!wonMulti() && pacman2.y == redGhost.y && pacman2.x == redGhost.x)
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
    else if (!wonMulti() && pacman.y == yellowGhost.y && pacman.x == yellowGhost.x)
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
            document.getElementById('score').innerHTML = "DEAD, PRESS R TO RESTART";
            document.onkeydown = newStart;
            return true;
        }
    }
    else if (!wonMulti() && pacman2.y == yellowGhost.y && pacman2.x == yellowGhost.x)
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
    else if (!wonMulti() && pacman.y == greenGhost.y && pacman.x == greenGhost.x)
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
            document.getElementById('score').innerHTML = "DEAD, PRESS R TO RESTART";
            document.onkeydown = newStart;
            return true;
        }
    }
    else if (!wonMulti() && pacman2.y == greenGhost.y && pacman2.x == greenGhost.x)
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
    else if (!wonMulti() && pacman.y == pinkGhost.y && pacman.x == pinkGhost.x)
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
            document.getElementById('score').innerHTML = "DEAD, PRESS R TO RESTART";
            document.onkeydown = newStart;
            return true;
        }
    }
    else if (!wonMulti() && pacman2.y == pinkGhost.y && pacman2.x == pinkGhost.x)
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
    return false;
}