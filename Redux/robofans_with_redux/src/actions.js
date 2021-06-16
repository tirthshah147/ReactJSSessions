import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';

export const setSearchField = (text) => 
{
  return{
    type:CHANGE_SEARCH_FIELD,
    payload: text
  }
}


export const requestRobots = () => (dispatch) => {
  dispatch({type : REQUEST_ROBOTS_PENDING});
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json()
    })
    .then(data => dispatch({type : REQUEST_ROBOTS_SUCCESS, payload:data}))
    .catch(err => dispatch({type : REQUEST_ROBOTS_FAILED, payload:err}))
}


// export function requestRobots(){
//   return function(dispatch){
//     dispatch({type : REQUEST_ROBOTS_PENDING});
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => {
//       return response.json()
//     })
//     .then(data => dispatch({type : REQUEST_ROBOTS_SUCCESS, payload:data}))
//     .catch(err => dispatch({type : REQUEST_ROBOTS_FAILED, payload:err}))
//   }
// }



