import {useState, useEffect } from 'react';
function GreetingMsg( { user, vForm, vGreet }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return (() => {
      clearInterval(id);
    })
  }, []);

  const getHour = time.getHours();
  let greeting = '';
  if(getHour >=5 && getHour < 12) {
    greeting = 'Good Morning';
  } else if (getHour >= 12 && getHour < 15) {
    greeting = 'Good Afternoon';
  } else {
    greeting = 'Good Evening';
  }

  const editUserName = (e) => {
    e.preventDefault();
    vForm('');
    vGreet(' hide');
  }

  return (
    <>
      <span className="greeting">{greeting}, </span>
      <span className="user-name">
        {user}<button type="button" className="btn-edit" onClick={editUserName}>Edit</button>
      </span>
    </>
  )
}

export default GreetingMsg;
