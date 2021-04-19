import express from "express";
import * as core from "express-serve-static-core";
import { GameModel } from "./models/game";

export function makeApp(gameModel: GameModel): core.Express {
  const app = express();

  const jsonParser = express.json();
  app.use(jsonParser);

  app.get("/", async (request, response) => {
    return await response.status(400).json({ error: "Wrong resource" });
  });

  app.get("/games", async (request, response) => {
    try {
      const findGames = await gameModel.getAll();
      return await response.json(findGames);
    } catch (error) {
      console.error(error);
    }
  });

  app.post("/games", async (request, response) => {
    try {
      const body = await request.body;
      if (body.name && body.slug) {
        gameModel.create(body);
        await response.status(201).json(body);
      } else {
        await response.status(400).end();
      }
    } catch (error) {
      console.error(error);
    }
  });

  app.get("/games/:game_slug", async (request, response) => {
    const gameBySlug = await gameModel.findBySlug(request.params.game_slug);
    if (!gameBySlug) {
      await response.status(404).end();
    } else {
      await response.json(gameBySlug);
    }
  });

  app.get("/platforms", async (request, response) => {
    const findPlatforms = await gameModel.getPlatforms();
    return await response.json(findPlatforms);
  });

  app.get("/platforms/:platform_slug", async (request, response) => {
    const platformsBySlug = await gameModel.findByPlatform(request.params.platform_slug);
    return await response.json(platformsBySlug);
  });

  return app;
}
