import React,{Component} from 'react';
import HOC from './HOC';

class Hates extends Component {

  render() { 
    return ( 
      <>
          {this.props.count}
          <button onClick={this.props.handleClick}>Hates</button>
      </>
     );
  }
}

const EnhancedHate = HOC(Hates);
 
export default EnhancedHate;