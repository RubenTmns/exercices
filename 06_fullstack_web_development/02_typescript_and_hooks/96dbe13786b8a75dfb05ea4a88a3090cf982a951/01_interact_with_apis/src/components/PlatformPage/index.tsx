import React from "react";

import { Platform, Game } from "../../types/Platform";

const PlatformPage: React.FC = () => {
  const [platforms, setPlatforms] = React.useState<Platform[]>([]);
  const [games, setGames] = React.useState<Game[]>([]);

  React.useEffect(() => {
    fetch("https://videogames-sparta.herokuapp.com/platforms", {
      headers: { accept: "application/json" },
    }).then(async (response) => {
      setPlatforms(await response.json());
    });
  }, []);
  console.log(platforms);

  React.useEffect(() => {
    fetch("https://videogames-sparta.herokuapp.com/games/", {
      headers: { accept: "application/json" },
    }).then(async (response) => {
      setGames(await response.json());
    });
  }, []);
  console.log(games);

  return (
    <div>
      <div>
        <select
          onChange={(event): void => {
            console.log(event.target.value);
          }}
        >
          {platforms.map((platform) => (
            <option value={platform.name} key={platform.name}>
              {platform.name}
            </option>
          ))}
        </select>
        {games.map((game) => {
          return (
            <li key={game.name} className="list-group-item">
              {game.name}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default PlatformPage;
