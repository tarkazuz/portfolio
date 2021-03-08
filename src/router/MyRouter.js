import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ProjectPage from '../pages/ProjectPage';
import ContactPage from '../pages/ContactPage';

export default function MyRouter() {
  return (
    <Router>
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/projects">
            < ProjectPage/>
          </Route>
          <Route path="/contact">
            <ContactPage/>
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
    </Router>
  );
}
