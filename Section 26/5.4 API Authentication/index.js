import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

const yourUsername = "";
const yourPassword = "";
const yourAPIKey = "51c1f880-5958-4761-b108-01145190751e";
const yourBearerToken = "";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  axios
    .get(API_URL + "/random")
    .then(function (response) {
      const content = response.data;
      res.render("index.ejs", { content: JSON.stringify(content) });
    })
    .catch(function (error) {
      res.status(404).send(error.message);
    });
});

app.get("/basicAuth", (req, res) => {
  axios
    .get(API_URL + "/all?page=2", {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    })
    .then(function (result) {
      res.render("index.ejs", { content: JSON.stringify(result.data) });
    })
    .catch(function (error) {
      res.status(404).send(error.message);
    });
});

app.get("/apiKey", (req, res) => {
  axios
    .get(API_URL + "/filter", {
      params: {
        score: 5,
        apiKey: yourAPIKey,
      },
    })
    .then(function (result) {
      res.render("index.ejs", { content: JSON.stringify(result.data) });
    })
    .catch(function (error) {
      res.status(404).send(error.message);
    });
});

app.get("/bearerToken", (req, res) => {
  axios
    .get(API_URL + "/secrets/2", {
      headers: {
        Authorization: `Bearer ${yourBearerToken}`,
      },
    })
    .then(function (result) {
      res.render("index.ejs", { content: JSON.stringify(result.data) });
    })
    .catch(function (error) {
      res.status(404).send(error.message);
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
