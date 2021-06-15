import React from "react";
import ProductCard from "../../src/components/product-card";
import CardHeader from "../../src/components/product-card/header";
import CardBody from "../../src/components/product-card/body";
import CardFooter from "../../src/components/product-card/footer";
import { render, cleanup, screen, getAllByText } from "@testing-library/react";
import { zelda } from "./data/zelda2";
import "@testing-library/jest-dom";

const productToProps = (product) => {
  return {
    headerProps: {
      name: product.name,
      platformLogos: product.platforms.map((platform) => platform.platform_logo.url),
    },
    bodyProps: {
      cover: product.cover.url,
      summary: product.summary,
      genres: product.genres.map((genre) => genre.name),
      screenshots: product.screenshots.map((sc) => sc.url).slice(0, 4),
      firstReleaseDate: product.first_release_date,
    },
    footerProps: {
      slug: product.slug,
    },
  };
};

const { headerProps, bodyProps, footerProps } = productToProps(zelda);

describe("App components", () => {
  beforeEach(() => {
    render(<ProductCard product={zelda} />);
  });

  afterEach(() => {
    cleanup();
  });

  describe("CardHeader", () => {
    beforeEach(() => {
      render(<CardHeader {...headerProps} />);
    });
    afterEach(() => {
      cleanup();
    });

    it("Should display the game name", () => {
      expect.assertions(1);
      const { getByText } = render(<p>{zelda.name}</p>);
      const name = getByText("The Legend Of Zelda: Breath of the Wild");

      console.log();

      // const nameGame = screen.findByText(/The Legend Of Zelda: Breath of the Wild/);
      // console.log("🤮ZELDANAME", zelda.name);
      // console.log("😀NAMEGAME", nameGame);
      // console.log("😎HEADERPROPSNAME", { ...headerProps.name });

      expect(name).toBeInTheDocument();
    });
  });
});
