import { Collection } from "mongodb";

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
  private collection: Collection;

  constructor(collection: Collection) {
    this.collection = collection;
  }

  async getAll(): Promise<Game[]> {
    const find = await this.collection.find({}).toArray();
    return await find.map((game) => {
      return {
        name: game.name,
        slug: game.slug,
        cover: game.cover_url,
      };
    });

    // return this.collection
    //   .find()
    //   .toArray()
    //   .then((games) => {
    //     return games.map((game) => {
    //       return {
    //         name: game.name,
    //         slug: game.slug,
    //         cover: game.cover_url,
    //       };
    //     });
    //   });
  }

  findBySlug(slug: string): Promise<Game | null> {
    return this.collection
      .find()
      .toArray()
      .then((games) => {
        return games.find((game) => {
          if (slug === game.slug) {
            return games;
          } else {
            return undefined;
          }
        });
      });
  }

  findByPlatform(platform_slug: string): Promise<Game[]> {
    return this.collection
      .find()
      .toArray()
      .then((games) => {
        return games.filter((platform) => {
          if (platform_slug === platform.platform.slug) {
            return {
              platform: platform_slug,
            };
          } else if (platform_slug !== platform.platform.slug) {
            return null;
          }
        });
      });
  }

  getPlatforms(): Promise<Platform[]> {
    return this.collection
      .find()
      .toArray()
      .then((games) => {
        return games.reduce<Platform[]>((platforms, game) => {
          if (platforms.find((platform) => game.platform.slug === platform.slug)) {
            return platforms;
          } else {
            platforms.push(game.platform);
            return platforms;
          }
        }, []);
      })
      .then((platforms) => {
        return platforms.map((platform) => {
          return {
            name: platform.name,
            slug: platform.slug,
          };
        });
      });
  }
}
