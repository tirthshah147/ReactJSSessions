import React from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';


//state is an object that describes the app!

// const state = {
//   robots : robots,
//   searchfield :''
// }

 

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      message : 'RoboFans',
      robots : robots,
      searchfield : ''
    }
  }

  // changeMessage = () => {
  //   this.setState({message : "You subscribed successfully!"});
  // }

  //create mothers function

  onSearchChange = (event) => {
    this.setState({searchfield : event.target.value});
  }

changeMessage = () => {
    this.setState({message : "No record found!"});
  }


  render(){

    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    // if (filteredRobots.length === 0 ) {
    //   this.setState({message : "No record found!"});
    // }

    // Note: The above code will not work. Let me know tomorrow what's the problem with it!
    // Hint : Whenever u update state render() function runs. Think Newtons Think....
    // P.S. : We will solve this problrm tomorrow :) Bt i need reason from you.
    // Yours' Tirth  

    
    return(
      <div className="tc">
        <h1>{this.state.message}</h1>
        {/* <button type="button" onClick={this.changeMessage}>SUBSCRIBE!</button> */}
        < SearchBox searchChange={this.onSearchChange}/>
        < CardList robots={filteredRobots}/>
      </div>
    )
  }
  
}

export default App;