var map = level[currentLevel].map;
function drawWorld() 
	{
        //create multiplayer map
        document.getElementById('level-show-text').innerHTML = ("LEVEL: ");
        document.getElementById('level-show-number').innerHTML =(currentLevel+1);
        heartsDrawMulti();
		document.getElementById('world').innerHTML = "";
		for(var y = 0; y < map.length; y = y + 1)
        {
            for(var x = 0; x < map[y].length; x = x + 1) 
            {
                //Wall
                if (map[y][x] === 1) 
                {
                    document.getElementById('world').innerHTML += "<div class='wall'></div>";
                }
                //Wall
                else if (map[y][x] === 7) 
                {

                    document.getElementById('world').innerHTML += "<div class='wallL'></div>";
                }
                else if (map[y][x] === 2) 
                {
                    document.getElementById('world').innerHTML += "<div class='coin'></div>";
                }
                //Food
                else if (map[y][x] === 6) 
                {
                    document.getElementById('world').innerHTML += "<div class='coin2'></div>";
                }
                //Food
                else if (map[y][x] === 4) 
                {
                    document.getElementById('world').innerHTML += "<div class='coin1'></div>";
                }
                //Ground
                else if (map[y][x] === 3) 
                {
                    document.getElementById('world').innerHTML += "<div class='ground'></div>";
                }
                //PACMAN 
                else if (map[y][x] === 5) 
                {
                    document.getElementById('world').innerHTML += "<div class='pacman-bg'><div class='pacman' id='pacman'><div class='pacman-top'><div class='pacman-eyes'><div class='pacman-eye'></div></div></div><div class='pacman-bottom'></div></div></div>";
                    if(pacman.direction !== "") 
                    {
                        document.getElementById('pacman').classList.add(pacman.direction);
                    }
                }
                //PACMAN2 
                else if (map[y][x] === 12) 
                {
                    document.getElementById('world').innerHTML += "<div class='pacman-bg2'><div class='pacman2' id='pacman2'><div class='pacman-top2'><div class='pacman-eyes2'><div class='pacman-eye2'></div></div></div><div class='pacman-bottom2'></div></div></div>";
                    if(pacman2.direction !== "") 
                    {
                        document.getElementById('pacman2').classList.add(pacman2.direction);
                    }
                }
                //Red Ghost
                else if (map[y][x] === 8) 
                {
                    document.getElementById('world').innerHTML += "<div class='redGhost'></div>";
                }
                //Yellow Ghost
                else if (map[y][x] === 9) 
                {
                    document.getElementById('world').innerHTML += "<div class='yellowGhost'></div>";
                }
                //Green Ghost
                else if (map[y][x] == 10)
                {
                    document.getElementById('world').innerHTML += "<div class='greenGhost'></div>";
                }
                //Pink Ghost
                else (map[y][x] == 11)
                {
                    document.getElementById('world').innerHTML += "<div class='pinkGhost'></div>";
                }
            }
             //next row
             document.getElementById('world').innerHTML += "<br>";
        }
	}