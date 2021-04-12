import * as mongo from "mongodb";

export function updateOneCountry(db: mongo.Db): Promise<string[]> {
  return db
    .collection("worldAtlas")
    .updateOne({ name: "Australia" }, { $set: { capital: "Canberra" } })
    .then((result) => {
      return result;
    });
}
