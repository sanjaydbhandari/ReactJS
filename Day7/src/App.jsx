import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [countX, setCountX] = useState(0);
  const [countY, setCountY] = useState(0);

  useEffect(() => {
    console.log("re-render");
  }, [countX]);

  return (
    <>
      <p>countX {countX}</p>
      <p>countY {countY}</p>
      <button onClick={() => setCountX(count + 1)}>Count X</button>
      <button onClick={() => setCountY(count + 1)}>Count Y</button>
    </>
  );
}

export default App;
