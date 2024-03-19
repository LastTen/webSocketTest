var io = require("socket.io-client");
require("dotenv").config();
console.log(process.env.URLOR);
console.log(process.env.TOKEN);
var socket = io.connect(process.env.URLOR, {
  reconnect: true,
  transportOptions: {
    polling: {
      extraHeaders: {
        authorization: process.env.TOKEN,
      },
    },
  },
});

// Add a connect listener
socket.on("connect", function () {
  console.log("Connected!");
});

console.log("ask");

socket.on("disconnect", function () {
  console.log("Connected!");
});
console.log("stop");
