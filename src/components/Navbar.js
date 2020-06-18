import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./navbar.css";


class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id="parent-navbar-container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="true" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="custom-link-container">
                    <Link className="navbar-brand" to="/">
                        <img className="logo-size" src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="collapse navbar-collapse customer-navbar-container" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/company" >L'AZIENDA <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/support">ASSISTENZA </Link>
                        </li>
                    </ul>
                    <form id="signin" className="form-inline my-2 my-lg-0 navbar-form navbar-right custom-form-style">
                        <div className="input-group">
                            <input className="form-control form-control-sm mr-sm-2" type="text" placeholder="Email" aria-label="email" />
                        </div>
                           <br />
                           <br />
                        <div className="input-group">
                            <input className="form-control form-control-sm mr-sm-2" type="password" placeholder="Password" aria-label="password" />
                        </div>
                        <div class="form-group form-check custom-label-style">
                            <label for="auto">Auto<br />
                               <input type="checkbox" id="auto" name="auto" value="1" />
                            </label>
                        </div>
                        <Link to="/login" class="btn btn-sm btn-primary custom-navbar-btn-style" type="button">ACCEDI</Link>
                    </form>
                </div>
            </nav>
        )
    }   
}

export default Navbar;