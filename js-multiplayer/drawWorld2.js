var map = level[currentLevel].map;
var world = document.getElementById( 'world' );

function drawWorld () {

        //create multiplayer map
        document.getElementById( 'level-show-text' ).innerHTML = ( "LEVEL: " );
        document.getElementById( 'level-show-number' ).innerHTML = ( currentLevel+1 );
        heartsDrawMulti ();
		world.innerHTML = "";

		for ( var y = 0; y < map.length; y = y + 1 ) {

            for ( var x = 0; x < map[ y ].length; x = x + 1 ) {

                //Wall
                if ( map[ y ][ x ] === 1 ) {

                    world.innerHTML += "<div class='wall'></div>";

                }

                //Wall
                else if ( map[ y ][ x ] === 7 ) {

                    world.innerHTML += "<div class='wallL'></div>";

                }

                else if ( map[ y ][ x ] === 2 ) {

                    world.innerHTML += "<div class='coin'></div>";

                }

                //Food
                else if ( map[ y ][ x ] === 6 ) {

                    world.innerHTML += "<div class='coin2'></div>";

                }

                //Food
                else if ( map[ y ][ x ] === 4 ) {

                    world.innerHTML += "<div class='coin1'></div>";

                }

                //Ground
                else if ( map[ y ][ x ] === 3 ) {

                    world.innerHTML += "<div class='ground'></div>";

                }

                //PACMAN 
                else if ( map[ y ][ x ] === 5 ) {

                    world.innerHTML += "<div class='pacman-bg'><div class='pacman' id='pacman'><div class='pacman-top'><div class='pacman-eyes'><div class='pacman-eye'></div></div></div><div class='pacman-bottom'></div></div></div>";

                    if( pacman.direction !== "" ) {

                        document.getElementById( 'pacman' ).classList.add( pacman.direction );
                    }

                }

                //PACMAN2 
                else if ( map[ y ][ x ] === 12 ) {

                    world.innerHTML += "<div class='pacman-bg2'><div class='pacman2' id='pacman2'><div class='pacman-top2'><div class='pacman-eyes2'><div class='pacman-eye2'></div></div></div><div class='pacman-bottom2'></div></div></div>";

                    if( pacman2.direction !== "" ) {

                        document.getElementById( 'pacman2' ).classList.add( pacman2.direction );

                    }

                }

                //Red Ghost
                else if ( map[ y ][ x ] === 8 ) {

                    world.innerHTML += "<div class='redGhost'></div>";

                }

                //Yellow Ghost
                else if (map[ y ][ x ] === 9 ) {

                    world.innerHTML += "<div class='yellowGhost'></div>";

                }

                //Green Ghost
                else if ( map[ y ][ x ] === 10 ) {

                    world.innerHTML += "<div class='greenGhost'></div>";

                }

                //Pink Ghost
                else if ( map[ y ][ x ] === 11 ) {

                    world.innerHTML += "<div class='pinkGhost'></div>";

                }

            }

             //next row
             world.innerHTML += "<br>";
        }

	}