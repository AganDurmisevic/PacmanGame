//Universal Geistersteuerung
function moveLeft(steuerung)
{
    if(map[steuerung.y][steuerung.x-1] !== 1) 
    {
        map[steuerung.y][steuerung.x] = 3;
        steuerung.x -= 1;    
        map[steuerung.y][steuerung.x] = steuerung.id; 
    }
}
function moveUp(steuerung)
{
    if(map[steuerung.y-1][steuerung.x] !== 1) 
    {
        map[steuerung.y][steuerung.x] = 3;
        steuerung.y -= 1;
        map[steuerung.y][steuerung.x] = steuerung.id;  
    }
}
function moveRight(steuerung)
{
    if(map[steuerung.y][steuerung.x+1] !== 1) 
    {
        map[steuerung.y][steuerung.x] = 3;
        steuerung.x += 1;
        map[steuerung.y][steuerung.x] = steuerung.id;
    }
}
function moveDown(steuerung)
{
    if(map[steuerung.y+1][steuerung.x] !== 1) 
    {
        map[steuerung.y][steuerung.x] = 3;
        steuerung.y += 1;
        map[steuerung.y][steuerung.x] = steuerung.id;  
    }
}

//Geist(er)steuerung die darauf achtet nichts zu Essen.
function moveLeftCoin(steuerung)
{
    if(map[steuerung.y][steuerung.x-1] !== 1) 
    {
        if(steuerung.feldHinterDenGeist == 5)
        {
            steuerung.feldHinterDenGeist = 3;
        }
        else if(map[steuerung.y][steuerung.x-1] == 2)
        {
            map[steuerung.y][steuerung.x] = steuerung.feldHinterDenGeist;
            steuerung.x -= 1;    
            map[steuerung.y][steuerung.x] = steuerung.id;
            steuerung.feldHinterDenGeist = 2;
        }
        else if(map[steuerung.y][steuerung.x-1] == 6)
        {
            map[steuerung.y][steuerung.x] = steuerung.feldHinterDenGeist;
            steuerung.x -= 1;    
            map[steuerung.y][steuerung.x] = steuerung.id;
            steuerung.feldHinterDenGeist = 6;
        }
    }
}
function moveUpCoin(steuerung)
{
    if(map[steuerung.y+1][steuerung.x] !== 1) 
    {
        if(steuerung.feldHinterDenGeist == 5)
        {
            steuerung.feldHinterDenGeist = 3;
        }
        else if(map[steuerung.y+1][steuerung.x] == 2)
        {
            map[steuerung.y][steuerung.x] = steuerung.feldHinterDenGeist;
            steuerung.y += 1;
            map[steuerung.y][steuerung.x] = steuerung.id;
            steuerung.feldHinterDenGeist = 2;
        }   
        else if(map[steuerung.y+1][steuerung.x] == 6)
        {
            map[steuerung.y][steuerung.x] = steuerung.feldHinterDenGeist;
            steuerung.y += 1;
            map[steuerung.y][steuerung.x] = steuerung.id;
            steuerung.feldHinterDenGeist = 6;
        }
    }   
}
function moveRightCoin(steuerung)
{
    if(map[steuerung.y][steuerung.x+1] !== 1) 
    {
        if(steuerung.feldHinterDenGeist == 5)
        {
            steuerung.feldHinterDenGeist = 3;
        }
        else if(map[steuerung.y][steuerung.x+1] === 2)
        {
            map[steuerung.y][steuerung.x] = steuerung.feldHinterDenGeist;
            steuerung.x += 1;
            map[steuerung.y][steuerung.x] = steuerung.id; 
            steuerung.feldHinterDenGeist = 2;
        }
        else if(map[redGhost.y][redGhost.x+1] === 6 || map[yellowGhost.y][yellowGhost.x+1] === 6)
        {
            map[steuerung.y][steuerung.x] = steuerung.feldHinterDenGeist;
            steuerung.x += 1;
            map[steuerung.y][steuerung.x] = steuerung.id; 
            steuerung.feldHinterDenGeist = 6;
        }
    }
}
function moveDownCoin(steuerung)
{
    if(map[steuerung.y-1][steuerung.x] !== 1) 
    {
        if(steuerung.feldHinterDenGeist == 5)
        {
            steuerung.feldHinterDenGeist = 3;
        }
        else if(map[steuerung.y-1][steuerung.x] == 2)
        {
            map[steuerung.y][steuerung.x] = steuerung.feldHinterDenGeist;
            steuerung.y -= 1;
            map[steuerung.y][steuerung.x] = steuerung.id;  
            steuerung.feldHinterDenGeist = 2;
        }
        else if(map[steuerung.y-1][steuerung.x] == 6)
        {
            map[steuerung.y][steuerung.x] = steuerung.feldHinterDenGeist;
            steuerung.y -= 1;
            map[steuerung.y][steuerung.x] = steuerung.id;
            steuerung.feldHinterDenGeist = 6;
        }
    }
}