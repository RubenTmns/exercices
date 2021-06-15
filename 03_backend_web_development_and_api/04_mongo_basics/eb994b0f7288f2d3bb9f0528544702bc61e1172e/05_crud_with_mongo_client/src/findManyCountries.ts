import * as mongo from "mongodb";

export function findManyCountries(db: mongo.Db): Promise<string[]> {
  // code your function here

  return db
    .collection("worldAtlas")
    .find({ continent: "Europe" })
    .toArray()
    .then((country) => {
      return country;
    });
}
