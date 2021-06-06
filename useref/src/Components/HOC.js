import React,{Component} from 'react';

const HOC = (OriginalComponent,data) => {
  return class extends Component {
    state = { 
      count : 0
     }
  
     handleClick = () => {
       this.setState({count : this.state.count+1});
     }
    render() { 
      return ( 
        <>
          Hrishabh <OriginalComponent count={this.state.count} handleClick={this.handleClick}/>
        </>
       );
    }
  }
   

}

export default HOC;