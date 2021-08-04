import React from 'react'

import { NavLink } from 'react-router-dom';
import { BiLogIn} from "react-icons/bi";
import img from "./image/a.png";

export default function navbar() {
    return (
        <div>
               

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <div className='sidebar'>
    
            <button className="btn btn-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                ☰
            </button>
        <div className="offcanvas offcanvas-start  " tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
           
        <div className="offcanvas-body  vw-1 btn btn-light  ">

        <div className="dropdown mt-3 ">
            <button className="btn btn-success w-75 dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
           Employee
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a className="dropdown-item" href="#">Add employee</a></li>
            <li><a className="dropdown-item" href="#">Show</a></li>
            </ul>
        </div>
        <div className="dropdown mt-3 ">
            <button className="btn btn-success  w-75 dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
           Admin
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a className="dropdown-item" href="#">Add Admin</a></li>
            <li><a className="dropdown-item" href="#">Show</a></li>
            </ul>
        </div>
        
        </div>
        </div>
        


        <span className="ml-3">
          <img src={img} class="rounded "width="70"/>
        </span>  
    </div>
     

    <div>
           

    </div>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="button_4 ">
        <button className="button d-flex justify-content-end btn btn-light btn btn-outline-danger"><BiLogIn/></button>
        </div>

                
        </div>
    
            
            </nav>

        </div>

        
    ) 
}
