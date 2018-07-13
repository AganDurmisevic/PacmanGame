// Map
// 1 = <div class='wall'></div>            Wall
// 2 = <div class='coin'></div>            Food
// 3 = <div class='ground'></div>          Ground
// 4 = <div class='coin1'></div>           Food
// 5 = <div class='pacman'></div>          Pacman(Yellow)
// 6 = <div class='coin2'></div>           Food
// 7 = <div class='wallL'></div>           Wall
// 8 = <div class='redGhost'></div>        Red Ghost
// 9 = <div class='yellowGhost'></div>     Yellow Ghost

//Ghosts Movement
function moveGhost ( event ) {

//Red,Yellow, Pink and green Ghost left.
if( event.keyCode === 37 ) {

    if ( map[ redGhost.y ][ redGhost.x+1 ] === 3 || map[ yellowGhost.y ][ yellowGhost.x+1 ] === 3 || map[ greenGhost.y ][ greenGhost.x+1 ] === 3 || map[ pinkGhost.y ][ pinkGhost.x+1 ] === 3 ) {

      moveRight ( redGhost );
      moveRight ( yellowGhost );
      moveRight ( greenGhost );
      moveRight ( pinkGhost );
      drawWorld ();

    }

    else if( map[ redGhost.y ][ redGhost.x+1 ] === 2 || map[ redGhost.y ][ redGhost.x+1 ] === 6 || map[ yellowGhost.y ][ yellowGhost.x+1 ] === 2 || map[ yellowGhost.y ][ yellowGhost.x+1 ] === 6 || map[ greenGhost.y ][ greenGhost.x+1 ] === 2 || map[ greenGhost.y ][ greenGhost.x+1 ] === 6 || map[ pinkGhost.y ][ pinkGhost.x+1 ] === 2 || map[ pinkGhost.y ][ pinkGhost.x+1 ] === 6 ) {

      moveRightCoin ( redGhost );
      moveRightCoin ( yellowGhost );
      moveRightCoin ( greenGhost );
      moveRightCoin ( pinkGhost );
      drawWorld ();

    }

}
    
//Red, yellow, pink and green Ghost up.
else if ( event.keyCode === 38 ) {

    if ( map[ redGhost.y-1 ][ redGhost.x ] === 3 || map[ yellowGhost.y-1 ][ yellowGhost.x ] === 3 || map[ greenGhost.y-1 ][ greenGhost.x ] === 3 || map[ pinkGhost.y-1 ][ pinkGhost.x ] === 3) {

      moveUp ( redGhost );
      moveUp ( yellowGhost );
      moveUp ( greenGhost );
      moveUp ( pinkGhost );
      drawWorld ();

    }

    else if ( map[ redGhost.y-1 ][ redGhost.x ] === 2 || map[ redGhost.y-1 ][ redGhost.x ] === 6 || map[ yellowGhost.y-1 ][ yellowGhost.x ] === 2 || map[ yellowGhost.y-1 ][ yellowGhost.x ] === 6 || map[ greenGhost.y-1 ][ greenGhost.x ] === 2 || map[ greenGhost.y-1 ][ greenGhost.x ] === 6 || map[ pinkGhost.y-1 ][ pinkGhost.x ] === 2 || map[ pinkGhost.y-1 ][ pinkGhost.x ] === 6) {

       moveUpCoin ( redGhost );
       moveUpCoin ( yellowGhost );
       moveUpCoin ( greenGhost );
       moveUpCoin ( pinkGhost );
       drawWorld ();

    }

}
    
//Red,Yellow, Pink and green Ghost right.
else if ( event.keyCode === 39 ) {

    if ( map[ redGhost.y ][ redGhost.x-1 ] === 3 || map[ yellowGhost.y ][ yellowGhost.x-1 ] === 3 || map[ greenGhost.y ][greenGhost.x-1 ] === 3 || map[ pinkGhost.y ][ pinkGhost.x-1 ] === 3) {

        moveLeft ( redGhost );
        moveLeft ( yellowGhost );
        moveLeft ( greenGhost );
        moveLeft ( pinkGhost );
        drawWorld ();

    }

    else if ( map[ redGhost.y ][ redGhost.x-1 ] === 2 || map[ redGhost.y ][ redGhost.x-1 ] === 6 || map[ yellowGhost.y ][ yellowGhost.x-1 ] === 2 || map[ yellowGhost.y ][ yellowGhost.x-1 ] === 6 || map[ greenGhost.y ][ greenGhost.x-1 ] === 2 || map[ greenGhost.y ][ greenGhost.x-1 ] === 6 || map[ pinkGhost.y ][ pinkGhost.x-1 ] === 2 || map[ pinkGhost.y ][ pinkGhost.x-1 ] === 6) {

        moveLeftCoin ( redGhost );
        moveLeftCoin ( yellowGhost );
        moveLeftCoin ( greenGhost );
        moveLeftCoin ( pinkGhost );
        drawWorld ();

    }

}
    
//Red,Yellow, Pink and green Ghost down.
else if ( event.keyCode === 34 ) {

    if ( map[ redGhost.y+1 ][ redGhost.x ] === 3 || map[ yellowGhost.y+1 ][ yellowGhost.x ] === 3 || map[ greenGhost.y+1 ][ greenGhost.x ] === 3 || map[ pinkGhost.y+1 ][ pinkGhost.x ] === 3) {

      moveDown ( redGhost );
      moveDown ( yellowGhost );
      moveUp ( greenGhost );
      moveUp ( pinkGhost );
      drawWorld ();

    }

    else if( map[ redGhost.y+1 ][ redGhost.x ] === 2 || map[ redGhost.y+1 ][ redGhost.x ] === 6 || map[ yellowGhost.y+1 ][ yellowGhost.x ] === 2 || map[ yellowGhost.y+1 ][ yellowGhost.x ] === 6 || map[ greenGhost.y+1 ][ greenGhost.x ] === 2 || map[ greenGhost.y+1 ][ greenGhost.x ] === 6 || map[ pinkGhost.y+1 ][ pinkGhost.x ] === 2 || map[ pinkGhost.y+1 ][ pinkGhost.x ] === 6) {

        moveDownCoin ( redGhost );
        moveDownCoin ( yellowGhost );
        moveDownCoin ( greenGhost );
        moveDownCoin ( pinkGhost );
        drawWorld ();

    }

}

    drawWorld ();

}