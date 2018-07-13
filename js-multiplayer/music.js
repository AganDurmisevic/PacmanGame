// howler.js -> makes it easier to play the music.
var sound = new Howl ({

    src: [ 'audio/ready.mp3' ],
    preload: true,
    volume: 0.5,
    autoplay: false,

    onplay: function () {

        console.log( 'Play' );

    }

});

var eat = new Howl ({

    src: [ 'audio/eating.mp3' ],
    preload: true,
    volume: 0.9,
    autoplay: false,

    onplay: function () {

        console.log('Eating');

    }

}); 

var eatPill = new Howl ({

    src: [ 'audio/eat-pill.mp3' ],
    preload: true,
    volume: 0.9,
    autoplay: false,

    onplay: function () {

        console.log( 'EatingPill' );

    }

}); 

var die = new Howl ({

    src: [ 'audio/die.mp3' ],
    preload: true,
    volume: 0.9,
    autoplay: false,

    onplay: function () {

        console.log( 'Die' );

    }

});

var winner = new Howl ({

    src: [ 'audio/siren.mp3' ],
    preload: true,
    volume: 0.9,
    autoplay: false,

    onplay: function () {

        console.log( 'Winner' );

    }

}); 

var ghosts = new Howl ({

    src: [ 'audio/eat-ghost.mp3' ],
    preload: true,
    volume: 0.9,
    autoplay: false,

    onplay: function () {

        console.log('Ghosts');

    }

}); 

var paused = new Howl ({

    src: [ 'audio/extra-life.mp3' ],
    preload: true,
    volume: 0.9,
    autoplay: false,

    onplay: function () {

        console.log( 'Paused' );

    }

}); 

sound.play();
