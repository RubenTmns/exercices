import React from "react";

export const HideOrNotHide = () => {
  const [buttonFlag, setButtonFlag] = React.useState(true);

  return (
    <>
      {buttonFlag ? <p>Hello World</p> : null}

      <button onClick={() => setButtonFlag(!buttonFlag)}>{buttonFlag ? "Hide Content" : "Reveal Content"}</button>
    </>
  );
};
