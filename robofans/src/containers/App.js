import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll';
import Popup from '../components/Popup';
import "./App.css";


class App extends Component{

  constructor(){
    super();
    this.state = {
      robots : [],
      searchfield : '',
      popup: false
    }

    console.log("Constructor!")
  }

  onSearchChange = (event) => {
    this.setState({searchfield : event.target.value});
  }

  async componentDidMount(){

    console.log("Inside will");
    
    await fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json()
    })
    .then(users => {
      this.setState({robots : users});
    })

    console.log("After setting state!");
  }

  openPopup = () => {
    this.setState({popup:true});
  }

  closePopup = () => {
    this.setState({popup:false});
  }


  render(){
    const {robots,searchfield} = this.state;
    console.log("Render runned");
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    return !filteredRobots.length ?
        <h1>Loading.......</h1> 
        :
      (
        <React.Fragment>
        {this.state.popup ? <Popup closePopup = {this.closePopup}/> : ""}
        <div className="tc">
          
          <h1>Robofans</h1>{/*You need to change this message when no robots name matches! */}
          <button onClick={this.openPopup}>Open Popup</button>
          <SearchBox searchChange = {this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots}/>
          </Scroll>
        </div>
        </React.Fragment>
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