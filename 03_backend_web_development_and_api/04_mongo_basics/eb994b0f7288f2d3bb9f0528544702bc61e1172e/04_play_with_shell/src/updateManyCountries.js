/* global db */

// write your MongoDB shell command here

db.worldAtlas.updateMany({ continent: "Europe" }, { $set: { continent: "EU" } });
