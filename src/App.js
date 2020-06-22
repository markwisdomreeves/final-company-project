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

import ModelOne from "./components/AllModels/ModelOne";
import ModelTwo from "./components/AllModels/ModelTwo";
import ModelThree from "./components/AllModels/ModelThree";
import ModelFour from "./components/AllModels/ModelFour";
import ModelFive from "./components/AllModels/ModelFive";
import ModelSix from "./components/AllModels/ModelSix";
import ModelSeven from "./components/AllModels/ModelSeven";
import ModelEight from "./components/AllModels/ModelEight";
import ModelNine from "./components/AllModels/ModelNine";


class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Form} />
                    <Route path="/login" component={Login} />
                    <Route path="/forget-password" component={ForgetPassword} />
                    <Route path="/terms-of-use" component={TermsOfUser} />
                    <Route path="/privacy-e-cookie" component={Privacy} />
                    <Route path="/support" component={Support} />
                    <Route path="/company" component={Company} />

                    <Route path="/model-one" component={ModelOne} />
                    <Route path="/model-two" component={ModelTwo} />
                    <Route path="/model-three" component={ModelThree} />
                    <Route path="/model-four" component={ModelFour} />
                    <Route path="/model-five" component={ModelFive} />
                    <Route path="/model-six" component={ModelSix} />
                    <Route path="/model-seven" component={ModelSeven} />
                    <Route path="/model-eight" component={ModelEight} />
                    <Route path="/model-nine" component={ModelNine} />
                </Switch>
            </div>
        )
    }

}

export default App;