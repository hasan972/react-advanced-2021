import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {
const [isLoding, setIsLoading] = useState(true);
const [isError, setIsError] = useState(false);
const [user, setUser] = useState('Defaule user'); 

useEffect (() =>{
  fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
},[]);

if(isLoding){
  return (
    <div>
      <h1>Loding..</h1>
    </div>
  )
}else if(isError){
  return(
    <div>
      <h1>isError</h1>
    </div>
  )
}
return (
  <div>
    {user}
  </div>
)
};

export default MultipleReturns;
