import React, { Component } from 'react';
import { Link } from "react-router-dom";
import LoginLogo from "../assets/logo.png";
import "./login.css";

export default class ForgetPassword extends Component {
    render() {
        return (
            <div className="container">
                <div className="row custom-login-form-container">
                    <div className="custom-img-style">
                        <Link to="/"><img src={LoginLogo} alt="loginImg" /></Link>
                    </div>
                    <div className="col-lg-4 custom-form-card-style">
                        <div className="card bg-light text-center text-black">
                            <div className="card-body border-top-bottom-style">
                            <form>
                                <div className="form-group">
                                    <input type="email" name="email" className="form-control" placeholder="Inserisci Email" />
                                </div>
                                <br />
                                <button class="btn btn-sm btn-block btn-primary custom-form-btn-style" type="button">Invia</button>
                            </form>
                            </div>
                        </div>
                    </div>
                   </div>
                </div>
              )
            }
        }
