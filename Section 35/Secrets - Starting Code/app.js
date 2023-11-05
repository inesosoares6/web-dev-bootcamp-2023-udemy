import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";

const app = express();
const port = process.env.APP_PORT;
const saltRounds = process.env.SALT_ROUNDS;

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  try {
    bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
      await db.query("INSERT INTO users (username, password) VALUES ($1, $2)", [
        req.body.username,
        hash,
      ]);
    });

    res.render("secrets.ejs");
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
  try {
    let result = await db.query(
      "SELECT password FROM users WHERE username=$1",
      [req.body.username]
    );
    const user = result.rows[0];
    bcrypt.compare(req.body.password, user.password, (err, result) => {
      res.render(result ? "secrets.ejs" : "login.ejs");
    });
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
