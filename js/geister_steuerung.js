// Map beschreibung
// 1 = <div class='wall'></div>            Mauer
// 2 = <div class='coin'></div>            Essen     
// 3 = <div class='ground'></div>          Grund
// 4 = <div class='coin1'></div>           Essen
// 5 = <div class='pacman'></div>          Pacman(Gelb)
// 6 = <div class='coin2'></div>           Essen
// 7 = <div class='wallL'></div>           Mauer
// 8 = <div class='redGhost'></div>        Roter Geist
// 9 = <div class='yellowGhost'></div>     Gelber Geist

//Geister Steuerung
function moveGhost(event) 
{
//Roter,Gelber, Pinker und Grünergeist nach Links wenn Pacman nach rechts geht.
if(event.keyCode === 37)
{ 
    if (map[redGhost.y][redGhost.x+1] === 3 || map[yellowGhost.y][yellowGhost.x+1] === 3 || map[greenGhost.y][greenGhost.x+1] === 3 || map[pinkGhost.y][pinkGhost.x+1] === 3)
    {
      moveRight(redGhost);
      moveRight(yellowGhost);
      moveRight(greenGhost);
      moveRight(pinkGhost);
      drawWorld();
    }
    else if(map[redGhost.y][redGhost.x+1] === 2 || map[redGhost.y][redGhost.x+1] === 6 || map[yellowGhost.y][yellowGhost.x+1] === 2 || map[yellowGhost.y][yellowGhost.x+1] === 6 || map[greenGhost.y][greenGhost.x+1] === 2 || map[greenGhost.y][greenGhost.x+1] === 6 || map[pinkGhost.y][pinkGhost.x+1] === 2 || map[pinkGhost.y][pinkGhost.x+1] === 6)
    {
      moveRightCoin(redGhost);
      moveRightCoin(yellowGhost);
      moveRightCoin(greenGhost);
      moveRightCoin(pinkGhost);
      drawWorld();
    }
}
    
//Roter,Gelber, Pinker und Grünergeist nach Oben wenn Pacman nach Oben geht.
else if(event.keyCode === 38)
{
    if (map[redGhost.y-1][redGhost.x] === 3 || map[yellowGhost.y-1][yellowGhost.x] === 3 || map[greenGhost.y-1][greenGhost.x] === 3 || map[pinkGhost.y-1][pinkGhost.x] === 3)
    {
      moveUp(redGhost);
      moveUp(yellowGhost);
      moveUp(greenGhost);
      moveUp(pinkGhost);
      drawWorld();
    }
    else if(map[redGhost.y-1][redGhost.x] === 2 || map[redGhost.y-1][redGhost.x] === 6 || map[yellowGhost.y-1][yellowGhost.x] === 2 || map[yellowGhost.y-1][yellowGhost.x] === 6 || map[greenGhost.y-1][greenGhost.x] === 2 || map[greenGhost.y-1][greenGhost.x] === 6 || map[pinkGhost.y-1][pinkGhost.x] === 2 || map[pinkGhost.y-1][pinkGhost.x] === 6)
    {
       moveUpCoin(redGhost);
       moveUpCoin(yellowGhost);
       moveUpCoin(greenGhost);
       moveUpCoin(pinkGhost);
       drawWorld(); 
    }
}
    
//Roter,Gelber, Pinker und Grünergeist nach Rechts wenn Pacman nach Links geht.  
else if(event.keyCode === 39)
{ 
    if (map[redGhost.y][redGhost.x-1] === 3 || map[yellowGhost.y][yellowGhost.x-1] === 3 || map[greenGhost.y][greenGhost.x-1] === 3 || map[pinkGhost.y][pinkGhost.x-1] === 3)
    {
        moveLeft(redGhost);
        moveLeft(yellowGhost);
        moveLeft(greenGhost);
        moveLeft(pinkGhost);
        drawWorld();
    }
    else if(map[redGhost.y][redGhost.x-1] === 2 || map[redGhost.y][redGhost.x-1] === 6 || map[yellowGhost.y][yellowGhost.x-1] === 2 || map[yellowGhost.y][yellowGhost.x-1] === 6 || map[greenGhost.y][greenGhost.x-1] === 2 || map[greenGhost.y][greenGhost.x-1] === 6 || map[pinkGhost.y][pinkGhost.x-1] === 2 || map[pinkGhost.y][pinkGhost.x-1] === 6)
    {
        moveLeftCoin(redGhost);
        moveLeftCoin(yellowGhost);
        moveLeftCoin(greenGhost);
        moveLeftCoin(pinkGhost);
        drawWorld();
    }
}
    
//Roter,Gelber, Pinker und Grünergeist nach Unten wenn Pacman nach Unten geht.
else if(event.keyCode === 34)
{ 
    if (map[redGhost.y+1][redGhost.x] == 3 || map[yellowGhost.y+1][yellowGhost.x] == 3 || map[greenGhost.y+1][greenGhost.x] == 3 || map[pinkGhost.y+1][pinkGhost.x] == 3)
    {
      moveDown(redGhost);
      moveDown(yellowGhost);
      moveUp(greenGhost);
      moveUp(pinkGhost);
      drawWorld();
    }
    else if(map[redGhost.y+1][redGhost.x] == 2 || map[redGhost.y+1][redGhost.x] == 6 || map[yellowGhost.y+1][yellowGhost.x] == 2 || map[yellowGhost.y+1][yellowGhost.x] == 6 || map[greenGhost.y+1][greenGhost.x] == 2 || map[greenGhost.y+1][greenGhost.x] == 6 || map[pinkGhost.y+1][pinkGhost.x] == 2 || map[pinkGhost.y+1][pinkGhost.x] == 6)
    {
        moveDownCoin(redGhost);
        moveDownCoin(yellowGhost);
        moveDownCoin(greenGhost);
        moveDownCoin(pinkGhost);
        drawWorld();
    }
}
    drawWorld();
}