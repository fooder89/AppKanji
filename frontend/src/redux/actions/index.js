import { k1_DATA_REQUESTED, k1_DATA_LOADED, k2_DATA_REQUESTED, k2_DATA_LOADED, k1, k2, GET_USER_DATA, USER_DATA_LOADED } from '../constants/actionTypes'

export function getData(from) {
  if(from === k1)
  return {type: k1_DATA_REQUESTED}
  if(from === k2)
  return {type: k2_DATA_REQUESTED}
}

export function dataLoaded(payload, from) {
  if(from === k1)
  return { type: k1_DATA_LOADED, payload }
  if(from === k2)
  return { type: k2_DATA_LOADED, payload }
}

// export function getUserData(payload) {
//   return { type: GET_USER_DATA, payload }
// }

// import {GET_USER_DATA, USER_DATA_LOADED } from '../constants/actionTypes'

export function getUserData(){
  return { type: GET_USER_DATA }
}

export function userDataLoaded(payload){
  return { type: USER_DATA_LOADED, payload }
}