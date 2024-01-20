import {createStore} from 'redux'

const store = createStore(reducer)



// reducer


function reducer(state = {amount : 1000} , action){
    return state
}


console.log(store.getState())



