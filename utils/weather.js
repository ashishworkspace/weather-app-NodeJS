const axios = require("axios").default;

const weather = (latitude, longitude, callback) => {
  const url =
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=1f73c943cdbde311aea98ba780713b22&units=metric`;
    (async ()=>{
        try{
            const response = await axios.get(url);
            callback(response, undefined);
        }catch(err){
            callback(undefined, err);
        }
    })()
};

module.exports =  weather;