/** 
    Function prüft ob auf der Map noch 'Früchte' liegen.
        - Wenn JA: mit Leertaste geht es weiter - das Spiel behält den Score 
          und lädt das nächste Level (analog zur Function in der Steuerung und reagiert nur auf die Leertaste (SiegerModus)).
        - Wenn NEIN: wird weiter geprüft...
*/
function gewonnenMulti()
{
    var neu = 0;
    for(var i = 0; i < map.length; i = i + 1)
    {
        for(var j = 0; j < map[i].length; j = j + 1)
        {
            if((map[i][j] == 2) || (map[i][j] == 4) || (map[i][j] == 6))
            {
                // Solange nur eine 'Frucht' in der Map zu finden ist wird gewonnen false returnt.
                neu += 1;
                return false;
            }
        }
    }
    drawWorld();
    highscore += score;
    highscore2 += score2;
    
    /** 
        Wenn Highscore von Spieler 1, größer ist als Highscore von Spieler 2 
        dann steht bei score 1, dass Spieler 1 Gewonnen hat und ansonsten Spieler 2. 
    */
    if(highscore > highscore2)
    {
        document.getElementById('nextlvl').innerHTML = "PLAYER 1 VICTORY, PRESS SPACE FOR NEXT LVL!";
        sieg.play();
        drawWorld();
        return true;
    }
    else if(highscore === highscore2)
    {
        document.getElementById('nextlvl').innerHTML = "PLAYER 1 VICTORY, PRESS SPACE FOR NEXT LVL!";
        document.getElementById('nextlvl2').innerHTML = "PLAYER 2 VICTORY, PRESS SPACE FOR NEXT LVL!";
        sieg.play();
        drawWorld();
        return true;
    }
    else
    {
        document.getElementById('nextlvl2').innerHTML = "PLAYER 2 VICTORY, PRESS SPACE FOR NEXT LVL!";
        sieg.play();
        drawWorld();
        return true;
    }
    drawWorld();
    //Wenn keine 'Früchte' mehr zu finden sind dann ist neu = 0 und gewonnen returnt true. 
    return true;
}