function NavWrap() {
  const handleLayer = (e) => {
    e.preventDefault();
    const navs = e.target.closest('.nav-wrap').querySelectorAll('li');
    if(e.target.parentElement.tagName === 'LI') {
      const li = e.target.parentElement;
      navs.forEach(el => {
        el.classList.remove('active');
      });
      e.target.closest('.nav-wrap').querySelector('.link-wrap a').classList.remove('active');
      li.classList.add('active');
    } else {
      navs.forEach(el => {
        el.classList.remove('active');
      });
      e.target.classList.add('active');
    }
   
    const viewCont = e.target.closest('.setting-panel').querySelectorAll('.setting-view .set-cont');
    const contTarget = e.target.href.split('#');
    viewCont.forEach(elm => {
      elm.classList.contains(contTarget[1]) ? elm.classList.add('active') : elm.classList.remove('active');
    });
  }

  return(
    <nav className="nav-wrap">
      <ul className="nav-menu">
        <li className="nav-item active"><a href="#setting" onClick={handleLayer}>Setting</a></li>
        <li className="nav-item"><a href="#clock" onClick={handleLayer}>Clock</a></li>
        <li className="nav-item"><a href="#weather" onClick={handleLayer}>Weather</a></li>
        {/* <li className="nav-item"><a href="#todo">Todo</a></li> */}
      </ul>
      <div className="link-wrap">
        <a href="#about" onClick={handleLayer}>About</a>
      </div>
    </nav>
  )
}

export default NavWrap;