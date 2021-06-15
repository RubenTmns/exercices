/* global db */

// write your MongoDB shell command here

const newCountry = {
  name: "France",
  capital: "Paris",
  continent: "Europe",
};

db.worldAtlas.insertOne(newCountry);
