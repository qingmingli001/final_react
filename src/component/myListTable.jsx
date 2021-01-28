import React, { Component,Fragment } from 'react';
import * as MovieAPI from '../lib/MovieAPI';

class MyListTable extends Component {
  state = {
    movies:[],
    genres:[]
  }

  deleteIt=(event,parameter)=>{
    MovieAPI.removeFromList(parameter)
    event.preventDefault();
  }

  render() {

    console.log("this is render")
    console.log(this.state)
    MovieAPI.getAll().then(response=>this.setState({movies:response}));
    MovieAPI.genres().then(response=>this.setState({genres:response.sort( (a, b) => a.name.localeCompare(b.name) )}));
    const results=this.state.movies.filter((element)=>element.my_list===true);
    return (
      <Fragment>
        <div className="titleList">
          <div className="title">
            <h1>My List Table</h1>
            {results.length===0?(<p>Sorry, you didn't add any item to my list.</p>):(
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Rating</th>
                  <th scope="col">Genres</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {results.map((e,i)=>{
                  return (
                    <tr>
                    <th scope="row">{i+1}</th>
                    <td>{e.title}</td>
                    <td>{e.vote_average}/10</td>
                    <td>{
                      e.genre_ids
                      }
                    </td>
                    <td><button type="reset" onClick={(event)=>this.deleteIt(event,e)}>Remove</button></td>
                  </tr>
                  )
                })}
              </tbody>
            </table>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}
 
export default MyListTable;