import React, {
  useState,
  useContext,
  useRef,
  useReducer,
  useMemo,
} from "react";
import Todos from "./ToDo";
import { data } from "../App";
import { useEffect } from "react";
import { useCallback } from "react";
import ToDo1 from "./ToDo1";

function Hello(props) {
  const user = useContext(data);
  const cars = ["Ford", "BMW", "Audi"];
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <Todos todos={todos} />
      {/* <data.Consumer>
        {(name) => {
          return <h1>{name}</h1>;
        }}
      </data.Consumer> */}
      <h1>{user}</h1>
      <ul>
        {cars.map((car) => (
          <li key={car}>{car}</li>
        ))}
      </ul>
      count:{count}
      <br />
      <button onClick={increment}>+</button>
      <RefUse />
      <Counter />
      <ShowUseMemo />
      <UseCallback />
    </>
  );
}

export default Hello;

function RefUse() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  const inputElement = useRef();
  const previousInputValue = useRef("");

  useEffect(() => {
    count.current = count.current + 1;
    previousInputValue.current = inputValue;
  }, [inputValue]);

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br />
      <h1>Render Count: {count.current}</h1>
      <br />
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}

const intialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    default:
      return {
        intialState,
      };
  }
};

function Counter() {
  const [ccount, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      {ccount}
      <button onClick={() => dispatch("Increment")}>Increment</button>
      <button onClick={() => dispatch("Decrement")}>Decrement</button>
    </div>
  );
}

function ShowUseMemo() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);
  const multiply = useMemo(
    function multiply() {
      console.log("add function called");
      return add * 10;
    },
    [add]
  );
  return (
    <>
      <button onClick={() => setAdd((add) => add + 1)}>Addition</button>
      <span>{add}</span>
      <button onClick={() => setMinus((minus) => minus - 1)}>
        Substraction
      </button>
      {minus}
      <h1> {multiply}</h1>
    </>
  );
}

function UseCallback() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <ToDo1 todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}
