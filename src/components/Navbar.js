import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  // const handleColorChange = (changeEvent) => {
  //   props.radioToggle(changeEvent.target.value)
  // }
  
  return (
   <>
   <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutText}</Link>
                {/* <a className="nav-link" href="/about">{props.aboutText}</a> */}
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li> */}
            </ul>
            
            {/* <div className="form-check form-check-inline mx-1">
              <input className="form-check-input text-bg-primary" type="radio" onChange={handleColorChange} 
              checked={props.selectedOption === 'option1'}  name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
            </div>
            <div className="form-check form-check-inline mx-1">
              <input className="form-check-input text-bg-secondary" type="radio" onChange={handleColorChange} 
              checked={props.selectedOption === 'option2'} name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
            </div>
            <div className="form-check form-check-inline mx-1">
              <input className="form-check-input text-bg-success" type="radio" onChange={handleColorChange} 
              checked={props.selectedOption === 'option3'} name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
            </div>
            <div className="form-check form-check-inline mx-1">
              <input className="form-check-input text-bg-danger" type="radio" onChange={handleColorChange} 
              checked={props.selectedOption === 'option4'} name="inlineRadioOptions" id="inlineRadio4" value="option4"/>
            </div>
            <div className="form-check form-check-inline mx-1">
              <input className="form-check-input text-bg-warning"type="radio" onChange={handleColorChange} 
              checked={props.selectedOption === 'option5'} name="inlineRadioOptions" id="inlineRadio5" value="option5"/>
            </div>
            <div className="form-check form-check-inline mx-1">
              <input className="form-check-input text-bg-info" type="radio" onChange={handleColorChange} 
              checked={props.selectedOption === 'option6'} name="inlineRadioOptions" id="inlineRadio5" value="option6"/>
            </div>
            <div className="form-check form-check-inline mx-1">
              <input className="form-check-input text-bg-light" type="radio" onChange={handleColorChange} 
              checked={props.selectedOption === 'option7'} name="inlineRadioOptions" id="inlineRadio5" value="option7"/>
            </div>
            <div className="form-check form-check-inline mx-1">
              <input className="form-check-input text-bg-dark"  type="radio" onChange={handleColorChange} 
              checked={props.selectedOption === 'option8'} name="inlineRadioOptions" id="inlineRadio5" value="option8"/>
            </div> */}

            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
            </div>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-primary" type="submit">Search</button> 
            </form> */}
          </div>
        </div>
      </nav>
   </>
  )
}
Navbar.propTypes ={
    title: PropTypes.string,
    aboutText: PropTypes.string
}

Navbar.defaultProps ={
    title :'set title here',
    aboutText :'About'
}
