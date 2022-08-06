const path = require('path')
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname,'../client')))

const{getResturants} = require('./controller')

app.get("/", (req,res) => res.sendFile(path.join(__dirname,"../client/index.html")))

app.get("/api/search", getResturants)


app.listen(4000, () => console.log("Server running on 4000"));