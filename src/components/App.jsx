import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './Footer';
import Main from './Main'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Navigation from './Navigation'

function App() {
  return (
    <div className="App">
    <Router>
      <Navigation/>
      <Switch>
        <Route path="/" exact component={() => <Main />} />
        <Route path="/home" exact component={() => <Home />} />
        <Route path="/about" exact component={() => <About />} />
      </Switch>
      
      <Footer />
    </Router>
  </div>
);
}
export default App;




