import { useState } from "react";
const Person1 = ({ money, handleIncrease, name }) => {
  return (
    <div>
      <h2>Jimmy is offering {money}</h2>
      <h3>{name}</h3>
      <button onClick={handleIncrease}>Increase Money</button>
    </div>
  );
};

const Person2 = ({ money, handleIncrease, name }) => {
  return (
    <div>
      <h2>Jhone is offering {money}</h2>
      <h3>{name}</h3>
      <button onClick={handleIncrease}>Increase Money</button>
    </div>
  );
};

function UpdatedComponent(OriginalComponet, inputField) {
  function NewComponent(props) {
    const [money, setMoney] = useState(inputField.num);
    const handleIncrease = () => {
      setMoney(money * 2);
    };
    return (
      <OriginalComponet
        money={money}
        handleIncrease={handleIncrease}
        {...props}
      />
    );
  }
  return NewComponent;
}

const HocPerson1 = UpdatedComponent(Person1, { num: 10 });
const HocPerson2 = UpdatedComponent(Person2, { num: 20 });

const HOC = () => {
  return (
    <>
      <HocPerson1 name="Leela" />
      <HocPerson2 name="Gurjar" />
    </>
  );
};
export default HOC;

function Renderer(Wrapped) {
  return function New(props) {
    return <Wrapped {...props} />;
  };
}

function Child(props) {
  return <h1>Hello {props.name}</h1>;
}

function App1() {
  const C = Renderer(Child);
  return (
    <div className="App">
      <C name="john" />
    </div>
  );
}

//render Pros
const App2 = () => {
  <div className="App">
    <Renderer1>
      {() => {
        return <h1>I am being rendered by render</h1>;
      }}
    </Renderer1>
  </div>;
};

function Renderer1(props) {
  return props.children();
}
