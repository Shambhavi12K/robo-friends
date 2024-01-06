import React, { Component } from "react";
import Cardlist from '../Components/Cardlist';
// import {robots} from './robots';
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import ErrorBoundary from "../Components/Component-error";

class App extends Component{
    constructor(){
        super()
        this.state={
            robots:[],
            searchfield:''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
            .catch(error => console.log('Error fetching data:', error));
    }


    onSearchChange=(event)=>{
      this.setState({searchfield:event.target.value})
    }

    render()
    {
        const filteredRobots=this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.robots.length===0){
            <h>Loading....</h>
        }
        return (
            <div className="tc">
            <h1>Robo-Friends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
            <ErrorBoundary>
            <Cardlist robots={filteredRobots}/>
            </ErrorBoundary>
            </Scroll>
            </div>
        )
    }

}

export default App;