import express, { request } from "express";
import * as core from "express-serve-static-core";
import { GameModel } from "./models/game";
import * as nunjucks from "nunjucks";

const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

const clientWantsJson = (request: express.Request): boolean => request.get("accept") === "application/json";

export function makeApp(gameModel: GameModel): core.Express {
  app.set("view engine", "njk");

  app.use("/assets", express.static("public"));

  app.get("/", (request, response) => {
    response.render("home");
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
      } else if (clientWantsJson(request)) {
        response.json(game);
      } else {
        response.render("gameslug", { game });
      }
    });
  });

  app.get("/platforms", (request, response) => {
    gameModel.getPlatforms().then((platforms) => {
      if (clientWantsJson(request)) {
        response.json(platforms);
      } else {
        response.render("platform", { platforms });
      }
    });
  });

  app.get("/platforms/:platform_slug", (request, response) => {
    gameModel.findByPlatform(request.params.platform_slug).then((gamesForPlatform) => {
      if (clientWantsJson(request)) {
        response.json(gamesForPlatform);
      } else {
        response.render("platformslug", { gamesForPlatform });
      }
    });
  });

  app.get("/contact", (request, response) => {
    response.render("contact");
  });

  app.get("/login", (request, response) => {
    response.render("login");
  });

  app.get("/sign", (request, response) => {
    response.render("signup");
  });

  app.get("/other", (request, response) => {
    response.render("otherworks");
  });

  return app;
}
