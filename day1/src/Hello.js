import React, {Component} from 'react';
import App from './App';


class Hello extends Component{
  render(){
    return(
      <div>
        <h1>Hello World</h1>
        <p>{this.props.greetings}</p>
        <App/>
      </div>
    );
  }
}

export default Hello;