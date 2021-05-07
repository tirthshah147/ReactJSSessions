// import React,{useState} from 'react';

// const App = () => {
//   const [greetings,setGreetings] = useState("hello world!");
//   const [count,setCount] = useState(0);
//   const onClicking = (newGreeting) => {
//     setGreetings(newGreeting);
//     setCount(count + 1);
//   }
//   return (
//     <div>
//       <h1>{greetings}</h1>
//       <button onClick={() => onClicking("Hello Rekha")}>CLICK ME</button>
//     </div>
//   );
// }

// export default App;

import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm  from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition  from './components/FaceRecognition/FaceRecognition';
import Rank  from './components/Rank/Rank';
import tachyons from 'tachyons';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import React from 'react';


const particlesEffect = {
  particles: {
    number :{
      value: 10,
      density: {
        enable : true,
        value_area : 100
      }
    }
    }
  }

  const app = new Clarifai.App({
    apiKey: 'e4fd3b8db88443adb5f58e6cd3234e4a'
   });

   



class App extends React.Component {
  constructor(){
    super();
    this.state={
      input : "",
      imageUrl : "",
      box:{}
    }
  }

  onInputChange = (event) => {
    this.setState({input : event.target.value});
  }

  calculateFaceLocation = (data) => {
    
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    console.log("face", clarifaiFace);
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width,height);
    let mainData = {
      leftCol : clarifaiFace.left_col * width,
      topRow  : clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow : height - (clarifaiFace.bottom_row * height)
    }
    console.log(mainData);
    return mainData
  }

  displayFaceBox = (box) => {
    this.setState({box:box})
  }

  onSubmit = () => {
    this.setState({imageUrl : this.state.input});
    console.log("Tirth!");
    app.models
       .predict(
         'a403429f2ddf4b49b307e318f00e528b',this.state.input
       )
       .then(response => {
        
        this.displayFaceBox(this.calculateFaceLocation(response));
       })
       .catch(err => console.log(err));
  }


  render (){
    return (
      <div className="App">
        <Particles params={particlesEffect} className="particles"/>
        <Navigation/>
        <Logo />
        <Rank/>
        <ImageLinkForm onSubmit ={this.onSubmit} onInputChange={this.onInputChange}/>
        <FaceRecognition imageUrl={this.state.imageUrl} box={this.state.box}/>
      </div>
    );
  }
}


export default App;




