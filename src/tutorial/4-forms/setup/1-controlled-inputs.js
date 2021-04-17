import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  return(
  <>
  <airticle>
    <from className='form'>
      <div className='form-control'>
        <label htmlfor='firstName'>Name:</label>
        <input type='text' name='firstName' id='firstName'></input>
      </div>
      <div className='form-control'>
        <label htmlFor='email'>Email:</label>
        <input type='email' name='email' id='email'></input>
      </div>
    </from>
  </airticle>
  </>
  ); 
};

export default ControlledInputs;
