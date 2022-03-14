import React from 'react';
import SingleVet from './SingleVet';

const VetService = (props) => {
  return (
    <div>
    <SingleVet isLoggedIn={props.isLoggedIn}/>
    <SingleVet isLoggedIn={props.isLoggedIn}/>
    <SingleVet isLoggedIn={props.isLoggedIn}/>
    </div>
  )
}

export default VetService