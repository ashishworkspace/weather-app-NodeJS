const request = require('request');

const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=25.253391&lon=86.989059&appid=1f73c943cdbde311aea98ba780713b22";

request({url: url},(error, response) => {
    console.log(response.body)
} )