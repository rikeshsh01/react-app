import React from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom'
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



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
              <NavLink className="nav-link" activeClassName="active" aria-current="page" to="/">{propss.home}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/about">{propss.about}</NavLink>
            </li>
          </ul>


          <div className="d-flex me-auto mb-2 mb-lg-0">
            <div className="bg-primary rounded mx-1" onClick={()=>{propss.togleMOde("primary")}} style={{height:"25px",width:"25px",cursor:"pointer"}}></div>
            <div className="bg-success rounded mx-1" onClick={()=>{propss.togleMOde("success")}} style={{height:"25px",width:"25px",cursor:"pointer"}}></div>
            <div className="bg-danger rounded mx-1" onClick={()=>{propss.togleMOde("danger")}} style={{height:"25px",width:"25px",cursor:"pointer"}}></div>
            <div className="bg-warning rounded mx-1" onClick={()=>{propss.togleMOde("warning")}} style={{height:"25px",width:"25px",cursor:"pointer"}}></div>
            <div className="d-flex">
            <FontAwesomeIcon icon={faCircleHalfStroke}  onClick={()=>{propss.togleMOde("hello")}} className="mx-2" style={{height:"25px",width:"25px",cursor:"pointer"}}/>
            </div>
          </div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        
          

          {/* <div className={`form-check form-switch mx-3 text-${propss.mode==="light"?"dark":"light"}`}>
            <input className="form-check-input" onClick={()=>{propss.togleMOde("hello")}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {propss.mode==="light"?"Dark":"Light"} Mode</label>
          </div> */}
          </div>
    </div>
  </nav>
  )
}
Navbar.propTypes = {
  title:PropTypes.string,
  about:PropTypes.string
}




