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

    var score = 0;
    var score2 = 0;
    var highscore = 0;
    var highscore2 = 0;
    var leben = 3;
    var leben2 = 3;
    var currentLevel = 0;
    var anzahlDerSpieler = 1;
    var pacman = level[currentLevel].pacman;
    var pacman2 = level[currentLevel].pacman2;
    var redGhost = level[currentLevel].redGhost;
    var yellowGhost = level[currentLevel].yellowGhost;
    var greenGhost = level[currentLevel].greenGhost;
    var pinkGhost = level[currentLevel].pinkGhost;


    var feldHinterDenGeist = 3;

    /*var min = 1;
    var max = 6;
    var zufallszahl = Math.round(Math.random() * (max - min)) + min;
    var zufallszahl1 = Math.round(Math.random() * (max - min)) + min;
    var zufallszahl2 = Math.round(Math.random() * (max - min)) + min;*/

    document.addEventListener('DOMContentLoaded', function() {
        drawWorld();
        //setInterval(drawWorld, 500);
    }, false);

