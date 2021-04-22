import { lottery_draw } from "./lottery_draw";

type Draw = number[];

export function contextFunction(ticket: Draw): void {
  const randomArray = lottery_draw();

  //const randomArray = [1, 2, 3, 4, 5, 6];
  const equalArray = (ticket) =>
    ticket.every((number) => {
      if (number === randomArray) {
        console.log("You won");
      } else {
        console.log("You lost");
      }
    });

  console.log(equalArray);
  console.log(randomArray);

  console.log(ticket);
}
