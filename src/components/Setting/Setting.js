import { useState } from 'react';
import NavWrap from './NavWrap';
import SetView from './SetView';
import './Setting.scss';

function Setting({ chkClockSec, chkClockMer }) {
  const viewSecLS = localStorage.getItem('viewSec');
  const viewMerLS = localStorage.getItem('viewMeridiem');

  const [chkSec, setChkSec] = useState(!Boolean(viewSecLS));
  const [chkMer, setChkMer] = useState(!Boolean(viewMerLS));

  if(viewSecLS == null) {
    localStorage.setItem('viewSec', false);
  }
  if(viewMerLS == null) {
    localStorage.setItem('viewMeridiem', false);
  }
  
  const chkSecHandler = () => {
    setChkSec(!chkSec);
    chkClockSec(!chkSec);
    chkSec ? localStorage.setItem('viewSec', false) : localStorage.setItem('viewSec', true);
  }
  const chkMerHandler = () => {
    setChkMer(!chkMer);
    chkClockMer(!chkMer);
    chkMer ? localStorage.setItem('viewMeridiem', false) : localStorage.setItem('viewMeridiem', true);
  }

  const toggleCls = (e) => {
    const set = e.target.closest('.setting');
    const settingPanel = set.querySelector('.setting-panel');
    set.classList.contains('active') ? set.classList.remove('active') : set.classList.add('active');
    settingPanel.style.width = window.innerWidth - 14 + "px";
    setItemsInit(settingPanel);
  }

  const setItemsInit = (el) => {
    const itemMenu = el.querySelectorAll('.nav-wrap a');
    const itemView = el.querySelectorAll('.setting-view .set-cont');
    itemMenu.forEach(elm => {
      elm.parentElement.tagName === 'LI' ? elm.parentElement.classList.remove('active') : elm.classList.remove('active');
    });
    itemView.forEach(elm => {
      elm.classList.remove('active');
    });
    itemMenu[0].parentElement.classList.add('active');
    itemView[0].classList.add('active');
  }
  
  return (
    <div className="region bottom right">
      <div className="setting">
        <div className="setting-panel-wrap">
          <div className="setting-panel">
            <NavWrap />
            <SetView />
            <div style={{position: 'absolute', top: 0, right: 0}}>
              <label>
                <input id="setSec" type="checkbox" onChange={chkSecHandler} />초
              </label>
              <label>
                <input id="setMer" type="checkbox" onChange={chkMerHandler} />오전/오후
              </label>
            </div>
          </div>
        </div>
        <button type="button" onClick={toggleCls}><i className="icon">Setting</i></button>
      </div>
    </div>
  )
}

export default Setting;