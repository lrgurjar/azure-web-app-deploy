import React, { memo, useState, useEffect } from "react";

const Todos = (props) => {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });
  const updateColor = () => {
    setCar((previousState) => {
      return { ...previousState, color: "blue" };
    });
  };

  console.log("Child render");
  return props.todos.map((item, index) => {
    return (
      <>
        <h1>My {car.brand}</h1>
        <p>
          It is a {car.color} {car.model} from {car.year}.
        </p>
        <li key={index}>{item}</li>;
        <button type="button" onClick={updateColor}>
          Blue
        </button>
      </>
    );
  });
};

export default Todos;
// export default memo(Todos);

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}
