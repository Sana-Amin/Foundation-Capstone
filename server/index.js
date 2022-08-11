require("dotenv").config();

const path = require("path");
const express = require("express");
const cors = require("cors");

const app = express();
const { PORT } = process.env;

app.use(cors());

app.use(express.json());

const options = {
  index: "login.html",
};
app.use(express.static(path.join(__dirname, "../client"), options));

const { getResturants } = require("./controller");
const { login, signUp } = require("./controller");

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "../client/login.html"))
);

app.get("/home", (req, res) =>
  res.sendFile(path.join(__dirname, "../client/index.html"))
);

app.post("/api/login", login);
app.post("/api/signUp", signUp);

app.get("/api/search", getResturants);

app.listen(PORT, () => console.log(`up on ${PORT}`));
