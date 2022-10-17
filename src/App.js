import React, {Component} from "react"
import {robots} from "./robots"
import "./style.css";
import CardList from "./Docs/CardList";
import SearchBox from "./Docs/SearchBox";
import 'tachyons';
import Scroll from './Docs/Scroll';



class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => this.setState({ robots: users}));
  }

  onSearchCahnge = (event) => {
    this.setState({searchfield: event.target.value})
  }

  render(){
    
    const {robots, searchfield} = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?
      <h1>Loading</h1> :
    (

   
  
    <div className="tc">
     <h1>RobotFriends</h1>
     <SearchBox searchChange={this.onSearchCahnge}/>
     <Scroll>
      <CardList robots={filteredRobots} />
     </Scroll>
     <CardList robots={filteredRobots}/>
    </div>
    

    );
   }
}
export default App;

  