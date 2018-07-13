function heartsDraw () {

    document.getElementById('hearts-lvl').innerHTML = "";

    for(var index = 0; index < life; index++) {

        document.getElementById('hearts-lvl').innerHTML += '<i class="fa fa-heart"></i>';

    }

}
