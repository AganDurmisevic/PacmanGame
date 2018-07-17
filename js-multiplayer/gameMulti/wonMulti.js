function wonMulti () {

    var count = 0;

    for ( var i = 0; i < map.length; i = i + 1 ) {

        for ( var j = 0; j < map[ i ].length; j = j + 1 ) {

            if ( ( map[ i ][ j ] === COIN ) || ( map[ i ][ j ] === COIN_1 ) || ( map[ i ][ j ] === COIN_2 ) ) {

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
        return true;

    }

    else if ( highscore === highscore2 && wonMulti () ) {

        document.getElementById( 'nextLvl' ).innerHTML = "PLAYER 1 VICTORY, PRESS SPACE FOR NEXT LVL!";
        document.getElementById( 'nextLvl2' ).innerHTML = "PLAYER 2 VICTORY, PRESS SPACE FOR NEXT LVL!";
        winner.play ();
        return true;

    }

    else if ( highscore < highscore2 && wonMulti () ) {

        document.getElementById( 'nextLvl2' ).innerHTML = "PLAYER 2 VICTORY, PRESS SPACE FOR NEXT LVL!";
        winner.play ();
        return true;

    }

    drawWorld ();
    return true;
}