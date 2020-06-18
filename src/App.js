import React, {Component} from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Login from "./components/Login";
import ForgetPassword from "./components/ForgetPassword";
import TermsOfUser from "./components/TermsOfUse";
import Privacy from "./components/Privacy";
import Support from "./components/Support";
import Company from "./components/Company";


class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Form} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/forget-password" component={ForgetPassword} />
                    <Route exact path="/terms-of-use" component={TermsOfUser} />
                    <Route exact path="/privacy-e-cookie" component={Privacy} />
                    <Route exact path="/support" component={Support} />
                    <Route exact path="/company" component={Company} />
                </Switch>
            </div>
        )
    }
}


export default App;