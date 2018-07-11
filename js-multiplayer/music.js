// howler.js -> macht es einfacher die Musik abzuspielen 
var sound = new Howl({
    src: ['audio/ready.mp3'],
    preload: true,
    volume: 0.5,
    autoplay: false,
    onplay: function() 
    {
        console.log('Play');
    }
}); 

var eat = new Howl({
    src: ['audio/eating.mp3'],
    preload: true,
    volume: 0.9,
    autoplay: false,
    onplay: function() 
    {
        console.log('Eating');
    }
}); 

var eatPill = new Howl({
    src: ['audio/eat-pill.mp3'],
    preload: true,
    volume: 0.9,
    autoplay: false,
    onplay: function() 
    {
        console.log('EatingPill');
    }
}); 

var die = new Howl({
    src: ['audio/die.mp3'],
    preload: true,
    volume: 0.9,
    autoplay: false,
    onplay: function() 
    {
        console.log('Die');
    }
});

var winner = new Howl({
    src: ['audio/siren.mp3'],
    preload: true,
    volume: 0.9,
    autoplay: false,
    onplay: function() 
    {
        console.log('Sieg');
    }
}); 

var ghosts = new Howl({
    src: ['audio/eat-ghost.mp3'],
    preload: true,
    volume: 0.9,
    autoplay: false,
    onplay: function() 
    {
        console.log('Die');
    }
}); 

var paused = new Howl({
    src: ['audio/extra-life.mp3'],
    preload: true,
    volume: 0.9,
    autoplay: false,
    onplay: function() 
    {
        console.log('Die');
    }
}); 

sound.play();
