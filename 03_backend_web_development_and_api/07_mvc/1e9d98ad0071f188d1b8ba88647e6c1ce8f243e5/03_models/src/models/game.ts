export type Game = {
  name: string;
  slug: string;
  [key: string]: any;
};

export type Platform = {
  name: string;
  slug: string;
  [key: string]: any;
};

export class GameModel {
  collection: Game[];

  constructor(collection: Game[]) {
    this.collection = collection;
  }

  getAll(): Game[] {
    return this.collection.map((game) => {
      return {
        name: game.name,
        slug: game.slug,
        cover: game.cover_url,
      };
    });
  }

  findBySlug(slug: string): Game | null {
    const gameCollection = this.collection.find((game) => {
      if (slug === game.slug) {
        return game;
      } else {
        return undefined;
      }
    });
    if (gameCollection) {
      return gameCollection;
    } else {
      return null;
    }
  }

  findByPlatform(platform_slug: string): Game[] {
    return this.collection.filter((game) => {
      if (platform_slug === game.platform.slug) {
        return {
          platform: platform_slug,
        };
      } else if (platform_slug !== game.platform.slug) {
        return null;
      }
    });
  }

  getPlatforms(): Platform[] {
    const plato = this.collection.reduce<Platform[]>((platforms, game) => {
      if (platforms.find((platform) => game.platform.slug === platform.slug)) {
        return platforms;
      } else {
        platforms.push(game.platform);
        return platforms;
      }
    }, []);

    return plato.map((platform) => {
      return {
        name: platform.name,
        slug: platform.slug,
      };
    });
  }
}
