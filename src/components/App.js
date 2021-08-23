
import React from 'react';
import Navbar  from './Navbar';
import MovieCard from './MovieCard';
import {data} from '../data';

function App() {
  alert=()=>{
    console.log("log ");
  }
  return (
    <div className="App">
      <Navbar/>
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourites</div>
        </div>
        <div className="list">
          {alert()}
        {
          data.map((movie)=>
          {
            
            return <MovieCard movie={movie}/>
          })
        }
        </div>
      </div>
      
    </div>
  );
}

export default App;
