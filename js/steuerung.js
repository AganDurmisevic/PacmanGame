    // Erklärung für die Map:
    // 1 = <div class='wall'></div>            Mauer
	// 2 = <div class='coin'></div>            Essen     
	// 3 = <div class='ground'></div>          Grund
    // 4 = <div class='coin1'></div>           Essen
	// 5 = <div class='pacman'></div>          Pacman(Gelb)
    // 6 = <div class='coin2'></div>           Essen
    // 7 = <div class='wallL'></div>           Mauer
    // 8 = <div class='redGhost'></div>        Roter Geist
    // 9 = <div class='yellowGhost'></div>     Gelber Geist

    //Standardmodus bzw. Spielmodus
    //Wartet auf Tastatur angaben um Pacman zu Steuern.
    var standard = function(e) 
    {
            moveGhost(e);
            /**
                Wenn <- gedrückt wird dann läuft der Pacman nach Links, aber nur wenn vor ihm keine Hindernisse sind, ansonsten wenn er auf 'Früchte' trifft bekommt er Punkte.
            */
			if (e.keyCode === 37)
            {
                // dreht den Pacman um 180deg weil er anfangs nach Rechts guckt.
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
                    if(currentLevel > 0 && map[pacman.y][pacman.x] == map[3][0])
                    {
                        newPositionLeft();  
                        platz.play();
                    }
                    document.getElementById('score').innerHTML = ("SCORE: " + score);
                    moveLeft(pacman);
                    verloren();
                    gewonnen();
                }
                drawWorld();
            }
        
            /**   
                     ^
                Wenn | gedrückt wird dann läuft der Pacman nach Oben, aber nur wenn vor ihm keine Hindernisse sind, ansonsten wenn er auf 'Früchte' trifft bekommt er Punkte.
            */
			else if (e.keyCode === 38)
            {
            // dreht den Pacman um 270deg weil er anfangs nach rechts guckt und 90deg ihn nach unten dreht.
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
                gewonnen();
                verloren();
                }
                drawWorld();
            }
        
            /**
                Wenn -> gedrückt wird dann läuft der Pacman nach Rechts, aber nur wenn vor ihm keine Hindernisse sind, ansonsten wenn er auf 'Früchte' trifft bekommt er Punkte.
            */
			else if (e.keyCode === 39)
            {
            //direction ist leer weil nach Rechts gucken Standard ist (unveränderter zustand).
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
                if(currentLevel > 0 && map[pacman.y][pacman.x] == map[9][19])
                {
                    newPositionRight(); 
                    platz.play();
                }
                document.getElementById('score').innerHTML = ("SCORE: " + score);
                moveRight(pacman);
                gewonnen();
                verloren();
            }
            drawWorld();
            }
        
            /** 
                     |
                Wenn v gedrückt wird dann läuft der Pacman nach Unten, aber nur wenn vor ihm keine Hindernisse sind, ansonsten wenn er auf 'Früchte' trifft bekommt er Punkte.
            */
			else if (e.keyCode === 40)
            {
            // dreht den Pacman um 90deg (nach Unten) weil er anfangs nach rechts guckt.
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
                gewonnen();
                verloren();
                }
                drawWorld();
            }
        
            /** 
                Wenn Enter('13') gedrückt wird dann wechselt das Spiel in Pausenmodus und ignoriert den    EventListener in den Standardmodus (damit man in der Pause nicht Steuern kann) und        schreibt das man Pausiert hat.
            */
            else if(e.keyCode === 13)
            {
                document.onkeydown = pause;
                document.getElementById('score').innerHTML = ("PAUSED");
                 //document.getElementById("container").classList.add('pacman-paused');
            }
            
            /**
                Wenn R('82') gedrückt wird und function verloren() true liefert
                wird das Level Spiel erneuert.
            */
            else if(e.keyCode === 82 && verloren())
            {
                document.onkeydown = neuAnfang;
                sound.play();
            }
        
            /**
                Wenn Space('32') gedrückt wird und function gewonnen() true liefert
                wird das Level erhöht bzw. Map, Pacman usw. auch neu geladen falls das neue Level 
                existiert, ansonsten kommt die Nachticht das man das Maximale-Level erreicht hat.
            */
            if(gewonnen()) 
            { 
                sieg.play();
                document.onkeydown = siegerModus;
                drawWorld();
            }
        drawWorld();
    }
    
    //Pausemodus 
    //Wartet auf Enter eingabe um den Modus zu ändern bzw. in Standardmodus zu kommen - (reagiert nur auf Entertaste).
    var pause = function(e) 
    {
        if(e.keyCode === 13)
        {
            document.onkeydown = standard;
            document.getElementById('score').innerHTML = ("SCORE: " + score);
            pause.play();
        }
        drawWorld();
    }
    
    
    //Verlorenmodus 
    //Wartet auf R eingabe um den Modus zu ändern bzw. in Standardmodus zu kommen und von anfang an anzufangen - (reagiert nur auf R).
    var neuAnfang = function(anfang)
    {
        if(anfang.keyCode === 82)
        {
            document.onkeydown = standard;
            javascript:location.reload();
            die.play();
        }
        drawWorld();
    }
    
    //Siegermodus 
    //Wartet auf Leertasten eingabe um den Modus zu ändern bzw. in Standardmodus zu kommen um nächste Level zu laden - (reagiert dafür auf die Leertaste).
    var siegerModus = function(sieg)
    {
        if(sieg.keyCode === 32)
        {
                document.onkeydown = standard;
                document.getElementById('score').innerHTML = ("SCORE: " + score);
                document.getElementById('nextlvl').innerHTML = "";
                leben = 3;
                currentLevel++;
                if(currentLevel >= level.length) 
                {
                    document.getElementById('nextlvl').innerHTML = ("MAX LVL REACHED");  
                    return;
                }
                map = level[currentLevel].map;
                pacman = level[currentLevel].pacman;
                redGhost = level[currentLevel].redGhost;
                yellowGhost = level[currentLevel].yellowGhost;
                highscore = highscore + score;
        }
        
        //Versteckte möglichkeit im Siegermodus auch manuel das Level zu ändern. 
        //Mit 1 das erste Lvl, mit 2 das zweite usw...
        else if(sieg.keyCode === 49) 
        {
            document.getElementById('nextlvl').innerHTML = "";
            document.onkeydown = standard;
            currentLevel = 0;
            leben = 3;
            map = level[currentLevel].map;
            pacman = level[currentLevel].pacman;
            redGhost = level[currentLevel].redGhost;
            yellowGhost = level[currentLevel].yellowGhost;
            score = 0;
        }
        else if(sieg.keyCode === 50)
        {
            document.getElementById('nextlvl').innerHTML = "";
            document.onkeydown = standard;
            currentLevel = 1;
            leben = 3;
            map = level[currentLevel].map;
            pacman = level[currentLevel].pacman;
            redGhost = level[currentLevel].redGhost;
            yellowGhost = level[currentLevel].yellowGhost;
            score = 0;
        }
        else if(sieg.keyCode === 51)
        {
            document.getElementById('nextlvl').innerHTML = "";
            document.onkeydown = standard;
            currentLevel = 2;
            leben = 3;
            map = level[currentLevel].map;
            pacman = level[currentLevel].pacman;
            redGhost = level[currentLevel].redGhost;
            yellowGhost = level[currentLevel].yellowGhost;
            score = 0;
        }
        drawWorld();
    }
document.onkeydown = standard;
