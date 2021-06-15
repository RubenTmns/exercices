type Draw = [number, number, number, number, number, number];

export function lottery_draw(): Draw {
  const lotteryArray: Draw = [
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
  ];

  return lotteryArray;
}
