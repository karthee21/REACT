import React from "react";
import {Link} from "react-router-dom";
function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    {/* <a class="navbar-brand">Navbar</a> */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/Home" >Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Textstyle">style</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Table">Table</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Bottons">Counter</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Form">Form</Link>
                            </li>
                           
                            <li class="nav-item">
                                <Link class="nav-link" to="/LifeCycleMethod">LifeCycleMethods</Link>
                            </li>







{/*                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" >Action</a></li>
                                    <li><a class="dropdown-item" >Another action</a></li>
                                    <li><a class="dropdown-item" >Something else here</a></li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar