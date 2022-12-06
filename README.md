# Redux Notes
- Redux helps manage application state as a state management library
- 60% of React projects use Redux

## Basic Terms
1. Redux: 
    - A complex state management tool, with a single store, a JS object called CDS (central data store), verses scattering application state in various places in the UI
    - Makes data flow transparent and predictable
    - Will work with any libraries used to build UI's: React, Angular, Vue, Ember, and Vanilla JS
    A. Benefits: 
        - Predictable state changes
        - Centralized state
        - Easy debugging
        - Undo/redo
        - Can cache/Preserve page state: if you leave and return to a page, the previous data is maintained on the client side in a single JS object
    B. Cons: 
        - Complexity (bc based on functional programming principles)
        - Code is verbose and needs some boilerplate code, though there is a modern way to use Redux that doesn't use boilerplate
    C. Tools: 
        - Dev Tools: chrome extension that is a powerful debugging tool
            - Time-Travel debugging: can be used to jump to previous states of a program. 
            - Log Rocket: provides always-on redux dev tools in production for every users. If a user encounters a problem, you can reload the application in the same state as the user and see what the happened
2. Reducer functions: 
    - manage state and return newly updated state. 
    - Have actions as parameters
3. Actions: 
    - 2 property types: 
        1. unique identifier
        2. payload containing data
4. Dispatch: 
    - created to send actions to update data 

## When to use Redux
- Redux is not always needed, different tools can be used. Can refer to Dan's [article: You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)
1. NOT: 
    a. tight budget
    b. small-medium apps
    c. simple UI/data flow
    d. static data

## Functional Programming 
    - notes in Redux Start file in Redux file outside this directory

## Installing Redux
1. npm install redux react-redux
2. create a 'store' folder in src
    1. create an index.js file 
        - all react states will be handled here