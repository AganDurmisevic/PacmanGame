function heartsDraw()
{
    document.getElementById('hearts-lvl').innerHTML ="";
    for(var i = 0; i < life; i++)
    {
        document.getElementById('hearts-lvl').innerHTML += '<i class="fa fa-heart"></i>';
    }
}
