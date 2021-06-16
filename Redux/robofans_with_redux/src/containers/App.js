import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from "../components/SearchBox";
import {connect} from 'react-redux';
import Scroll from '../components/Scroll';
import Popup from '../components/Popup';
import ErrorBoundary from '../components/ErrorBoundary';
import {requestRobots, setSearchField} from '../actions';
import "./App.css";

const mapStateToProps = state => {
  return {
    searchField : state.searchRobots.searchField,
    robots : state.requestRobots.robots,
    isPending : state.requestRobots.isPending,
    error: state.requestRobots.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange : (event) => dispatch(setSearchField(event.target.value)),
    onRequestsRobots : () => dispatch(requestRobots())
  }
}

class App extends Component{

  async componentDidMount(){
    // console.log(this.props.store.getState());
    // await fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => {
    //   return response.json()
    // })
    // .then(users => {
    //   this.setState({robots : users});
    // })

    this.props.onRequestsRobots();

    console.log("After setting state!");
  }



  render(){
    // const {robots} = this.state;
    console.log(this.props);
    const {searchField, onSearchChange, robots,isPending} = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return isPending ?
        <h1>Loading.......</h1> 
        :
      (
        <React.Fragment>
        <div className="tc">
          <h1>Robofans</h1>{/*You need to change this message when no robots name matches! */}
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