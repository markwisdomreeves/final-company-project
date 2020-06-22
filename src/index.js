import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from "react-router-dom";
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/font-awesome/css/font-awesome.css";
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
