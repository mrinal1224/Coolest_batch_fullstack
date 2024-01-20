import {createStore} from 'redux'
// Action Constants

const deposit = 'Deposit'
const withdraw = 'Withdraw'


// 1
const store = createStore(reducer) // 3 set the reducer to the store
// 2 create Reducer


// reducer
function reducer(state = {amount : 1000} , action){

    if(action.type===deposit){
        return {amount : state.amount+ action.payload}
    }

    if(action.type===withdraw){
        return {amount : state.amount - action.payload}
    }
    return state
}


console.log(store.getState()) // getting the value of the state
// How to write Actions

// Action Creators
function DepositAction(value){
    return {type : 'Deposit' , payload:value}
}

function WithdrawAction(value){
   return {type:'Withdraw' , payload : value}
   
}

store.subscribe(()=>{
    console.log(store.getState())
})


store.dispatch(DepositAction(200)) // dispatching an Action
store.dispatch(WithdrawAction(300))






