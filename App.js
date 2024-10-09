import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const onClickHandler = () => {
    setCount(count + 1);
    console.log(count);
  };
  // return (
  // <div className="App">
  //   <button onClick={onClickHandler}>Counter {count}</button>
  // </div>
  return <Button onClickHandler={onClickHandler} count={count} />;
  // );
}

function Button(props) {
  return (
    <div>
      <button onClick={props.onClickHandler}>Counter {props.count}</button>
    </div>
  );
}

export default App;
