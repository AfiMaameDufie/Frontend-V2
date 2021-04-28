import React from 'react'
import './style/dash.css'
import { Redirect,Link } from 'react-router-dom';


const  onSubmitHandler = () => {
  localStorage.clear();
  return <Redirect to="/" />
}
const Header = (props)=>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-4">
  <a className="navbar-brand" href="#"><h1 className="text-light"> turntabl <span className="h1 text-warning">|</span>  <span className="h1 text-light">GH</span></h1></a>
  <button className="navbar-toggler text-light border border-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <Link to="/apply">
      <li className="nav-item active">
        <a className="h4 nav-link text-light">Home<span class="sr-only">(current)</span></a>
      </li>
      </Link>
      <Link to="/tracker">
      <li className="h4 nav-item active">
        <a className="h4 nav-link text-light">View Progress<span class="sr-only">(current)</span></a>
      </li>
      </Link>
      <li className="nav-item">
        <a className="h4 nav-link text-light" href="https://turntabl.io" target="_blank">About</a>
      </li>
      <li className="nav-item">
        <a className="h4 nav-link text-light" href="mailto:info@turntabl.io" target="_blank">Contact</a>
      </li>

      <li className="nav-item"> 
          <a className="h4 nav-link text-light" onClick={onSubmitHandler} href="/">Logout</a>

        </li>
    </ul>
  </div>
</nav>
    )
}
export default Header;