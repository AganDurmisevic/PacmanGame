/*
    Function prüft ob einer der Spieler das Spiel Verloren hat und . ob einer den Geist begegnet ist (falls ja wird 1 Leben abgezogen).
*/
function verlorenMulti()
{
   if(!gewonnenMulti() && pacman.y == redGhost.y && pacman.x == redGhost.x)
    {
        newPosition();
        drawWorld();
        leben -= 1;
        die.play();
        herzenMalenMulti();
        drawWorld();
        if(leben === 0)
        {  
            highscore += score;
            die.play();
            document.getElementById('score').innerHTML = "DEAD, PRESS R TO RESTART";
            document.onkeydown = neuAnfang;
            return true;
        }
    }
    else if(!gewonnenMulti() && pacman2.y == redGhost.y && pacman2.x == redGhost.x)
    {
        newPosition2();
        drawWorld();
        leben2 -= 1;
        die.play();
        herzenMalenMulti();
        drawWorld();
        if(leben2 === 0)
        {
            highscore2 += score2;
            document.getElementById('score2').innerHTML = "DEAD, PRESS R TO RESTART";
            document.onkeydown = neuAnfang;
            return true;
        }
    }
    else if (!gewonnenMulti() && pacman.y == yellowGhost.y && pacman.x == yellowGhost.x) 
    {
        newPosition();
        drawWorld();
        leben -= 1;
        die.play();
        herzenMalenMulti();
        drawWorld();
    if(leben === 0)
        {
            highscore += score;
            document.getElementById('score').innerHTML = "DEAD, PRESS R TO RESTART";
            document.onkeydown = neuAnfang;
            return true;
        }
    }
    else if (!gewonnenMulti() && pacman2.y == yellowGhost.y && pacman2.x == yellowGhost.x) 
    {
        newPosition2();
        drawWorld();
        leben2 -= 1;
        die.play();
        herzenMalenMulti();
        drawWorld();
    if(leben2 === 0)
        {
            highscore2 += score2;
            document.getElementById('score2').innerHTML = "DEAD, PRESS R TO RESTART";
            document.onkeydown = neuAnfang;
            return true;
        }
    }
    else if (!gewonnenMulti() && pacman.y == greenGhost.y && pacman.x == greenGhost.x) 
    {
        newPosition();
        drawWorld();
        leben -= 1;
        die.play();
        herzenMalenMulti();
        drawWorld();
    if(leben === 0)
        {
            highscore += score;
            document.getElementById('score').innerHTML = "DEAD, PRESS R TO RESTART";
            document.onkeydown = neuAnfang;
            return true;
        }
    }
    else if (!gewonnenMulti() && pacman2.y == greenGhost.y && pacman2.x == greenGhost.x) 
    {
        newPosition2();
        drawWorld();
        leben2 -= 1;
        die.play();
        herzenMalenMulti();
        drawWorld();
    if(leben2 === 0)
        {
            highscore2 += score2;
            document.getElementById('score2').innerHTML = "DEAD, PRESS R TO RESTART";
            document.onkeydown = neuAnfang;
            return true;
        }
    }
    else if (!gewonnenMulti() && pacman.y == pinkGhost.y && pacman.x == pinkGhost.x) 
    {
        newPosition();
        drawWorld();
        leben -= 1;
        die.play();
        herzenMalenMulti();
        drawWorld();
    if(leben === 0)
        {
            highscore += score;
            document.getElementById('score').innerHTML = "DEAD, PRESS R TO RESTART";
            document.onkeydown = neuAnfang;
            return true;
        }
    }
    else if (!gewonnenMulti() && pacman2.y == pinkGhost.y && pacman2.x == pinkGhost.x) 
    {
        newPosition2();
        drawWorld();
        leben2 -= 1;
        die.play();
        herzenMalenMulti();
        drawWorld();
    if(leben2 === 0)
        {
            highscore2 += score2;
            document.getElementById('score2').innerHTML = "DEAD, PRESS R TO RESTART";
            document.onkeydown = neuAnfang;
            return true;
        }
    }
    return false;
}