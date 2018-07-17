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

function wonMulti () {

    var count = 0;

    for ( var i = 0; i < map.length; i = i + 1 ) {

        for ( var j = 0; j < map[ i ].length; j = j + 1 ) {

            if ( ( map[ i ][ j ] === 2 ) || ( map[ i ][ j ] === 4 ) || ( map[ i ][ j ] === 6 ) ) {

                count += 1;
                return false;

            }

        }

    }

    highscore += score;
    highscore2 += score2;
    drawWorld ();

    if ( highscore > highscore2 && wonMulti () ) {

        document.getElementById( 'nextLvl' ).innerHTML = "PLAYER 1 VICTORY, PRESS SPACE FOR NEXT LVL!";
        winner.play ();
        drawWorld ();
        return true;

    }

    else if ( highscore === highscore2 && wonMulti () ) {

        document.getElementById( 'nextLvl' ).innerHTML = "PLAYER 1 VICTORY, PRESS SPACE FOR NEXT LVL!";
        document.getElementById( 'nextLvl2' ).innerHTML = "PLAYER 2 VICTORY, PRESS SPACE FOR NEXT LVL!";
        winner.play ();
        drawWorld ();
        return true;

    }

    else if ( highscore < highscore2 && wonMulti () ) {

        document.getElementById( 'nextLvl2' ).innerHTML = "PLAYER 2 VICTORY, PRESS SPACE FOR NEXT LVL!";
        winner.play ();
        drawWorld ();
        return true;

    }

    drawWorld ();
    return true;
}