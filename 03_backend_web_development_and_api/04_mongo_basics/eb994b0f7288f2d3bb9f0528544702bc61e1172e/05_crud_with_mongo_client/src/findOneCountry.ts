import * as mongo from "mongodb";

export function findOneCountry(db: mongo.Db): Promise<string[]> {
  // code your function here

  return db
    .collection("worldAtlas")
    .findOne({ name: "Iceland" })
    .then((country) => {
      return country;
    });
}
