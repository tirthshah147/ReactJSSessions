import React,{Component} from 'react';
import CardList from './CardList';
import SearchBox from "./SearchBox";
import Scroll from './Scroll';
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

  async componentDidMount(){

    console.log("Inside will");
    
    await fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json()
    })
    .then(users => {
      this.setState({robots : users});
    })

    console.log("After setting state!");
  }


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
        <Scroll>
          <CardList robots={filteredRobots}/>
        </Scroll>
        
      </div>
    )
  }
  
}

// class App extends Component{
//   constructor(){
//     super();
//     this.state = {
//       name:"Tirth"
//     }
//     console.log("Inside Constructor!");
//   }
  
//   componentWillMount(){
//     console.log("Inside component will mount!");
//     setTimeout(() => {
//       await this.setState({name : "Arafat will"});
//       console.log("Inside setTimeout");
//     },3000)
//     console.log("I WILL 2");
//   }

//   componentDidMount(){
//     console.log("Inside component did mount!");
//     setTimeout(() => {
//       this.setState({name : "Rekha did"});
//     },1000)
//   }

//   render(){
//     console.log("Inside Render!");
//     return (
//       <h1>Hello world this is {this.state.name}</h1>
//     )
//   }
// }


export default App;