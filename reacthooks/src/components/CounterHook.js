import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

const CounterHook = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    console.log("Inside handle click!");
    setIsOn(!isOn);
  }



  useEffect(()=>{
    console.log(isOn);
    document.title = isOn;
    if(count===0 && !isOn) return;
    setCount(count  + 1);
    // return () => console.log(isOn);
  },[isOn])

  useEffect(() => {
    const timer = setInterval(()=>{
      console.log("isOn",isOn)
    },1000)
    return () => {
      clearInterval(timer);
    }
  }, [])

  // useEffect(()=>{
  //   console.log(count);
  //   return () => console.log(count);
  // },[count])


  // useEffect(()=>{
  //   console.log("Hello Tirth!");
  //   return () => alert("Hi Tirth!");
  // },[])

  // useEffect(()=>{
  //   console.log("Effect Start");
  //   return () => console.log("CleanUp");
  // })

  



  return(
    <div>
      {/* {console.log("Inside Render")} */}
      <Link to="/courses">Hook Courses</Link>
      <h1>{isOn ? "ON" : "OFF"}</h1>
      <h1>I was clicked {count} times</h1>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  )
}


export default CounterHook;