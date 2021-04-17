import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName,setFirstname] = useState('');
  const [email,setEmail] = useState('');
  const [people,setPeople] = useState([]);
  const hendelSubmit = (e) =>{
    e.preventDefault();
    if(firstName && email){
      const person = {id:new Date().getTime.toString(), firstName,email};
      setPeople((people)=>{
        return [...people,person];
      })
      setFirstname('');
      setEmail('');
    }else{
      console.log('empty value')
    }
  }
  return(
  <>
  <article>
    <form className='form' onSubmit={hendelSubmit}>
      <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
      <div className='form-control'>
        <label htmlFor='email'>Email :</label>
        <input 
              type='email' 
              name='email' 
              id='email' 
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
      </div>
      <button type='submit' className='btn' >Add Parson</button>
    </form>
    {people.map((person, index) => {
          const { id, firstName, email } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
  </article>
  </>
  ); 
};

export default ControlledInputs;
