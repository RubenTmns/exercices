import { truncateSync } from "fs";
import { Tree } from "./Tree";

// Code your class here.
class OrangeTree extends Tree {
  oranges: string[] = [];
  height: number;
  alive: boolean = true;

  

  constructor(age: number, oranges: string[] = []) {
    super(age);
    this.oranges = oranges;

    if (this.age <= 9) {
      this.height = this.age * 25;
    } else if (this.age >= 10 && this.age <= 20) {
      const entreDixaVingt = (this.age - 9) * 10;
      this.height = 9 * 25 + entreDixaVingt;
    } else if (this.age >= 20) {
      this.height = 9 * 25 + 11 * 10;
    }
  }

  ageOneYear(): void {
    this.age += 1;

    if (this.age <= 9) {
      this.height += 25;
    } else if (this.age >= 10 && this.age <= 20) {
      this.height += 10;
    }
    
    this.isAlive();
    this.growOranges();
  }

  isAlive(): boolean {
    
    
      
    
    Math.random() > (this.age - 50 + 1) % 50);
    
    
    
  
    
      
  }

  growOranges(): void {
    if (this.age >= 0 && this.age <= 4) {
      this.oranges = [];
    } else if (this.age >= 5 && this.age <= 10) {
      this.oranges = ["🍊", "🍊", "🍊", "🍊", "🍊", "🍊", "🍊", "🍊", "🍊", "🍊"];
    } else if (this.age >= 11 && this.age <= 20) {
      this.oranges = [
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
      ];
    } else if (this.age >= 21 && this.age <= 40) {
      this.oranges = ["🍊", "🍊", "🍊", "🍊", "🍊"];
    } else if (this.age >= 40) {
      this.oranges = [];
    }
  }
  pickAnOrange(): void {
    this.oranges.pop();
  }



}









// Leave the line below for tests to work properly.
export { OrangeTree };
