/** Function prüft ob auf der Map noch 'Früchte' liegen.
        - Wenn JA: mit Leertaste geht es weiter - das Spiel behält den Score 
          und lädt das nächste Level (analog zur Function in der Steuerung und reagiert nur auf die Leertaste (SiegerModus)).
        - Wenn NEIN: wird weiter geprüft...
*/
function gewonnen()
{
    var neu = 0;
    for(var i = 0; i < map.length; i = i + 1)
        {
            for(var j = 0; j < map[i].length; j = j + 1)
                {
                    //console.log("idex i: " + i + " index j: " + j);
                    if((map[i][j] == 2) || (map[i][j] == 4) || (map[i][j] == 6))
                    {
                        neu += 1;
                        return false;
                    }
                }
        }
    drawWorld();
    sieg.play();
    document.getElementById('nextlvl').innerHTML = "VICTORY, PRESS SPACE FOR NEXT LVL!";
    highscore += score;
    return true;
}