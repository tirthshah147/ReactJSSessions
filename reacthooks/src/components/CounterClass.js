import React from 'react';

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


  render(){
    return (
      <div>
        <h1>{this.state.isOn ? "ON" : "OFF"}</h1>
        <h1>I was clicked {this.state.count} times!</h1>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    )
  }
}

export default CounterClass;