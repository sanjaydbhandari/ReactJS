import React from "react";
import { useCount } from "./count-context";

const About = () => {
  const { count, setCount } = useCount();

  return (
    <div>
      <h1>About</h1>
      <p>Current Count: {count}</p>
      <p>this is About page</p>
    </div>
  );
};

export default About;
