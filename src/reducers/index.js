export default function movies(state=[],action){
    console.log('state',state)
    console.log('action ', action)
    if(action.type==='ADD_MOVIES'){
        return action.movies;
    }
    return state; 
} 