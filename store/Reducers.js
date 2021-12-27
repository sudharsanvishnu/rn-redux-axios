import {ADDITION, SUBTRACTION} from './ActionTypes'

const initialState ={
  count: 0
}

export const mainReducer = (state = initialState, action) => {
  switch(action.type){
    case ADDITION:
      return {...state, count: state.count + 1 }
    
    case SUBTRACTION:
    return{...state, count: state.count - 1 } 

    default:
      return state;
  }
}
