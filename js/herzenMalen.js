function herzenMalen() {
    document.getElementById('herzen-lvl').innerHTML ="";
    for(var i = 0; i < leben; i++){
        document.getElementById('herzen-lvl').innerHTML += '<i class="fa fa-heart"></i>';
    }
}
