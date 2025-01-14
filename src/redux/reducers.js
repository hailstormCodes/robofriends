import  { CHANGE_SEARCHFIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED } from './constants';


const initialStateSearch = {
  searchField: ''
}

const initialStateRobots = {
  isPending: false, 
  robots: [],
  error: ''
}

export const searchRobots = (state = initialStateSearch, action={}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return { ...state, searchField: action.payload};
    default:
      return state;
  }
}

//Not returning an object. Thunk middleware is waiting for a function. 
export const requestRobots = (state = initialStateRobots, action={}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, {isPending: true})
    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, {robots: action.payload, isPending: false})
    case REQUEST_ROBOTS_FAILED:
      return Object.assign({}, state, {error: action.payload, isPending:false})
    default:
      return state
  }
}

