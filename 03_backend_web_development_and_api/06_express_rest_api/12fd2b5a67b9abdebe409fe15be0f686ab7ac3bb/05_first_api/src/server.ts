import express, { Request, Response } from "express";
import games from "./games.json";

export const app = express();

app.get("/", (request: Request, response: Response) => {
  response.status(400).json({ error: "Wrong resource" });
});

app.get("/games", (request: Request, response: Response) => {
  response.status(200).json(
    games.map((game) => {
      return {
        name: game.name,
        slug: game.slug,
        cover: game.cover_url,
      };
    }),
  );
});

app.get("/games/:game_slug", (request: Request, response: Response) => {
  response.json(
    games.find((game) => {
      if (request.params.game_slug === game.slug) {
        response.status(200);
        return game;
      } else {
        response.status(404);
      }
    }),
  );
});

app.get("/platform/:platform_slug", (request: Request, response: Response) => {
  response.json(
    games.filter((platform) => {
      if (request.params.platform_slug === platform.platform.slug) {
        response.status(200);
        return platform.platform.slug;
      } else {
        response.status(404);
      }
    }),
  );
});
