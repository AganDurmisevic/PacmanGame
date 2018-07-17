var map = level[ currentLevel ].map;
var world = document.getElementById( 'world' );

function drawWorld () {
	//create map
	document.getElementById( 'level-show-text' ).innerHTML = ( "LEVEL: " );
	document.getElementById( 'level-show-number' ).innerHTML =( currentLevel + 1 );
	heartsDraw ();
	world.innerHTML = "";

	for( var y = 0; y < map.length; y = y + 1 ) {

		for( var x = 0; x < map[y].length; x = x + 1 ) {
			//Wall
			if ( map[y][x] === WALL ) {

					world.innerHTML += "<div class='wall'></div>";

				}
			// Food
			else if ( map[y][x] === COIN ) {

                    world.innerHTML += "<div class='coin'></div>";

				}
			//Food
			else if ( map[y][x] === COIN_2 ) {

                    world.innerHTML += "<div class='coin2'></div>";

				}
			//Food
			else if ( map[y][x] === COIN_1 ) {

                    world.innerHTML += "<div class='coin1'></div>";

				}
			//Ground
			else if ( map[y][x] === GROUND ) {

                    world.innerHTML += "<div class='ground'></div>";

				}
			//PACMAN
			else if ( map[y][x] === PACMAN ) {

				world.innerHTML += "<div class='pacman-bg'><div class='pacman' id='pacman'><div class='pacman-top'><div class='pacman-eyes'><div class='pacman-eye'></div></div></div><div class='pacman-bottom'></div></div></div>";

                    if(pacman.direction !== "") {
						document.getElementById('pacman').classList.add(pacman.direction);
					}

				}
			//Red Ghost
			else if ( map[y][x] === RED_GHOST ) {

                    world.innerHTML += "<div class='redGhost'></div>";

				}
			//Yellow Ghost
			else if ( map[y][x] === YELLOW_GHOST ) {

                    world.innerHTML += "<div class='yellowGhost'></div>";

				}
			//Green Ghost
			else if ( map[y][x] === GREEN_GHOST ) {

                    world.innerHTML += "<div class='greenGhost'></div>";

				}
			//Pink Ghost
			else if ( map[y][x] === PINK_GHOST ) {

                    world.innerHTML += "<div class='pinkGhost'></div>";

				}
		}
	    //next row
        world.innerHTML += "<br>";
	}
    localStorageHighscore ();
}