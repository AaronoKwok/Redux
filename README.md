# Redux Notes
- Redux helps manage application state 

## Basic Terms
1. Redux: 
    - A complex state management tool, with a single store as CDS (central data store). 
2. Reducer functions: 
    - manage state and return newly updated state. 
    - Have actions as parameters
3. Actions: 
    - 2 property types: 
        1. unique identifier
        2. payload containing data
4. Dispatch: 
    - created to send actions to update data

## Installing Redux
1. npm install redux react-redux
2. create a 'store' folder in src
    1. create an index.js file 
        - all react states will be handled here