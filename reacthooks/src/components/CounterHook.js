import React,{useState} from 'react';

const CounterHook = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);


  const handleClick = () => {
    setCount(count  + 1);
    setIsOn(!isOn);
  }

  return(
    <div>
      <h1>{isOn ? "ON" : "OFF"}</h1>
      <h1>I was clicked {count} times</h1>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  )
}


export default CounterHook;