    //The function paints the hearts.
    //If a player loses a life, a heart is also deducted until life === 0.
function heartsDrawMulti () {

    document.getElementById( 'hearts-lvl' ).innerHTML = "";

    for ( var i = 0; i < life; i++ ) {

        document.getElementById( 'hearts-lvl' ).innerHTML += '<i class="fa fa-heart"></i>';

    }
    document.getElementById( 'hearts-lvl2' ).innerHTML = "";

    for ( var i = 0; i < life2; i++ ) {

        document.getElementById( 'hearts-lvl2' ).innerHTML += '<i class="fa fa-heart"></i>';
    }

}