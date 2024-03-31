import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Stunavigation = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#"><strong>Attendance Using Facial Detection</strong></a>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-expanded={isNavbarOpen ? "true" : "false"}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a className="nav-link active text-white" aria-current="page" href="#">Take Attendance</a> */}
            </li>
            {/* <li className="nav-item">
              <Link to='/faculty/viewatt' className="nav-link text-white" onClick={toggleNavbar}>View Attendance</Link>
            </li> */}
            {/* <li className="nav-item">
              <Link to='/faculty/defaulter' className="nav-link text-white" onClick={toggleNavbar}>View Defaulters</Link>
            </li> */}
          </ul>
          <form className="d-flex" role="search">
            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
            <Link to='/' type="button" className="btn btn-danger" onClick={toggleNavbar}>Log out</Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Stunavigation;
