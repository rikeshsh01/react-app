import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(propss) {
  return (
  <nav className={`navbar navbar-expand-lg bg-${propss.mode} navbar-${propss.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{propss.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">{propss.home}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{propss.about}</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div className={`form-check form-switch mx-3 text-${propss.mode==="light"?"dark":"light"}`}>
            <input className="form-check-input" onClick={propss.togleMOde} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {propss.mode==="light"?"Dark":"Light"} Mode</label>
          </div>
      </div>
    </div>
  </nav>
  )
}
Navbar.propTypes = {
  title:PropTypes.string,
  about:PropTypes.string
}

