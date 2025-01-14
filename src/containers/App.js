import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots} from '../redux/actions';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

const mapStateToProps = (state) => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error
})

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots())//returns a function
})

class App extends Component {

componentDidMount() {
  this.props.onRequestRobots();
}

render() {
  const {searchField, onSearchChange, robots, isPending } =this.props;
  
const filteredRobots = robots.filter(robot =>{
  return robot.name.toLowerCase().includes(searchField.toLowerCase());
 })
  return isPending ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
              <CardList robots={filteredRobots} />  
          </Scroll>
        </div>
      );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);