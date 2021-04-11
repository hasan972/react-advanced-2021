import React, { useState } from 'react';

const UseStateBasics = () => {
 const [text,setText] = useState('hellow world');
 const handelClick = () =>{
   if(text==='hellow world 1'){
     setText('hellow world 2')
   }else{
     setText('hellow world 1')
   }
 };
  return (<React.Fragment>
    <h1>{text}</h1>
    <button className="btn" onClick={handelClick}>change the value</button>
  </React.Fragment>)
};

export default UseStateBasics;
