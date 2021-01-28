import React, { Component, Fragment } from 'react';

class Home extends Component {
  state = {  }
  render() { 
    return ( 
      <Fragment>
        {this.props.genre.map(element => {
          if(this.props.data.filter(item=>item.genre_ids.includes(element.id)).length!==0){
            return (
              <div className="titleList">
              <div className="title">
                <h1>{element.name}</h1>
                <div className="titles-wrapper">
                  {this.props.data.filter(item=>item.genre_ids.includes(element.id)).map(e=>{
                    return(
                      <div className="movie">
                      <img src={e.poster_path} alt="poster of the movie"/>
                      <div className="overlay">
                        <div className="title">{e.title}</div>
                        <div className="rating">{e.vote_average}/10</div>
                        <div className="plot">
                          {e.overview}
                        </div>
                        <div data-toggled={e.my_list===true?"true":"false"} className="listToggle" >
                          <div>
                            <i className="fa fa-fw fa-plus" onClick={(event)=>this.props.loveIt(event,e)}></i>
                            <i className="fa fa-fw fa-check" onClick={(event)=>this.props.loveIt(event,e)}></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    )
                  })}
  
                </div>
              </div>
            </div>
            )
          }else{
            return null
          }
        })}
      </Fragment>
     );
  }
}
 
export default Home;