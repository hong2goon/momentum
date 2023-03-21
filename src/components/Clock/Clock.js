import {useState, useEffect } from 'react';
import './Clock.scss';

function Clock({ chkSec, chkMer }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return (() => {
      clearInterval(id);
    })
  }, []);

  const timesSplit = time.toLocaleTimeString('en-US').split(':');
  const meridiemSplit = timesSplit[2].split(' ');
  const times = timesSplit[0] + ':' + timesSplit[1];
  const sec = meridiemSplit[0];
  const meridiem = meridiemSplit[1];
 
  return(
    <div className="clock-wrap">
      <div className="clock">
        {times}
        {chkSec ? <span>:{sec}</span> : null}
        {chkMer ? <span> {meridiem}</span> : null}
      </div>
    </div>
  )
}

export default Clock;