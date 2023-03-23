import React, { useState, useEffect } from 'react';
import GreetingMsg from './GreetingMsg';
import './Greeting.scss';

function Greeting() {
  const getUsername = localStorage.getItem('username');
  const [getUser, setUser] = useState(getUsername);
  const [viewForm, setViewForm] = useState(getUsername === null ? '' : ' hide');
  const [viewGreet, setViewGreet] = useState(getUsername === null ? ' hide' : '');
 
  useEffect(() => {
    console.log(getUsername);
  }, [getUsername]);

  const submitUserName = (e) => {
    e.preventDefault();
    const name = e.target.querySelector('input').value;
    if(name === '') {
      alert('Enter your name.');
    } else {
      setUser(name);
      localStorage.setItem('username', name);
      setViewForm(' hide');
      setViewGreet('');
    }
  }

  const vForm = (x) => {
    setViewForm(x);
  }

  const vGreet = (x) => {
    setViewGreet(x);
  }

  const getBytes = (str) => {
    let character;
    let charBytes = 0;
  
    for (let i = 0; i < str.length; i += 1) {
      character = str.charAt(i);
      if (character.length > 4) charBytes += 2;
      else charBytes += 1;
    }
    return charBytes;
  }

  const chkByte = (e) => {
    console.log(getBytes(e.target.value));
    if(e.target.value.length >= 16) {
      alert('Up to 15 bytes!');
    }
  }

  return (
    <div className="greeting-wrap">
      <form className={'js-form' + viewForm} onSubmit={submitUserName}>
        <input type="text" placeholder="What's your name?" defaultValue={getUsername} onChange={chkByte} />
      </form>
      <div className={'js-greeting' + viewGreet}>
        <GreetingMsg user={getUser} vForm={vForm} vGreet={vGreet} />
      </div>
    </div>
  )
}

export default Greeting;