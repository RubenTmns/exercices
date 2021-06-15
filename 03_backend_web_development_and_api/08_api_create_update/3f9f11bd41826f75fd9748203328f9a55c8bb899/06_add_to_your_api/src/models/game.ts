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

  private fullGameToGame(game: Game) {
    return {
      name: game.name,
      slug: game.slug,
      cover: game.cover_url,
    };
  }

  async getAll(): Promise<Game[]> {
    const findGames = await this.collection.find({}).toArray();
    return await findGames.map(this.fullGameToGame);
  }

  async findBySlug(slug: string): Promise<Game | null> {
    return await this.collection.findOne({
      slug: slug,
    });
  }

  async findByPlatform(platform_slug: string): Promise<Game[]> {
    const findBySlug = await this.collection.find({ "platform.slug": platform_slug }).toArray();
    return await findBySlug.map(this.fullGameToGame);
  }

  async getPlatforms(): Promise<Platform[]> {
    const findPlatforms = await this.collection.find({}).toArray();
    const platforms: Platform[] = [];
    await findPlatforms.forEach((game) => {
      const platform = platforms.find((platform) => platform.slug === game.platform.slug);
      if (!platform) {
        platforms.push(game.platform);
      }
    });
    return await platforms.map((platform) => {
      return {
        name: platform.name,
        slug: platform.slug,
      };
    });
  }

  async create(games: Game): Promise<unknown> {
    return await this.collection.insertOne(games);
  }
}
