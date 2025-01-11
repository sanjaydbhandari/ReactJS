import React from "react";
import { useCount } from "./count-context";

const Home = () => {
  const { count, setCount } = useCount();
  console.log(count);
  return (
    <div>
      <h1>Home</h1>
      <p>this is home page</p>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default Home;
