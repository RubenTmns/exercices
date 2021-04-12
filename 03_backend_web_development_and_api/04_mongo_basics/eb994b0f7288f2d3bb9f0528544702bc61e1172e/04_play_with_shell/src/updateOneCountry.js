/* global db */

// write your MongoDB shell command here

db.worldAtlas.updateOne({ name: "Australia" }, { $set: { capital: "Canberra" } });
