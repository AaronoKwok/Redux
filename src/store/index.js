//import { createStore } from 'react-redux'; 
import { legacy_createStore as createStore } from 'redux'
const reducerFunction = (state, action) => {
    return 5;
}

const store = createStore(reducerFunction)

console.log(store.getState())


// tutorial: https://www.youtube.com/watch?v=CVpUuw9XSjY