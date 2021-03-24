class Bird {
  // Write your code here.

  age: number;

  constructor(age: number) {
    this.age = age;
  }

  sing(): void {
    console.log("Cui cui");
  }

  fly(numberSeconds: number): void {
    if (this.age <= 1) {
      console.log("The bird is too young to fly");
    } else if (this.age > 1 && this.age <= 3) {
      console.log(`The bird flew  ${numberSeconds} meters in ${numberSeconds} seconds`);
    } else if (this.age > 3) {
      const ms2 = numberSeconds * 2;
      console.log(`The bird flew ${ms2} meters in ${numberSeconds} seconds`);
    }
  }
}

// const wiwi = new Bird (1);
// wiwi.fly(2);

// Leave the line below for tests to work properly.
export { Bird };
