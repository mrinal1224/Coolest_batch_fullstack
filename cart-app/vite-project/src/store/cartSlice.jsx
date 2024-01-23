import {createSlice} from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name : 'cart',

    initialState : [],

    reducers : {
          addToCart(state , action){
              state.push(action.payload)
          },

          removeFromCart(state , action){
        
          }
    }
})

export const {addToCart , removeFromCart} = cartSlice.actions

export default cartSlice.reducer