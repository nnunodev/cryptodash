let request = new XMLHttpRequest();

request.open('GET', 'https://api.nomics.com/v1/currencies/ticker?key=dcf96660caa5113bc5b1cdfe3d303540&quote-currency=EUR')

request.onload = function() {
let data = JSON.parse(this.response);
console.log(data[0].name + ' is valued :',parseInt(data[0].price),'€');
}

request.send();