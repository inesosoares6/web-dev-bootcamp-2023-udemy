import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

app.use(express.static("public"));

app.get("/", (req, res) => {
  axios.get(API_URL + "/random").then(function (response) {
    res.render("index.ejs", {
      secret: response.data.secret,
      user: response.data.username,
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
