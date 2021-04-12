import * as mongo from "mongodb";

export function insertOneCountry(db: mongo.Db): Promise<string[]> {
  // code your function here
  const pays = {
    name: "Arménie",
    capital: "Erevean",
    continent: "Asie",
  };

  return db
    .collection("worldAtlas")
    .insertOne(pays)
    .then((response) => {
      return response;
    });
}
