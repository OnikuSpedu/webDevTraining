import React from 'react';
import logo from './logo.svg';
import './app.css';
import HelloWorld from "./Components/HelloWorld.js";
import Counter from "./Components/Counter.js";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <HelloWorld name="Person"/>
        <Switch>
          <Route exact path="/">
            <h1 className="p-3">Home Page</h1>
          </Route>
          <Route exact path="/counter">
            <Counter />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
