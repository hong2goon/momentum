import React, { useState, useEffect } from 'react';

import Background from './components/Background/Background';
import Clock from './components/Clock/Clock';
import Setting from './components/Setting/Setting';
import './App.scss';

function App() {
  const viewSecLS = localStorage.getItem('viewSec');
  const viewMerLS = localStorage.getItem('viewMeridiem');
  const [vwSec, setVwSec] = useState(!Boolean(viewSecLS));
  const [vwMer, setVwMer] = useState(!Boolean(viewMerLS));
  const chkClockSec = (x) => {
    setVwSec(x);
  }
  const chkClockMer = (x) => {
    setVwMer(x);
  }  
  useEffect(() => {
    document.title = 'Momentum (clone coding)';
  }, []);

  return (
    <div className="App">
      <div className="region flex">
        <div className="flex-item half-top">
          <Clock chkSec={vwSec} chkMer={vwMer} />
        </div>
        <div className="flex-item half-bottom">
          투두리스트 들어갈 자리
        </div>
      </div>
      <Setting 
        chkClockSec={chkClockSec} 
        chkClockMer={chkClockMer} 
      />
      <Background />
    </div>
  );
}

export default App;
