import React from "react";
import zelda from "../../../data/zelda";

const CardBody = () => {
  const [buttonFlag, setButtonFlag] = React.useState(true);

  return (
    <>
      <img src={zelda.cover.url} alt="" />
      <p>{zelda.first_release_date}</p>
      <p>{zelda.summary}</p>
      <p>{zelda.genres.map((genre) => genre.name)}</p>

      <button onClick={() => setButtonFlag(!buttonFlag)}>{buttonFlag ? "Show screenshots" : "Hide screenshots"}</button>
      {buttonFlag ? null : <img src={zelda.screenshots.map((screen) => screen.url)} />}
    </>
  );
};

export default CardBody;
