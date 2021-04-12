export function gameMapper(games: GameWithALotOfData[]): Game[] {
  return games.map((response) => {
    return {
      name: response.name,
      slug: response.slug,
      cover: response.cover.url,
    };
  });
}

export type Game = {
  name: string;
  slug: string;
  cover: string;
};

export type GameWithALotOfData = {
  name: string;
  slug: string;
  code: number;
  cover: {
    thumbnail: string;
    url: string;
  };
};
