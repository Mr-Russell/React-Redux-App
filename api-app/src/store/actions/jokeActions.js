import axios from 'axios'

export const FETCH_JOKE_START = 'FETCH_JOKE_START'
export const FETCH_JOKE_SUCCESS = 'FETCH_JOKE_SUCCESS'
export const FETCH_JOKE_FAILURE = 'FETCH_JOKE_FAILURE'

export const fetchJoke = () => {
  return dispatch => {
    dispatch({type: FETCH_JOKE_START})
    axios.get('https://api.chucknorris.io/jokes/random/')
      .then(res => {
        console.log('Axios Result:',res.data)
        dispatch({type: FETCH_JOKE_SUCCESS, payload: res.data.value})
      
      })
      .catch(err => {
        console.log('Axios Error:',err.response.data)
        dispatch({type: FETCH_JOKE_FAILURE, payload: err.response.data.message})
      })
  }
}