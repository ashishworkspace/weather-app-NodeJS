const geocode = require("./utils/geocode");
const weather = require("./utils/weather");
const yargs = require('yargs')

let userInput = "";
yargs.command({
  command: "location",
  description: "provide your current location.",
  builder: {
    name: {
      description: "provide the location name",
      demandOption: true,
      type: "string"
    }
  },
  handler: (argv)=>{
    userInput = argv;
  },
})

yargs.parse();
geocode(userInput.name, ({latitude, longitude, location}, err) => {
  if (err) {
    return console.log("ERROR: ", err);
  }
  // console.log("RESPONSE:", response);
  weather(longitude, latitude, (res, err) => {
    if (err) {
      return console.log("ERROR: ", err);
    }
    console.log("LOCATION: ", location);
    console.log("RESPONSE: ", `${res.data.weather[0].description}. It is currently ${res.data.main.temp} degree out.`);
  });
});
