// Materialize Components initialization 
$(document).ready(function () {
    $('.sidenav').sidenav();
});


// Api request Nomics


//setInterval(function () {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://cors-anywhere.herokuapp.com/https://api.nomics.com/v1/currencies/ticker?key=dcf96660caa5113bc5b1cdfe3d303540&quote-currency=EUR')

    request.onload = function () {
        let data = JSON.parse(this.response);
        //bitcoin

        let BTCPrice = data[0].price;
        let BTCPriceChange = data[0]['1d'].price_change_pct;
        //ETH

        let ETHPrice = data[1].price;
        let ETHPriceChange = data[1]['1d'].price_change_pct;
        //BAT

        let BATPrice = data[62].price;
        let BATPriceChange = data[62]['1d'].price_change_pct;
       

        let wallet = 0.00137754;
        let funds = BTCPrice / 1 * wallet;

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

        //if price goes below 0.0% goes red otherwise green

        if (BTCPriceChange <= 0.00) {
            document.getElementById("BTCPriceChange").style.color = "red";
        } else {
            document.getElementById("BTCPriceChange").style.color = "green";
        }

        if (ETHPriceChange <= 0.00) {
            document.getElementById("ETHPriceChange").style.color = "red";
        } else {
            document.getElementById("ETHPriceChange").style.color = "green";
        }

        if (BATPriceChange <= 0.00) {
            document.getElementById("BATPriceChange").style.color = "red";
        } else {
            document.getElementById("BATPriceChange").style.color = "green";
        }

        //update text in dashboard
        document.getElementById("BTCPrice").innerHTML = Math.round(BTCPrice).toFixed(2) + " €";
        document.getElementById("BTCPriceChange").innerHTML = BTCPriceChange + " %";

        document.getElementById("ETHPrice").innerHTML = Math.round(ETHPrice).toFixed(2) + " €";
        document.getElementById("ETHPriceChange").innerHTML = ETHPriceChange + " %";

        document.getElementById("BATPrice").innerHTML = Math.round(BATPrice).toFixed(2) + " €";
        document.getElementById("BATPriceChange").innerHTML = BATPriceChange + " %";

        //wallet funds
        document.getElementById("wallet").innerHTML = funds.toFixed(2) + " €";

        
    }
    request.send();

//}, 10000);
