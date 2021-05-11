import React from "react";
import CardHeader from "./header";
import CardBody from "./body";
import CardFooter from "./footer";
import { zelda } from "../../../tests/data/games";

const ProductCard = () => {
  return (
    <>
      <CardHeader name={zelda.name} platformLogos={zelda.platforms.map((platform) => platform.platform_logo.url)} />
      <CardBody
        cover={zelda.cover.url}
        summary={zelda.summary}
        genres={zelda.genres.map((genre) => genre.name)}
        screenshots={zelda.screenshots.map((screenshots) => screenshots.url)}
        firstReleaseDate={zelda.first_release_date}
      />
      <CardFooter slug={zelda.slug} />
    </>
  );
};

export default ProductCard;
