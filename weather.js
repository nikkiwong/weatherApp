var http = require('http');
var api = require('./api.json');

//print out temperature details
function printWeather(weather) {
  var temp = (weather.list.main.temp -32)*(5/9);
  var message = "Current temperature in " + weather.city.name + " is " + temp;
  console.log(message);
}


function get(query){
    var request = http.get('http://api.openweathermap.org/data/2.5/weather?q=' + query + '&APPID=' + api.key, function(response){
      var body = "";
      //read data
      response.on('data', function(chunk){
        body += chunk;
      });
      response.on('end', function(){
        //parse the data
        var weather = JSON.parse(body);
        //print weather data
        printWeather(weather);

      });
    });
}

module.exports.get = get;
