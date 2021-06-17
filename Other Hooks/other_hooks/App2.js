import {useState, useEffect, useMemo} from "react";
import './App.css';

function App() {
  // console.log("Before Return.");
  const [num,setNum] = useState(0);
  const [likes,setLikes] = useState(0);

  let obj = useMemo(() => {
    return {name : "Tirth", likes : likes}
  },[likes])
  

  useEffect(() => {
    console.log("Inside use effect");
  }, [obj])


  

  return (
    <div className="App">
      {num} <br/>
      <button onClick={() => setNum(num + 1)}>Increase</button><br/>
      {likes} <br/>
      <button onClick={() => setLikes(likes + 1)}>Like</button>
    </div>
  );
}

export default App;
