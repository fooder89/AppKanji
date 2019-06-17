import { k2_DATA_LOADED, k1_DATA_LOADED , USER_DATA_LOADED} from "../constants/actionTypes";

const initialState = {
    k1:{}, k2:{}, err:"", UserData:{}
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

    // if (action.type === "API_ERRORED") {
    //   console.log(action.payload)
    //   return Object.assign({...state}, {
    //    err: state.err.concat(action.payload)
    //   });
    // }

  if (action.type === USER_DATA_LOADED) {
    return Object.assign({ ...state }, {
      UserData: action.payload
    });
  }
  return state;
}



// import { USER_DATA_LOADED} from "../constants/actionTypes";

// const initialState = {
//   UserData: {}, 
// }
// export default function rootReducer(state = initialState, action) {
//   if (action.type === USER_DATA_LOADED) {
//     return Object.assign({ ...state }, {
//       UserData: action.payload
//     });
//   }
//   return state;
// }