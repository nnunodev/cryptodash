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
    let BitCoinVolume = data[0]['1d'].volume;
    let timer;

    // graph 
    /* let ctx = document.getElementById('myChart').getContext('2d');
 
    let chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [BitCoinPrice, 10, 5, 2, 20, 30, 45]
            }]
        },
    
        // Configuration options go here
        options: {}
    }); */
    
    document.getElementById("btcPrice").innerHTML = Math.round(BitCoinPrice).toFixed(2) + " €";

    //console.log(BitCoinName + ' is valued :', parseInt(BitCoinPrice).toFixed(2), '€', parseInt(BitCoinVolume));

}
request.send();

