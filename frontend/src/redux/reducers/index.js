import { k2_DATA_LOADED, k1_DATA_LOADED } from "../constants/actionTypes";

const initialState = {
    k1:{}, k2:{}, err:"",
}
export default function rootReducer(state=initialState, action){
    if (action.type === k2_DATA_LOADED) {
      return Object.assign({...state}, {
       k2: Object.assign({...state.k2},action.payload)
      });
    }
    if (action.type === k1_DATA_LOADED) {
      return Object.assign({...state}, {
       k1: Object.assign({...state.k1},action.payload)
      });
    }
    if (action.type === "API_ERRORED") {
      console.log(action.payload)
      return Object.assign({...state}, {
       err: state.err.concat(action.payload)
      });
    }
  
    return state;
}