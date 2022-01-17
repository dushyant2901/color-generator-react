import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";
function App() {
  const [color, setColor] = useState("");
  const [list, setList] = useState(new Values("#f15025").all(5));
  const [isError, setIsError] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    try {
      const colors = new Values(color).all(5);

      setList(colors);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  };
  return (
    <>
      <section className="container">
        <h3>color generator project</h3>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={color}
            placeholder="#f15025"
            onChange={(e) => {
              setColor(e.target.value);
            }}
            className={`${isError ? "error" : null}`}
          />
          <button type="submit" className="btn">
            Generate
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
