import React, { useEffect } from 'react';

import Background from './components/Background/Background';
import './App.scss';

function App() {
  useEffect(() => {
    document.title = 'Momentum (clone coding)'
  }, []);

  return (
    <div className="App">
      <Background />
    </div>
  );
}

export default App;
