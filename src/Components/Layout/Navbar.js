import React from "react"
import { NavLink,Link } from "react-router-dom"

const Navbar=()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <NavLink className="navbar-brand" to="#">CRUD Operation</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link "  aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/contact">Contact</NavLink>
              </li>
              
              
            </ul>
           
          </div>
          <Link to="/users/add" className="btn btn-outline-light">Add User</Link>
        </div>
      </nav>
    )
}
export default Navbar