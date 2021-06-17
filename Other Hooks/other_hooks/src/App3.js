import {useState, useCallback} from "react";
import './App.css';
import List from './List';

function App() {
  // console.log("Before Return.");
  const [num,setNum] = useState(1);
  const [dark,setDark] = useState(false);


  const getNumbers = useCallback(() => {
    return [num, num+1, num+2];
  },[num])
  
  const theme = {
    backgroundColor : dark ? '#222' : '#FFF',
    color : dark ? '#fff' : '#222'
  }
  

  return (
    <div style={theme}>
        <input 
        type="number"
        value={num}
        onChange={e => setNum(parseInt(e.target.value))}
         />
         <button onClick={() => setDark(prevDark => !prevDark)}>Toggle My Theme</button>
        <List getNumbers = {getNumbers}/>

    </div>
  );
}

export default App;
