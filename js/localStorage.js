var result = { Player: numberOfGames, Score: highscore };
var oldStatus = window.localStorage.getItem ( 'highscores' );
var highscores = oldStatus ? JSON.parse ( oldStatus )  : [];
var hsTable = document.getElementById ( 'highscores' );

function localStorageHighscore () {
    highscores.push ( result );
    window.localStorage.setItem ( 'highscores', JSON.stringify ( highscores ) );

    var retrievedScores = highscores;

    longerThanFive();
    for (var i = 0; i < 4; i++ ) {
        numberOfGames += 1;
        if ( retrievedScores[ i ] !== undefined) {
            hsTable.innerHTML += '<ol><li>' + "Player: " + retrievedScores[ i ].Player + '</li><li>' + "Highscore: " + retrievedScores[ i ].Score + '</li></ol>';
        }
    }
}

function longerThanFive()
{
    for(var j = highscores.length; j > 5; j --)
    {
        highscores.pop();
    }
}

