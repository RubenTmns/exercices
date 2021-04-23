type ParamRest = string[];

export function greetEveryone(...rest: ParamRest): void {
  for (let i = 0; i < rest.length; i++) {
    console.log(`Welcome to ${rest[i]}`);
  }
}
