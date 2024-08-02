
import {React,useState} from "react";
function App() {
  const [count,setCount]=useState(0)
   const handleAdd=()=>{
    setCount(prev=>prev+1)
   }
   const handleDecrease=()=>{
    setCount(prev=>prev-1)
   }
  return (
    <>
    <h1>Counter App</h1>
    <p>Count: {count}</p>
    <button onClick={handleAdd}>Increment</button>
    <button onClick={handleDecrease}>Decrement</button>
    </>
  );
}

export default App;
