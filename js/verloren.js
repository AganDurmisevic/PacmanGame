function verloren()
{
   if(!gewonnen() && pacman.y == redGhost.y && pacman.x == redGhost.x)
        {
            geister.play();
            newPosition();
            drawWorld();
            leben -= 1;
            herzenMalen();
            drawWorld();
            if(leben === 0)
            {
                die.play();
                highscore += score;
                localStorageHighscore();
                document.getElementById('score').innerHTML = "DEAD, PRESS R TO RESTART";
                document.onkeydown = neuAnfang;
                return true;
            }
        }
    else if (!gewonnen() && pacman.y == yellowGhost.y && pacman.x == yellowGhost.x) 
    {
        geister.play();
        newPosition();
        drawWorld();
        leben -= 1;
        herzenMalen();
        drawWorld();
    if(leben === 0)
        {
            die.play();
            highscore += score;
            localStorageHighscore();
            document.getElementById('score').innerHTML = "DEAD, PRESS R TO RESTART";
            document.onkeydown = neuAnfang;
            return true;
        }
    }
    else if (!gewonnen() && pacman.y == greenGhost.y && pacman.x == greenGhost.x) 
    {
        geister.play();
        newPosition();
        drawWorld();
        leben -= 1;
        herzenMalen();
        drawWorld();
    if(leben === 0)
        {
            die.play();
            highscore += score;
            localStorageHighscore();
            document.getElementById('score').innerHTML = "DEAD, PRESS R TO RESTART";
            document.onkeydown = neuAnfang;
            return true;
        }
    }
    else if (!gewonnen() && pacman.y == pinkGhost.y && pacman.x == pinkGhost.x) 
    {
        geister.play();
        newPosition();
        drawWorld();
        leben -= 1;
        herzenMalen();
        drawWorld();
    if(leben === 0)
        {
            die.play();
            highscore += score;
            localStorageHighscore();
            document.getElementById('score').innerHTML = "DEAD, PRESS R TO RESTART";
            document.onkeydown = neuAnfang;
            return true;
        }
    }
    return false;
}