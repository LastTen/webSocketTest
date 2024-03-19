const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;
//https://stackoverflow.com/questions/9411793/how-to-use-express-post-request-to-emit-socket-io-or-sockjs
// add .env

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// app.get('/getLoginToken', async (req, res) => {
//  const result= await getLoginToken()
//   res.send(result.data)
// })
app.get("/wsconect", async (req, res) => {
  const result = await wsconect();
  res.send(result.data);
});

async function wsconect() {
  try {
    var socket = require("socket.io")("URL.");
    socket.on("connect", function () {
      socket.on("event", function (data) {
        console.log("hhh");
      });
      socket.on("disconnect", function () {});
    });
  } catch (e) {
    console.log(e);
  }
}
