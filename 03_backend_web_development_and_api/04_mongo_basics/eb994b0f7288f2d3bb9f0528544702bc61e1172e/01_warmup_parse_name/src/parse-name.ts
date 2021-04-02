type Person = {
  firstName: string;
  lastName: string;
};

export function parseName(name: string): Person {
  const array: string[] = name.split(" ");

  return {
    firstName: array[0],
    lastName: array[1],
  };
}
