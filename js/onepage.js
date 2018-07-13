$( document ).ready( function () {

  var onepage = $( ".onepage" );
  var root = $( 'html, body' );

  for ( index = 0; index < onepage.length-2; index++ ) {

    var id = onepage[ index ].id;

    $( "#"+id ).append( "<a href='#"+onepage[ index ]+"' class='more'></a>" );

  }

  $( 'a' ).click( function () {
    if ( $.attr( this, 'href' ).indexOf( "#" ) != -1&&$.attr( this, 'href' ) != "#") {

      console.log( $.attr( this,'href' ));
      root.animate( {

      scrollTop: $( $.attr( this, 'href' ) ).offset ().top

      }, 700);

      return false;

    }

  });

});