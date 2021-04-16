import express from "express";
import * as core from "express-serve-static-core";
import { GameModel } from "./models/game";

export function makeApp(gameModel: GameModel): core.Express {
  const app = express();

  const jsonParser = express.json();
  app.use(jsonParser);

  app.get("/", (request, response) => {
    response.status(400).json({ error: "Wrong resource" });
  });

  app.get("/games", (request, response) => {
    gameModel.getAll().then((games) => {
      response.json(games);
    });
  });

  app.post("/games", (request, response) => {
    const body = request.body;
    if (body.name && body.slug) {
      gameModel.create(body).then(() => {
        response.status(201).json(body);
      });
    } else {
      response.status(400).end();
    }
  });

  app.get("/games/:game_slug", (request, response) => {
    gameModel.findBySlug(request.params.game_slug).then((game) => {
      if (!game) {
        response.status(404).end();
      } else {
        response.json(game);
      }
    });
  });

  app.get("/platforms", (request, response) => {
    gameModel.getPlatforms().then((platforms) => {
      response.json(platforms);
    });
  });

  app.get("/platforms/:platform_slug", (request, response) => {
    gameModel.findByPlatform(request.params.platform_slug).then((gamesForPlatform) => {
      response.json(gamesForPlatform);
    });
  });

  return app;
}
