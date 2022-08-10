require("dotenv").config();

const axios = require("axios");

let users = require("./users.json");
let id = 2;

const bcryptjs = require("bcryptjs");

module.exports = {
  getResturants: (req, res) => {
    const { zip_code: zipCode, categories, price } = req.query;
    let businessArray = [];
    axios
      .get(
        `https://api.yelp.com/v3/businesses/search?location=${zipCode}&categories=${categories}&price=${price}`,
        { headers: { Authorization: "Bearer " + process.env.YELP_TOKEN } }
      )
      .then((response) => {
        for (let i = 0; i < response.data.businesses.length; i++) {
          let business = response.data.businesses[i];
          businessArray.push(business);
        }
        console.log(businessArray);

        res.status(200).send(businessArray);
      })
      .catch((error) => console.log(error));
    console.log(businessArray);
  },
  login: (req, res) => {
    const { username, password } = req.body;
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        const authenticated = bcryptjs.compareSync(password, users[i].password);

        if (authenticated === true) {
          let returned = { ...users[i] };
          delete returned.password;
          return res.status(200).send(returned);
        }
      }
    }
    res.status(401).send("invalid login");
  },
  signUp: (req, res) => {
    const { name, username, password } = req.body;
    if (!username || !name || !password) {
      res.status(400).send("Uh oh, something was invalid!");
    } else {
      const salt = bcryptjs.genSaltSync(5);
      const hashed = bcryptjs.hashSync(password, salt);
      console.log(hashed);

      let newUser = {
        id,
        username,
        name,
        password: hashed,
      };
      users.push(newUser);
      id++;
      res.status(200).send("User successfully created!");
    }
    console.log(users);
  },
};
