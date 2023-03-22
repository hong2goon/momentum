import React, { useState, useEffect } from 'react';

import Background from './components/Background/Background';
import Clock from './components/Clock/Clock';
import Setting from './components/Setting/Setting';
import './App.scss';

function App() {
  const viewMerLS = (localStorage.getItem('viewMeridiem') === 'true' ? true : false);
  const viewSecLS = (localStorage.getItem('viewSec') === 'true' ? true : false);
  const [getVwMer, setVwMer] = useState(viewMerLS);
  const [getVwSec, setVwSec] = useState(viewSecLS);
  const getMer = (x) => {
    setVwMer(!x);
  }
  const getSec = (x) => {
    setVwSec(!x);
  }
  
  useEffect(() => {
    document.title = 'Momentum (clone coding)';

    if(viewMerLS == null) {
      localStorage.setItem('viewMeridiem', false);
    }
    if(viewSecLS == null) {
      localStorage.setItem('viewSec', false);
    }
  }, [viewMerLS, viewSecLS]);

  return (
    <div className="App">
      <div className="region flex">
        <div className="flex-item half-top">
          <Clock chkSec={getVwSec} chkMer={getVwMer} />
        </div>
        <div className="flex-item half-bottom">
          투두리스트 들어갈 자리
        </div>
      </div>
      <Setting 
        getMer={getMer}
        getSec={getSec}
        // chkClockSec={chkClockSec} 
        // chkClockMer={chkClockMer} 
      />
      <Background />
    </div>
  );
}

export default App;
