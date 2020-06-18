import React, { Component } from 'react';
import { Link } from "react-router-dom";
import LoginLogo from "../assets/logo.png";
import "./login.css";

export default class Login extends Component {
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
                                <h2>ACCEDI</h2>
                                <form>
                                    <div className="form-group">
                                        <input type="email" name="email" className="form-control" placeholder="Inserisci Email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="password" className="form-control" placeholder="Inserisci Password" />
                                    </div>
                                    <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                        <label class="form-check-label" for="exampleCheck1">
                                            Automatico
                                        </label>
                                    </div>
                                    <br />
                                    <button class="btn btn-sm btn-block btn-primary custom-form-btn-style" type="button">ACCEDI</button>
                                    <div className="form-group custom-login-info-container">
                                        <div className="form-group">
                                            <Link to="/forget-password">Hai dimenticato I dati di accesso?</Link>
                                        </div>
                                        <div className="form-group">
                                            <Link to="/">Iscriviti</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    }
