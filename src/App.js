import React, { Component, Fragment } from 'react';
import * as MovieAPI from './lib/MovieAPI';
import { Route, Switch } from "react-router-dom";
import Home from "./component/home"
import MyList from "./component/myList"
import MyListTable from "./component/myListTable"

class App extends Component {
  
  state={
    searchInput:"",
    data:[],
    genre:[],
  }

  searchInputUpdate = event => {
    if(event.target.value===""){
      MovieAPI.getAll().then(response=>this.setState({data:response}));
    }
    this.setState({searchInput: event.target.value});
    const searchResults=[];
    this.state.data.forEach(element=>{
      if(element.title.toLowerCase().includes(this.state.searchInput)||element.overview.toLowerCase().includes(this.state.searchInput)){
        searchResults.push(element)
      }
    })
    this.setState({data:searchResults})
  }

  componentDidMount=()=>{
    MovieAPI.getAll().then(response=>this.setState({data:response}));
    MovieAPI.genres().then(response=>this.setState({genre:response.sort( (a, b) => a.name.localeCompare(b.name) )}));
  }

  loveIt=(event,parameter)=>{
    const target=event.target.parentElement.parentElement
    if(target.getAttribute("data-toggled")==="false"){
      target.setAttribute("data-toggled","true")
      MovieAPI.addToList(parameter)
    }else{
      target.setAttribute("data-toggled","false")
      MovieAPI.removeFromList(parameter)
    }
    event.preventDefault();
  }

  render = () => {
    return (
      <Fragment>
        <header className="header">
          <a href="/">
            <img
              src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png"
              alt="netflix-font"
              border="0"
            />
          </a>
          <div id="navigation" className="navigation">
            <nav>
              <ul>
                <li key="1">
                  <a href="/myList" >My List</a>
                </li>
                <li key="2">
                  <a href="/myListTable" >My List Table</a>
                </li>
              </ul>
            </nav>
          </div>
          <form id="search" className="search">
            <input onChange={this.searchInputUpdate} type="search" placeholder="Search for a title..." value={this.state.searchInput} />
            <div class="searchResults">
              {this.state.searchInput!=="" ? (
                <p>Found {this.state.data.length} movies with the query "{this.state.searchInput}".</p>
                ): null
              }
            </div>
          </form>
        </header>

        <Switch>
          <Route 
            path='/myListTable' 
            component={MyListTable} 
          />
          <Route 
            path='/myList' 
            component={MyList} 
          />
          <Route 
            path='/' 
            render={
              (props) =><Home 
              genre={this.state.genre}
              data={this.state.data}
              loveIt={this.loveIt}
              sortBy="newest" 
              {...props}
              />
            } 
          />
        </Switch>
      </Fragment>
    );
  };
}

export default App;
