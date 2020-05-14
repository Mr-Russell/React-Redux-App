import { 
  FETCH_JOKE_START, 
  FETCH_JOKE_SUCCESS, 
  FETCH_JOKE_FAILURE 
} from "../actions/jokeActions"

const initialState = {
  isFetching: false,
  joke: '',
  error: ''
}

export const jokeReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_JOKE_START:
      return{
        ...state,
        isFetching:true
      
      }
    case FETCH_JOKE_SUCCESS:
      return{
        ...state,
        isFetching: false,
        joke: action.payload,
        error: ''

      }
    default:
      case FETCH_JOKE_FAILURE:
        return{
          ...state,
          isFetching:false,
          joke: '',
          error: action.payload
        }
      return state
  }
}