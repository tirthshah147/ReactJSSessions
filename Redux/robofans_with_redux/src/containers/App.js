import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from "../components/SearchBox";
import {connect} from 'react-redux';
import Scroll from '../components/Scroll';
import Popup from '../components/Popup';
import ErrorBoundary from '../components/ErrorBoundary';
import {setSearchField} from '../actions';
import "./App.css";

const mapStateToProps = state => {
  return {
    searchField : state.searchField,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange : (event) => dispatch(setSearchField(event.target.value)),
  }
  
}

class App extends Component{
  constructor(){
    super();
    this.state = {
      robots : [],
      popup: false
    }
  }

  async componentDidMount(){
    // console.log(this.props.store.getState());
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
    const {robots} = this.state;
    const {searchField, onSearchChange} = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
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
          <ErrorBoundary>
            <SearchBox searchChange = {onSearchChange}/>
          </ErrorBoundary>
          
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots}/>
            </ErrorBoundary>
            
          </Scroll>
        </div>
        </React.Fragment>
      )
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);