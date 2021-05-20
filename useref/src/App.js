import React,{useState,useRef} from 'react';

function App() {
  
  // const [text,setText] = useState("Tirth");

  // const nameInput = document.getElementById("name");
  // nameInput.value = "Tirth!"

  //Whener ref changes it doesn't re-renders
  const [show, setShow] = useState(false);
  const name = useRef("");
  const div_text = useRef("");

  const submitForm = (e) => {
    e.preventDefault();
    const mainName = name.current.value;
    mainName === "" ? alert("Pls fill this form") : setShow(true);
  }

  


  // const textChange = (event) => {
  //     console.log(event.target.value);
  //     setText(event.target.value);
  // }

  return (
    <div className="App" ref={div_text}>
      <form action="" onSubmit={submitForm}>
          <input type="text" ref={name}/>
          <button type="submit">Submit</button>
      </form>
      <h1>{show ? `My name is ${name.current.value}` : ""}</h1>
    </div>
  );
}

export default App;
