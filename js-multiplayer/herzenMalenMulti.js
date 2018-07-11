/*
    Die Function malt die Herzen. 
    Verliert ein Spieler ein Leben, wird auch ein Herz abgezogen bis Leben === 0 ist.
*/
function herzenMalenMulti() 
{
    document.getElementById('herzen-lvl').innerHTML ="";
    for(var i = 0; i < leben; i++)
    {
        document.getElementById('herzen-lvl').innerHTML += '<i class="fa fa-heart"></i>';
    }
    document.getElementById('herzen-lvl2').innerHTML ="";
    for(var i = 0; i < leben2; i++)
    {
        document.getElementById('herzen-lvl2').innerHTML += '<i class="fa fa-heart"></i>';
    }
}