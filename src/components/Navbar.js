import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./navbar.css";
import { FaUser } from "react-icons/fa";


class Navbar extends Component {

    render() {
        return (
           <nav className="navbar navbar-light bg-light" id="example-testing">
                <div className="custom-link-container">
                    <Link className="navbar-brand" to="/">
                        <img className="logo-size" src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="main-parent-container">
                    <div className="btn-group" id="inner-navbar-login-box">
                        <form>
                            <input type="text" id="username" placeholder="Inserisci Email" />
                            <input type="password" id="password" placeholder="Inserisci Email" />
                            <div className="check-box-container">
                                <label htmlFor="userCheck" className="check-box-label">Auto</label>
                                <input type="checkbox" className="check-box" id="userCheck" />
                            </div>
                            <button type="submit" id="navbar-login-btn" className="btn btn-sm btn-secondary p-1">ACCEDI</button>
                        </form>
                    </div>
                    <div className="form-group form-check custom-login-link-container">
                        <Link to="/login" className="btn btn-sm custom-login-link" type="button">
                        <span className="user-login" ><FaUser /></span></Link>
                    </div>
                    
                </div>
            </nav>    
        )
    }   
}


export default Navbar;
