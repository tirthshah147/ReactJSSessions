import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';

const initialStateForSearch = {
  searchField:''
}

export const searchRobots = (state=initialStateForSearch, action={}) => {
 
  switch(action.type){
    case CHANGE_SEARCH_FIELD:
      // return Object.assign({},state, {searchField : action.payload});
      return {...state, searchField : action.payload }
    default:
      return state;
  }
}

const initialStateForRequest = {
  isPending:false,
  robots:[],
  error:''
}


export const requestRobots = (state=initialStateForRequest, action={}) => {
  switch(action.type){
    case REQUEST_ROBOTS_PENDING:
      return {...state, isPending:true}
    case REQUEST_ROBOTS_SUCCESS:
      return {...state, isPending:false,robots:action.payload}
    case REQUEST_ROBOTS_FAILED:
      return {...state, isPending:false,error:action.payload}
    default: 
      return state;
  }
}