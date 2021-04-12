/* global db */

// write your MongoDB shell command here

const newCountries = [
  {
    name: "Algeria",
    capital: "Alger",
    continent: "Africa",
  },
  {
    name: "Portugal",
    capital: "Lisboa",
    continent: "Europe",
  },
  {
    name: "Arménie",
    capital: "Erevan",
    continent: "Asie",
  },
];

db.worldAtlas.insertMany(newCountries);
