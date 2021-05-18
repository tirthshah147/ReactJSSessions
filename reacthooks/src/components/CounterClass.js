import React from 'react';
import {Link} from 'react-router-dom';

class CounterClass extends React.Component{
  timer;
  constructor(){
    super();
    this.state={
      count  : 0,
      isOn : false
    }
  }

  handleClick = () => {
    this.setState((prevState) => ({
      isOn : !prevState.isOn,
      count : prevState.count + 1
    }))
  }

  // componentDidMount(){
  //   document.title =  this.state.isOn;
  // }


  // componentDidUpdate(){
  //   document.title =  this.state.isOn;
  // }

  componentWillUnmount(){
    alert("Hiii!");
  }


  render(){
    return (
      <div>
        <Link to="/courses">Class Courses</Link>
        <h1>{this.state.isOn ? "ON" : "OFF"}</h1>
        <h1>I was clicked {this.state.count} times!</h1>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    )
  }
}

export default CounterClass;