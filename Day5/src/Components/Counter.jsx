import { useState } from "react";
let X = 0;
const Counter = () => {
    const [ count, setCount ] = useState(0);
  return (
    <div>
      <p>Count {count}</p>
      <p>X {X}</p>
        {console.log("re-render")}
      <button onClick={()=>X+=1}>INC X</button>
      <button onClick={()=>setCount(count+1)}>INC</button>
      <button onClick={()=>setCount(count-1)}>DEC</button>
    </div>
  )
}

export default Counter
