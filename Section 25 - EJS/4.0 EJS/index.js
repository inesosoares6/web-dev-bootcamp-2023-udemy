import express from "express";

const app = express();
const port = 3000;

function getDayFunction() {
  const day = new Date().toLocaleDateString("en", { weekday: "long" });
  switch (day) {
    case "Saturday":
    case "Sunday":
      return { day: "weekend", userFunction: "have fun" };
    default:
      return { day: "weekday", userFunction: "work hard" };
  }
}

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", getDayFunction());
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
