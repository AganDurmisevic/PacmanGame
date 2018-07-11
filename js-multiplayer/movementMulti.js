    // Map:
    // 1 = <div class='wall'></div>            Wall
	// 2 = <div class='coin'></div>            Food
	// 3 = <div class='ground'></div>          Ground
    // 4 = <div class='coin1'></div>           Food
	// 5 = <div class='pacman'></div>          Pacman(Yellow)
    // 6 = <div class='coin2'></div>           Food
    // 7 = <div class='wallL'></div>           Wall
    // 8 = <div class='redGhost'></div>        Red Ghost
    // 9 = <div class='yellowGhost'></div>     Yellow Ghost
    // 10 = <div class='pacman2'></div>        Pacman 2 (Grün)
    // 11 = <div class='freenGhost'></div>     Grüner Ghost
    // 12 = <div class='pinkGhost'></div>      Pinker Ghost

    //Standard mode / Game mode
    //Waiting on keyboard listener to control Pacman, Pacman2 and Ghosts.
    var standard = function(e) 
    {
            //Ghosts Movement
            moveGhost(e);
        
            //If <- is pushed, then the Pacman will turn to the left, but only if there are no obstacles, if he meets 'fruits', will he come.

			if (e.keyCode === 37)
            {
                // Turn the Pacman 180deg because he starts to look to the right.
                // Pay attention to the walls.
                pacman.direction = 'turn-180';
                if(map[pacman.y][pacman.x-1] !== 1 && map[pacman.y][pacman.x-1] !== 7)
                {
                    if(map[pacman.y][pacman.x-1] === 2)
                    {
                        score = score + 10;
                        eat.play();
                    }
                    if(map[pacman.y][pacman.x-1] === 6)
                    {
                        score = score + 10;
                        eatPill.play();
                    }
                    if(map[pacman.y][pacman.x-1] === 4)
                    {
                        score = score + 40;
                        eat.play();
                    }
                    if(currentLevel > 0 && map[pacman.y][pacman.x] === map[3][0])
                    {
                        newPositionLeft();
                        winner.play();
                    }
                    document.getElementById('score').innerHTML = ("SCORE: " + score);
                    moveLeft(pacman);
                    drawWorld();
                    loseMulti();
                    wonMulti();
                }
                drawWorld();
            }

             //   ^
             //If | is pressed then the Pacman runs to the top, but only if there are no obstacles in front of him, otherwise he gets points on 'fruits'.
			else if (e.keyCode === 38)
            {
            //Turning Pacman 270deg because he starts to look to the right and 90deg turns him down.
            pacman.direction = 'turn-270';
                if (map[pacman.y-1][pacman.x] !== 1 && map[pacman.y-1][pacman.x] !== 7)
                {
                    if(map[pacman.y-1][pacman.x] === 2)
                    {
                        score = score + 10;
                        eat.play();
                    }
                    if(map[pacman.y-1][pacman.x] === 6)
                    {
                        score = score + 10;
                        eatPill.play();
                    }
                    if(map[pacman.y-1][pacman.x] === 4)
                    {
                        score = score + 40;
                        eat.play();
                    }
                    document.getElementById('score').innerHTML = ("SCORE: " + score);
                    moveUp(pacman);
                    drawWorld();
                    loseMulti();
                    wonMulti();
                }
                drawWorld();
            }
        
            //If -> is pressed then the Pacman runs to the right, but only if there are no obstacles in front of him, otherwise he gets points on 'fruits'.
			else if (e.keyCode === 39)
            {
            //direction is empty because looking to the right is default (unchanged state).
            pacman.direction = '';
            if(map[pacman.y][pacman.x+1] !== 1 && map[pacman.y][pacman.x+1] !== 7)
            {
                if(map[pacman.y][pacman.x+1] === 2)
                {
                    score = score + 10;
                    eat.play();
                }
                if(map[pacman.y][pacman.x+1] === 6)
                {
                    score = score + 40;
                    eatPill.play();
                }
                if(currentLevel > 0 && map[pacman.y][pacman.x] === map[9][19])
                {
                    newPositionRight(); 
                    winner.play();
                }
                document.getElementById('score').innerHTML = ("SCORE: " + score);
                moveRight(pacman);
                drawWorld();
                loseMulti();
                wonMulti();
            }
            drawWorld();
            }

             //   |
             //If v is pressed then the Pacman runs down, but only if there are no obstacles in front of him, otherwise he gets points when he hits fruits.
			else if (e.keyCode === 40)
            {
            //Turn the Pacman 90deg (down) because it starts to look right.
            pacman.direction = 'turn-90';
                if(map[pacman.y+1][pacman.x] !== 1 && map[pacman.y+1][pacman.x] !== 7)
                {
                    if(map[pacman.y+1][pacman.x] === 2)
                    {
                        score = score + 10;
                        eat.play();
                    }
                    if(map[pacman.y+1][pacman.x] === 6)
                    {
                        score = score + 40;
                        eatPill.play();
                    }
                document.getElementById('score').innerHTML = ("SCORE: " + score);
                moveDown(pacman);
                drawWorld();
                loseMulti();
                wonMulti();
                }
                drawWorld();
            }
        
        
            //Pacman 2
            else if (e.keyCode === 65)
            {
                //Turns the Pacman 180deg because he starts to look to the right.
                pacman2.direction = 'turn-180';
                if(map[pacman2.y][pacman2.x-1] !== 1 && map[pacman2.y][pacman2.x-1] !== 7)
                {
                    if(map[pacman2.y][pacman2.x-1] === 2)
                    {
                        score2 += 10;
                        eat.play();
                    }
                    if(map[pacman2.y][pacman2.x-1] === 6)
                    {
                        score2 += 10;
                        eatPill.play();
                    }
                    if(map[pacman2.y][pacman2.x-1] === 4)
                    {
                        score2 += 40;
                        eat.play();
                    }
                    if(currentLevel > 0 && map[pacman2.y][pacman2.x] === map[3][0])
                    {
                        newPositionLeft();   
                        winner.play();
                    }
                    document.getElementById('score2').innerHTML = ("SCORE: " + score2);
                    moveLeft(pacman2);
                    drawWorld();
                    loseMulti();
                    wonMulti();
                }
                drawWorld();
            }
        
            //   ^
            //If | is pressed then the Pacman runs to the top, but only if there are no obstacles in front of him, otherwise he gets points on 'fruits'.
			else if (e.keyCode === 87)
            {
            //Turning Pacman 270deg because he starts to look to the right and 90deg turns him down.
            pacman2.direction = 'turn-270';
            if (map[pacman2.y-1][pacman2.x] !== 1 && map[pacman2.y-1][pacman2.x] !== 7)
            {
                if(map[pacman2.y-1][pacman2.x] === 2)
                {
                    score2 += 10;
                }
                if(map[pacman2.y-1][pacman2.x] === 6)
                {
                    score2 += 10;
                }
                if(map[pacman2.y-1][pacman2.x] === 4)
                {
                    score2 += 40;
                }
                document.getElementById('score2').innerHTML = ("SCORE: " + score2);
                moveUp(pacman2);
                drawWorld();
                wonMulti();
                loseMulti();
                }
                drawWorld();
            }
        
            //If -> is pressed then the Pacman runs to the right, but only if there are no obstacles in front of him, otherwise he gets points on 'fruits'.
			else if (e.keyCode === 68)
            {
            //Direction is empty because looking to the right is default (unchanged state).
            pacman2.direction = '';
            if(map[pacman2.y][pacman2.x+1] !== 1 && map[pacman2.y][pacman2.x+1] !== 7)
            {
                if(map[pacman2.y][pacman2.x+1] === 2)
                {
                    score2 += 10;
                    eat.play();
                }
                if(map[pacman2.y][pacman2.x+1] === 6)
                {
                    score2 += 40;
                    eatPill.play();
                }
                if(currentLevel > 0 && map[pacman2.y][pacman2.x] === map[9][19])
                {
                    newPositionRight();
                    winner.play();
                }
                document.getElementById('score2').innerHTML = ("SCORE: " + score2);
                moveRight(pacman2);
                drawWorld();
                wonMulti();
                loseMulti();
            }
            drawWorld();
            }

            //   |
            //If v is pressed then the Pacman2 will run down, but only if there are no obstacles in front of him, otherwise he will score points if he hits 'fruits'.

			else if (e.keyCode === 83)
            {
            //Turns the Pacman2 90deg (down) because he starts to look right.
            pacman2.direction = 'turn-90';
                if(map[pacman2.y+1][pacman2.x] !== 1 && map[pacman2.y+1][pacman2.x] !== 7)
                {
                    if(map[pacman2.y+1][pacman2.x] === 2)
                    {
                        score2 += 10;
                        eat.play();
                    }
                    if(map[pacman2.y+1][pacman2.x] === 6)
                    {
                        score2 += 40;
                        eatPill.play();
                    }
                document.getElementById('score2').innerHTML = ("SCORE: " + score2);
                moveDown(pacman2);
                drawWorld();
                wonMulti();
                loseMulti();
                }
                drawWorld();
            }
        
            //If Enter ('13 ') is pressed then the game switches to pause mode and ignores the EventListener in standard mode (so that you can not control during the break) and writes that you have paused.
            else if(e.keyCode === 13)
            {
                document.getElementById('score').innerHTML = ("PAUSED");
                document.getElementById('score2').innerHTML = ("PAUSED");
                //document.getElementById("container").classList.add('pacman-paused');
            }
            /**
                Wenn R('82') gedrückt wird und function lose() true liefert
                wird das Level Game ernewert.
            */
            else if(e.keyCode === 82 && loseMulti())
            {
                document.onkeydown = newStart;
            }
            // Bei 2x drücken von -- wird automatisch new gestartet (ohne einer Bedingung).
            if(e.keyCode === 189)
            {
                document.onkeydown = newStart;
            }
        
            //When R ('82 ') is pressed and function lose() returns true the game will be reaped.
            if(wonMulti())
            { 
                document.onkeydown = wonMode;
                winner.play();
                drawWorld();
            }
        drawWorld();
    }
    
    //paused mode
    //Wait Enter Enter to change the mode or enter standard mode - (responds only to the Enter key).
    var paused = function(e)
    {
        if(e.keyCode === 13)
        {
            document.onkeydown = standard;
            document.getElementById('score').innerHTML = ("SCORE: " + score);
            document.getElementById('score2').innerHTML = ("SCORE: " + score2);
        }
        drawWorld();
    }
    
    
    //lose mode
    //Wait for R to change the mode or to go into standard mode and start from the beginning - (responds only to R).
    var newStart = function(start)
    {
        if(start.keyCode === 82 || start.keyCode === 189)
        {
            document.onkeydown = standard;
            javascript:location.reload();
            winner.play();
        }
        drawWorld();
    }
    
    //won mode
    //Waiting for space to come in the standard mode and to load next level - (responds to the space bar).
    var wonMode = function(winn)
    {
        if(winn.keyCode === 32)
        {
                document.onkeydown = standard;
                document.getElementById('score').innerHTML = ("SCORE: " + score);
                document.getElementById('score2').innerHTML = ("SCORE: " + score2);
                document.getElementById('nextLvl').innerHTML = "";
                life = 3;
                life2 = 3;
                currentLevel++;
                if(currentLevel >= level.length) 
                {
                    document.getElementById('nextLvl').innerHTML = ("MAX LVL REACHED");
                    return;
                }
                map = level[currentLevel].map;
                pacman = level[currentLevel].pacman;
                pacman2 = level[currentLevel].pacman2;
                redGhost = level[currentLevel].redGhost;
                yellowGhost = level[currentLevel].yellowGhost;
                greenGhost = level[currentLevel].greenGhost;
                pinkGhost = level[currentLevel].pinkGhost;
                highscore = highscore + score;
                highscore2 = highscore2 + score2;
        }

        //Hidden possibility in the winning mode also manuel to change the level.
        //With 1 the first Lvl, with 2 the second etc ...
        else if(winn.keyCode === 49)
        {
            document.getElementById('nextLvl').innerHTML = "";
            document.onkeydown = standard;
            currentLevel = 0;
            life = 3;
            life2 = 3;
            map = level[currentLevel].map;
            pacman = level[currentLevel].pacman;
            pacman2 = level[currentLevel].pacman2;
            redGhost = level[currentLevel].redGhost;
            yellowGhost = level[currentLevel].yellowGhost;
            greenGhost = level[currentLevel].greenGhost;
            pinkGhost = level[currentLevel].pinkGhost;
            score = 0;
            score2 = 0;
        }
        else if(winn.keyCode === 50)
        {
            document.getElementById('nextLvl').innerHTML = "";
            document.onkeydown = standard;
            currentLevel = 1;
            life = 3;
            life2 = 3;
            map = level[currentLevel].map;
            pacman = level[currentLevel].pacman;
            pacman2 = level[currentLevel].pacman2;
            redGhost = level[currentLevel].redGhost;
            yellowGhost = level[currentLevel].yellowGhost;
            greenGhost = level[currentLevel].greenGhost;
            pinkGhost = level[currentLevel].pinkGhost;
            score = 0;
            score2 = 0;
        }
        else if(winn.keyCode === 51)
        {
            document.getElementById('nextLvl').innerHTML = "";
            document.onkeydown = standard;
            currentLevel = 2;
            life = 3;
            life2 = 3;
            map = level[currentLevel].map;
            pacman = level[currentLevel].pacman;
            pacman2 = level[currentLevel].pacman2;
            redGhost = level[currentLevel].redGhost;
            yellowGhost = level[currentLevel].yellowGhost;
            greenGhost = level[currentLevel].greenGhost;
            pinkGhost = level[currentLevel].pinkGhost;
            score = 0;
            score2 = 0;
        }
        drawWorld();
    }
document.onkeydown = standard;
