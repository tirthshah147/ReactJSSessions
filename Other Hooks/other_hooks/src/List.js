import {useState, useEffect} from "react";


export default function List({getNumbers}){
  const [numbers,setNumbers] = useState([]);

  useEffect(() => {
    setNumbers(getNumbers());
    console.log("inside lists useEffect");
  }, [getNumbers])

  return numbers.map(number => <div key={number}>{number}</div>)
}