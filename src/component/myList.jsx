import React, { Component,Fragment } from 'react';
import * as MovieAPI from '../lib/MovieAPI';

class MyList extends Component {
  state = {
    movies:[]
  }

  deleteIt=(event,parameter)=>{
    MovieAPI.removeFromList(parameter)
    event.preventDefault();
  }

  render() { 
    MovieAPI.getAll().then(response=>this.setState({movies:response}));
    const results=this.state.movies.filter((element)=>element.my_list===true);
    return (
      <Fragment>
        <div className="titleList">
          <div className="title">
            <h1>My List</h1>
            <div className="titles-wrapper">
              {results.map(e=>{
                return(
                  <div className="movie">
                    <img src={e.poster_path} alt="poster of the movie"/>
                    <div className="overlay">
                      <div className="title">{e.title}</div>
                      <div className="rating">{e.vote_average}/10</div>
                      <div className="plot">
                        {e.overview}
                      </div>
                      <div data-toggled="true" className="listToggle" >
                        <div>
                          <i className="fa fa-fw fa-plus" ></i>
                          <i className="fa fa-fw fa-check" onClick={(event)=>this.deleteIt(event,e)}></i>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
 
export default MyList;