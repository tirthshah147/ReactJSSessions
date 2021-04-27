import React,{Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from "./SearchBox";


class App extends Component{

  constructor(){
    super();
    this.state = {
      robots : robots,
      searchfield : ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield : event.target.value});
  }

  render(){

    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    return(
      <div className="tc">
        <h1>Robofans</h1>{/*You need to change this message when no robots name matches! */}
        <SearchBox searchChange = {this.onSearchChange}/>
        < CardList robots={filteredRobots}/>
      </div>
    )
  }
  
}


export default App;