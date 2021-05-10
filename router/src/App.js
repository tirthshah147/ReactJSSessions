import React from "react";
import "./App.css";
import ItemList from "./components/ItemsList/ItemList";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Navbar from "./components/Navbar/Navbar";
import Jobs from "./components/Jobs/Jobs";
import {Route, Redirect, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
          <Route path='/home' exact component={ItemList}/>
          <Route path='/about' exact component={About}/>
          <Route path='/jobs' exact component={Jobs}/>
          <Route path='/blog' exact component={Blog}/>
          <Route path='/courses' exact component={ItemList}/>
          {/* <Route path='/error' exact component={Error}/> */}
          <Redirect from='/' exact to='/home' />
          <Redirect to='/error'/>
      </Switch>
      
      
      
      
    </div>
  );
}

export default App;
