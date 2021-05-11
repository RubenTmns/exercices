import React from "react";
import zelda from "../../../data/zelda";

const CardHeader = () => {
  return (
    <>
      <p>{zelda.name}</p>

      <img src={zelda.platforms[0].platform_logo.url} alt="" />
    </>
  );
};

export default CardHeader;
