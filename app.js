var weather = require('./weather');

var query = process.argv.slice(2).join("_").replace(' ', '_');

weather.get(query);
