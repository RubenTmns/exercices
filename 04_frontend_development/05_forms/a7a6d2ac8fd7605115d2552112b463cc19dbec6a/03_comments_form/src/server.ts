import express from "express";
import * as core from "express-serve-static-core";
import { GameModel } from "./models/game";
import nunjucks from "nunjucks";
import * as dotenv from "dotenv";

dotenv.config();

const clientWantsJson = (request: express.Request): boolean => request.get("accept") === "application/json";

export function makeApp(gameModel: GameModel): core.Express {
  const app = express();

  nunjucks.configure("src/views", {
    autoescape: true,
    express: app,
  });

  const formParser = express.urlencoded({ extended: true });

  app.set("view engine", "njk");

  app.get("/", (request, response) => {
    if (clientWantsJson(request)) {
      response.status(400).json({ error: "Wrong resource" });
    } else {
      response.render("home");
    }
  });

  app.get("/games", (request, response) => {
    gameModel.getAll().then((games) => {
      if (clientWantsJson(request)) {
        response.json(games);
      } else {
        response.render("games", { games });
      }
    });
  });

  app.get("/games/:game_slug", (request, response) => {
    gameModel.findBySlug(request.params.game_slug).then((game) => {
      if (!game) {
        response.status(404).end();
      } else {
        if (clientWantsJson(request)) {
          response.json(game);
        } else {
          response.render("game", { game });
          console.log(game);
        }
      }
    });
  });

  app.post("/games/:game_slug", formParser, (request, response) => {
    console.log(request.body);
    gameModel
      .addComment(request.params.game_slug, { name: request.body.name, comment: request.body.comment })
      .then((game) => {
        if (game) {
          response.render("game", {
            game,
          });
        }
      });
  });

  

  return app;
}
