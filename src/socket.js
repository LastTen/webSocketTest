require("dotenv").config();
const io = require("socket.io-client");
console.log("11111");

const socket = io("Url", {
  transportOptions: {
    polling: {
      extraHeaders: {
        authorization: "token",
      },
    },
  },
});
console.log("2222");
socket.on("connect", () => {
  console.log("connected!");
});

socket.on("connect", () => {
  socket.emit("Clan/Info", clanData);
});

socket.on("message", (data) => {
  console.log(data);
});
