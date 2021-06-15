type MyObject = {
  objectType: string;
  quantity: number;
  description: string;
  storedIn: string;
};

export function findMyMaps(objects: MyObject[]): MyObject[] {
  return objects.filter((response) => {
    return response.objectType.includes("map");
  });
}
