const express = require("express");
const app = express();

const connect = require("./config/db");

const wordController = require("./controllers/word.controller");

app.use(express.json());

app.use("/word", wordController);

const start = async (PORT) => {
  await connect();
  app.listen(PORT, () => {
    console.log("Current Server is Runing On PORT", PORT);
  });
};

module.exports = start;
