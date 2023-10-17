import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { log } from "console";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let response = "";

app.use(bodyParser.urlencoded({ extended: true }));

function responseGenerator(req, res, next) {
  console.log(req.body);
  response = req.body["street"] + req.body["pet"];
  next();
}

app.use(responseGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send(`<h1>Your submitted results:</h1><p>${response}</p>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
