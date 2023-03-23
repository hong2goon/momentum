import { useState } from 'react';

function SetView( { setCmpGreet, chkClockMer, chkClockSec }) {
  // Compnent 세팅
  const cmpntVwLS_Greeting = localStorage.getItem('componentGreeting') === 'true' ? true : false;
  const [cmpntVwGreeting, setCmpntVwGreeting] = useState(cmpntVwLS_Greeting);
  
  const chkViewHandler = (e) => {
    setCmpntVwGreeting(!cmpntVwGreeting);
    setCmpGreet(!cmpntVwGreeting);
    cmpntVwGreeting ? localStorage.setItem('componentGreeting', false) : localStorage.setItem('componentGreeting', true); 
  }
  const cmpntStGreeting = cmpntVwLS_Greeting ? "checked" : false;

  // Clock 세팅
  const viewMerLS = (localStorage.getItem('viewMeridiem') === 'true' ? true : false);
  const viewSecLS = (localStorage.getItem('viewSec') === 'true' ? true : false);
  const [chkMer, setChkMer] = useState(viewMerLS);
  const [chkSec, setChkSec] = useState(viewSecLS);
  
  const chkMerHandler = () => {
    setChkMer(!chkMer);
    chkClockMer(!chkMer);
    chkMer ? localStorage.setItem('viewMeridiem', false) : localStorage.setItem('viewMeridiem', true);
  }
  const chkSecHandler = () => {
    setChkSec(!chkSec);
    chkSec ? localStorage.setItem('viewSec', false) : localStorage.setItem('viewSec', true);
    chkClockSec(!chkSec);
  }
  const chkStateMeridiem = viewMerLS ? "checked" : false;
  const chkStateSec = viewSecLS ? "checked" : false;

  return(
    <div className="setting-view">
      <div className="set-cont setting">
        <form className="js-settingForm js-settingForm1">
          <h2>Setting</h2>
          <span>Custom your board</span>
          <h3>View</h3>
          <ul className="setting-list">
            <li>
              <span className="label"><span>Clock</span></span>
              <div className="toggle-switch">
                <label>
                  <input type="checkbox" className="chk-clock" checked="checked" disabled />
                  <span>clock</span>
                </label>
              </div>
            </li>
            <li>
              <span className="label"><span>Greeting</span></span>
              <div className="toggle-switch">
                <label>
                  <input type="checkbox" className="chk-greet" checked={cmpntStGreeting} onChange={chkViewHandler} />
                  <span>greeting</span>
                </label>
              </div>
            </li>
          </ul>
        </form>
      </div>
      <div className="set-cont clock">
        <form className="js-settingForm js-settingForm2">
          <h2>Clock</h2>
          <span>Setting clock options</span>
          <h3>Options</h3>
          <ul className="setting-list">
            <li>
              <span className="label"><span>show meridiem(AM/PM)</span></span>
              <div className="toggle-switch">
                <label>
                  <input type="checkbox" className="chk-meridiem" checked={chkStateMeridiem} onChange={chkMerHandler} />
                  <span>show meridiem(AM/PM)</span>
                </label>
              </div>
            </li>
            <li>
              <span className="label"><span>show seconds</span></span>
              <div className="toggle-switch">
                <label>
                  <input type="checkbox" className="chk-sec" checked={chkStateSec} onChange={chkSecHandler} />
                  <span>show seconds</span>
                </label>
              </div>
            </li>
          </ul>
        </form>
      </div>
      <div className="set-cont about">
        <div className="js-settingForm">
          <h2 className="mg-b0">About</h2>
          <span className="app-title">Personal Dashboard</span> <span className="app-version">V1.0.0</span>
          <h3>Info</h3>
          <span>This project is clone coding</span>
          <ul className="list-txt">
            <li>Origin service : <a href="https://momentumdash.com/" target="_blank" rel="noreferrer noopener">MOMENTUM</a></li>
            <li>Reference : <a href="https://www.youtube.com/playlist?list=PL7jH19IHhOLM8YwJMTa3UkXZN-LldYnyK" target="_blank" rel="noreferrer noopener">Nomad Coder - JS Basics</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SetView;