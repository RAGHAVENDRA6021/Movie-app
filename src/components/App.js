
import React from 'react';
import Navbar  from './Navbar';
import MovieCard from './MovieCard';
import {data} from '../data';



class App extends React.Component {
  componentDidMount(){
    //make api call
    //dispatch action
    const {store} = this.props
    store.subscribe(
      ()=>{
        console.log('updated')
        this.forceUpdate();
        //force update is not good idea
      }
    )
    store.dispatch(
      {
        type:'ADD_MOVIES',
        movies:data
      }
    )
  }
  render(){
  const mvs=this.props.store.getState()
  return (
    <div className="App">
      <Navbar/>
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourites</div>
        </div>
        <div className="list">
         
        {/* {
          data.map((movie,index)=>
          {
            
            return <MovieCard movie={movie} key={(index)}/>
          })
        } */
        
          mvs.map((movie,index)=>
          {
            
            return <MovieCard movie={movie} key={(index)}/>
          })
        }
        </div>
      </div>
      
    </div>
  );
      }
}

export default App;
