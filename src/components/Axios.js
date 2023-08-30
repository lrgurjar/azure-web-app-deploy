import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [list, setList] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      axios
        .get("https://api.github.com/users/hacktivist123/repos1")
        .then((res) => {
          console.log(res.data);
          setList(res.data);
        })
        .catch((err) => {
          setError(err.message);
        });
    };
    fetchData();
  }, []);
  if (error) {
    return <div style={{ fontSize: "20px", color: "red" }}>{error}</div>;
  }
  return <>{list && list.map((item) => <div>{item.name}</div>)}</>;
}
