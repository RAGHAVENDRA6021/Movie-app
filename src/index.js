import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore} from 'redux';
import movies from './reducers'
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
import OpenPage from './OpenPage';

const store=createStore(movies);
/* console.log('store',store)
console.log('before state',store.getState())
store.dispatch({
    type:'ADD_MOVIES',
    movies: [{name:'superman'}]

});
console.log('after state',store.getState()) */
ReactDOM.render(
  
  <Router>
 
    <Switch><Route path="/Movie-app/"  component={OpenPage}/>
    <Route path="/project" >
    <App  store={store}/>
    </Route></Switch>
    
    
    
  </Router>,
  document.getElementById('root')
);


