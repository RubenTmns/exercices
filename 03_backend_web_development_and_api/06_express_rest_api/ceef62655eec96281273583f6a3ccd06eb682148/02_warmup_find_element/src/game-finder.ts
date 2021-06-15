export function findGameFromSlug(games: Game[], slug: string): Game {
  return games.find((game) => game.slug === `${slug}`);
}

export type Game = {
  name: string;
  slug: string;
  cover: string;
  platform: string;
};
