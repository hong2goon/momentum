function SetView() {
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
              {/* <div class="toggle-switch">
                <label>
                  <input type="checkbox" class="chk-clock" name="clock" value="clock" />
                  <span>clock</span>
                </label>
              </div> */}
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
                  <input type="checkbox" className="chk-12h" name="12h" value="12h" />
                  <span>show meridiem(AM/PM)</span>
                </label>
              </div>
            </li>
            <li>
              <span className="label"><span>show seconds</span></span>
              <div className="toggle-switch">
                <label>
                  <input type="checkbox" className="chk-secName" name="sec" value="sec" />
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
            <li>Origin service : <a href="https://momentumdash.com/" target="_blank">MOMENTUM</a></li>
            <li>Reference : <a href="https://www.youtube.com/playlist?list=PL7jH19IHhOLM8YwJMTa3UkXZN-LldYnyK" target="_blank">Nomad Coder - JS Basics</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SetView;