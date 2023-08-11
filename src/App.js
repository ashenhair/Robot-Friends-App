import React, {useState, useEffect} from "react";
import "./style.css";
import CardList from "./Docs/CardList";
import SearchBox from "./Docs/SearchBox";
import 'tachyons';
import Scroll from './Docs/Scroll';


function App () {
const [robots, setRobots] = useState([])
const [searchfield, setSearchfield] = useState('')


useEffect(()=> {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => {setRobots(users)});
},[]) 

 const onSearchCahnge = (event) => {
    setSearchfield(event.target.value)
  }
   
 const filteredRobots = robots.filter(robot => {
     return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?
      <h1>Loading</h1> :
  (
   
    <div className="tc">
     <h1>RobotFriends</h1>
     <SearchBox searchChange={onSearchCahnge}/>
     <Scroll>
      <CardList robots={filteredRobots} />
     </Scroll>
     <CardList robots={filteredRobots}/>
    </div>
    
    );
  }   

export default App;

  
  
