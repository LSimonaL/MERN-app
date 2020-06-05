import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/fontawesome-free";
// import { faHome } from "@fortawesome/free-solid-svg-icons";


class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark mb-3">
                <div className="container">
                    {/* <Link className="fish" to={"/"}><FontAwesomeIcon icon={faHome} size='3x' /></Link> */}
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={"/"}>Home</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to={"/login"}>Login</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to={"/dashboard"}>Dashboard</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to={"/blog"}>Blog</Link>
                        </li> */}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;