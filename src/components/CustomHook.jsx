import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

function AxiosTutorial() {
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response.data);
    });
  });
  return (
    <h1>
      Bind Data
      <Home />
    </h1>
  );
}

export default AxiosTutorial;

let arr = [1, 20, 30, 40];

let arrlength = arr.length;
let highest = -Infinity;
let seconhigh = -Infinity;
for (let i = 0; i < arrlength; i++) {
  if (arr[i] > highest) {
    seconhigh = highest;
    highest = arr[i];
  }
}

console.log(highest, seconhigh);

var pets = ["dog", "chicken", "cat", "dog", "chicken", "chicken", "rabbit"];

var petCounts = pets.reduce(function (obj, pet) {
  if (!obj[pet]) {
    obj[pet] = 1;
  } else {
    obj[pet]++;
  }
  return obj;
}, {});
console.log(petCounts);

var a = ["1", "1", "2", "2", "3"];
const uniqueArray = a.filter(function (item, pos, self) {
  return self.indexOf(item) == pos;
});

console.log(uniqueArray);

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

const Home = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};
