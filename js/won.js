/**     Function checks if there are still fruits on the map.
        - If YES: the space bar continues - the game contains the score
          and the next level.
        - If NO: will continue to be tested ...
*/
function won()
{
    var count = 0;
    for(var i = 0; i < map.length; i = i + 1)
        {
            for(var j = 0; j < map[i].length; j = j + 1)
                {
                    //console.log("idex i: " + i + " index j: " + j);
                    if((map[i][j] == 2) || (map[i][j] == 4) || (map[i][j] == 6))
                    {
                        count += 1;
                        return false;
                    }
                }
        }
    drawWorld();
    winner.play();
    document.getElementById('nextLvl').innerHTML = "VICTORY, PRESS SPACE FOR NEXT LVL!";
    highscore += score;
    return true;
}