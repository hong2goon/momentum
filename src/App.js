import React, { useEffect } from 'react';

import Background from './components/Background/Background';
import './App.scss';

function App() {
  useEffect(() => {
    document.title = 'Momentum (clone coding)'
  }, []);

  return (
    <div className="App">
      <div className="region flex">
        <div className="flex-item half-top">
          시계, 인사말 들어갈 자리
        </div>
        <div className="flex-item half-bottom">
          투두리스트 들어갈 자리
        </div>
      </div>
      <Background />
    </div>
  );
}

export default App;
