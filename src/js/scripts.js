import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory }from "react-router";

import Bootstrap from './vendor/bootstrap-without-jquery';


import About from "./pages/About";
import Projects from "./pages/Projects";
import Layout from "./pages/Layout";
import Resume from "./pages/Resume";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={About}></IndexRoute>
      <Route path="about" component={About}></Route>
      <Route path="resume" component={Resume}></Route>
      <Route path="Projects" component={Projects}></Route>
    </Route>
  </Router>,
app);
