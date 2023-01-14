import React from "react";
import {Link, NavLink} from "react-router-dom";
import CartModal from "./CartModal";



const NavBar = () => {
    return (
        <div className="container ">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to={"/"} style={{fontSize:"27px", color:"red"}} >TECNOMUNDO</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNavAltMarkup">
                                <div className="navbar-nav" style={{fontSize:"1.3rem"}}>    
                                <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Componentes de PC
                                </a>
                                <ul className="dropdown-menu">
                                    <NavLink className="nav-link" activeclassname="active" to={"/categoria/PLACAS DE VIDEO"}>Placas de Video</NavLink>
                                    <NavLink className="nav-link" activeclassname="active" to={"/categoria/MICROPROCESADORES"}>Microprocesadores</NavLink>
                                    <NavLink className="nav-link" activeclassname="active" to={"/categoria/MEMORIA RAM"}>Memoria RAM</NavLink>
                                </ul>
                            </li>
                                    
                                </div>
                                <CartModal/>
                                
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default NavBar;