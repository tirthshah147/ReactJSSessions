import React,{Component} from 'react';
import CardList from './CardList';
import SearchBox from "./SearchBox";
import "./App.css";


class App extends Component{

  robotsName = [];

  constructor(){
    super();
    this.state = {
      robots : [],
      searchfield : ''
    }

    console.log("Constructor!")
  }

  onSearchChange = (event) => {
    this.setState({searchfield : event.target.value});
  }

  componentDidMount(){
    
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json()
    })
    .then(users => {
      
      this.setState({robots : users});
      
    })

    console.log("After setting state!");
  }

  // Don't worry if you have not understood this fetching & showing of message (the order). 

  // Tomorrow will understand async await and there it will be more clear to you!

  // Today what we did at the end of the session is something that not many can understand. But we will surely will! (What we did was the messy part of JS 😭)

  //Let's meet tomorrow to understand it in a better way!

  // Till tomorrow try to understand lifecycle! That's it.


  render(){

    console.log("Render runned");


    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    return(
      <div className="tc">
        <h1>Robofans</h1>{/*You need to change this message when no robots name matches! */}
        <SearchBox searchChange = {this.onSearchChange}/>
        <h1>{this.robotsName}</h1>
        < CardList robots={filteredRobots}/>
      </div>
    )
  }
  
}


export default App;