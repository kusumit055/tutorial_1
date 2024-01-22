import React from 'react'
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <div className='navbars'>

   
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}  fixed-top ` }>
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/">Home</a>
        </li>
        {/* <!-- Add more navigation items as needed --> */}
      </ul>
    </div>
    <div className={`form-check text-${props.mode === 'light'?'dark':'light'} form-switch `}>
  <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">dark mode</label>
</div>
  </nav>
  </div>
  )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
  };
  Navbar.defaultProps = {
    title: 'where',
    about: 'you'
  }
