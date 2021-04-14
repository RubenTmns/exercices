export class Cat {
  public name: string;
  public color: string;
  public age: number;

  constructor(name: string, color: string, age: number) {
    this.name = name;
    this.color = color;
    this.age = age;
  }

  purr(): string {
    return `${this.name}, the cat, purrs...`;
  }

  meow(): string {
    return `${this.name}, the ${this.color} cat, meows!`;
  }

  attack(withSuccess: boolean): void {
    if (withSuccess === true) {
      console.log("You've been scratched!");
    } else if (withSuccess === false) {
      console.log(`Wow, ${this.name} missed you, how lucky!`);
    }
  }
}
