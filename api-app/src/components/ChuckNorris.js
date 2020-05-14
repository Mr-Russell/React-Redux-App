import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
import {fetchJoke} from '../store/actions/jokeActions.js'
import styled from 'styled-components'

const Chucky = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

    .top-div{
      width: 400px;
      border: 3px solid black;
      border-radius: 10px;
      /* padding: 10px 0; */
      margin-top: 50px;
      background-color: lightblue;

        h1{
          padding-bottom: 0px;
          margin-bottom: 0px;
        }

        h6{
          padding-top: 0;
          margin-top: 0;
        }
    }
    
    .joke{
      width: 80%;
      border: 3px solid navy;
      background-color: paleturquoise;
      border-radius: 10px;
      margin: 30px 0;
      padding: 10px;

        h2{
          font-style: italic;
        }

        h3{
          font-family: 'Oswald', sans-serif;
        }
    }

    h1, h6, h2 {
      font-family: 'Oswald', sans-serif;
    }

    .error{
      color: red;
      font-family: 'Play', sans-serif;
    }

    button{
      border: 2px solid turquoise;
      border-radius: 5px;
      background-color: navy;
      color:white;
      padding:5px;
      font-weight: bold;
      font-size: .8rem;
      margin-bottom: 20px;
      cursor: pointer;

       :hover{
          background-color: darkslateblue;
          font-size: .9rem;
        }
    }

`


const ChuckNorris = (props) => {
  useEffect(()=>{
    props.fetchJoke()
  }, [])


  return(
    <Chucky>
      <div className='top-div'>
        <h1>Chuck Norris "Facts"</h1>
        <h6>(and by "Facts", we mean jokes)</h6>
      </div>
      
      {
        props.isFetching && 
         <Loader 
            type="Oval" 
            color="#00BFFF" 
            height={80} 
            width={80} />
      }
      
      {
        props.quote && !props.isFetching &&
        <div className='joke'>
          <h2>Did You Know...</h2>
          <h3>{props.quote}</h3>
        </div>
      }

      {props.error && <h3 className='error'>ERROR: "{props.error}"</h3>}
    
      <button onClick={props.fetchJoke}>
        New "Fact"!
      </button>

      <a href='https://api.chucknorris.io/' target="_blank">
        <img src='https://assets.chucknorris.host/img/avatar/chuck-norris.png'/>
      </a>
    </Chucky>
  );
};

const mapStateToProps = state => {
 return{
  isFetching: state.jokeReducer.isFetching, 
  quote: state.jokeReducer.joke,
  error: state.jokeReducer.error
 }
}

export default connect(
  mapStateToProps, 
  {fetchJoke}
  )(ChuckNorris);