import React,{useState,useEffect} from 'react';

const CounterHook = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    console.log("Inside handle click!");
    
    setIsOn(!isOn);
  }

  useEffect(()=>{
    
    document.title = isOn;
    if(count===0 && !isOn) return;
    setCount(count  + 1);
  },[isOn])

  useEffect(()=>{
    console.log("Hello Tirth!");
  },[])

  return(
    <div>
      {/* {console.log("Inside Render")} */}
      <h1>{isOn ? "ON" : "OFF"}</h1>
      <h1>I was clicked {count} times</h1>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  )
}


export default CounterHook;