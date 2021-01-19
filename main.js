// Materialize Components initialization 
$(document).ready(function () {
    $('.sidenav').sidenav();
});

// Api request Nomics

let request = new XMLHttpRequest();

request.open('GET', 'https://api.nomics.com/v1/currencies/ticker?key=dcf96660caa5113bc5b1cdfe3d303540&quote-currency=EUR')

request.onload = function () {
    let data = JSON.parse(this.response);
    let BitCoinName = data[0].name;
    let BitCoinPrice = data[0].price;
    let BitCoinVolume = data[0, 1].volume;




    console.log(BitCoinName + ' is valued :', parseInt(BitCoinPrice), '€', parseInt(BitCoinVolume));
}

request.send();
