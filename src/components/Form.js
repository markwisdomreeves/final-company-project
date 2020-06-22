import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./form.css";

class Form extends Component {
    render() {
        return (
        <div className="custom-background-image">
            <div className="container">
                <div className="row">
                    {/* first div container */}
                    <div className="col-lg-8 text-center custom-intro-style">
                      <b>
                        <h1>Reputation Nodes</h1>
                        <p>Richiesta di cancellazione informazioni negative presso i più importanti motori di ricerca.</p>
                      </b>
                    </div>

                    {/* second div container */}
                    <div className="col-lg-4 custom-form-card-style">
                        <div className="card bg-light text-center text-black">
                            <div className="card-body border-top-bottom-style">
                                <h2>Modulo di registrazione</h2>
                                <form>
                                    <div className="form-group">
                                        <input type="text" name="firstName" className="form-control" placeholder="Inserisci Nome" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="lastName" className="form-control" placeholder="Inserisci Cognome" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name="email" className="form-control" placeholder="Inserisci Email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name="confermaEmail" className="form-control" placeholder="Inserisci Conferma Email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="password" className="form-control" placeholder="Inserisci Password" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="comfermaPassword" className="form-control" placeholder="Inserisci Conferma Password" />
                                    </div>
                                    <div className="form-group form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">
                                        Il sottoscritto autorizza l'invio del form, come per legge. 
                                        </label>
                                    </div>
                                    <div className="form-group custom-link-info">
                                      <span>Procedendo accetti:{" "}</span><p><Link to="terms-of-use">Condizioni di utilizzo</Link>, <Link to="privacy-e-cookie">Privacy e Cookie</Link></p>
                                    </div>
                                    <button className="btn btn-sm btn-block btn-primary custom-form-btn-style" type="button">Iscriviti</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}


export default Form;