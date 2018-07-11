function localStorageHighscore() 
{
    var oldStatus = window.localStorage.getItem('highscores');
    var result = {Player: numberOfGames, Score: highscore}
    var highscores = oldStatus ? JSON.parse(oldStatus) : [];
    
    highscores.push(result)
    highscores.sort(function (a, b) 
    {
        return (a.Score - b.Score)
    })

    var hsTable = document.getElementById('highscores')
    window.localStorage.setItem('highscores', JSON.stringify(highscores))
    var retrievedScores = highscores;
    for (var i = 0; i < 5; i++) 
    {
        if(retrievedScores[i] !== undefined)
        {
            numberOfGames += 1;
            hsTable.innerHTML += '<ol><li>' + "Player: " + retrievedScores[i].Player + '</li><li>' + "Highscore: " + retrievedScores[i].Score + '</li></ol>'
        }
    }
    drawWorld();
}