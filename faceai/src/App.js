import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm  from './components/ImageLinkForm/ImageLinkForm';
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
    apiKey: 'XXXXXXXXXXXXXXXXXXX'
   });





class App extends React.Component {
  constructor(){
    super();
    this.state={
      input : ""
    }
  }

  onSubmit = () => {
    console.log("Tirth!");
    app.models
       .predict(
         'a403429f2ddf4b49b307e318f00e528b','https://portal.clarifai.com/developer/static/images/model-samples/celeb-001.jpg'
       )
       .then(response => {
         console.log(response);
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
        <ImageLinkForm onSubmit = {this.onSubmit}/>
        
        
        {/*
        
        <FaceRecognition /> */}
      </div>
    );
  }
}


export default App;




