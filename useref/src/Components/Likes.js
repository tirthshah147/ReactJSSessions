import React,{Component} from 'react';
import HOC from './HOC';

class Likes extends Component {
 
  render() { 
    return ( 
      <>
          {this.props.count}
          <button onClick={this.props.handleClick}>Like</button>
      </>
     );
  }
}

const EnhancedLikes = HOC(Likes);
 
export default EnhancedLikes;