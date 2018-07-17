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
// 10 = <div class='greenGhost'></div>     Green Ghost
// 11 = <div class='pinkGhost'></div>      Pink Ghost
// 12 = <div class='pacman2'></div>        Pacman2(Green)

    var score = 0;
    var score2 = 0;
    var highscore = 0;
    var highscore2 = 0;
    var life = 3;
    var life2 = 3;
    var currentLevel = 0;
    var numberOfGames = 1;
    var pacman = level[currentLevel].pacman;
    var pacman2 = level[currentLevel].pacman2;
    var redGhost = level[currentLevel].redGhost;
    var yellowGhost = level[currentLevel].yellowGhost;
    var greenGhost = level[currentLevel].greenGhost;
    var pinkGhost = level[currentLevel].pinkGhost;
    var positionBeforeMoveX = "";
    var positionBeforeMoveY = "";
    var positionBeforeMoveXTwo = "";
    var positionBeforeMoveYTwo = "";

    document.addEventListener( 'DOMContentLoaded', function () {
        drawWorld ();
        //setInterval(drawWorld, 100);
    }, false );

