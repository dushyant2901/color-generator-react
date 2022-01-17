import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const hexValue = `#${hexColor}`;
  const rgbc = rgb.join(",");

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [alert]);

  return (
    <article
      style={{ backgroundColor: `rgb(${rgbc})` }}
      className={`color ${index > 20 && "color-light"}`}
      onClick={() => {  navigator.clipboard.writeText(hexValue)
        setAlert(true);
      }}
    >
      {" "}
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">Copied to Clipboard</p>}
    </article>
  );
};

export default SingleColor;
