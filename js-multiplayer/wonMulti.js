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

    drawWorld ();
    highscore += score;
    highscore2 += score2;
    

    if ( highscore > highscore2 ) {

        document.getElementById( 'nextLvl' ).innerHTML = "PLAYER 1 VICTORY, PRESS SPACE FOR NEXT LVL!";
        winner.play ();
        drawWorld ();
        return true;

    }

    else if ( highscore === highscore2 ) {

        document.getElementById( 'nextLvl' ).innerHTML = "PLAYER 1 VICTORY, PRESS SPACE FOR NEXT LVL!";
        document.getElementById( 'nextLvl2' ).innerHTML = "PLAYER 2 VICTORY, PRESS SPACE FOR NEXT LVL!";
        winner.play ();
        drawWorld ();
        return true;

    }

    else if ( highscore < highscore2 ){

        document.getElementById( 'nextLvl2' ).innerHTML = "PLAYER 2 VICTORY, PRESS SPACE FOR NEXT LVL!";
        winner.play ();
        drawWorld ();
        return true;

    }

    drawWorld ();
    return true;
}