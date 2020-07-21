import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './layout/Header';
import Home from './layout/home/Home';
import About from './layout/about/About';
import Work from './layout/work/Work';
import Contact from './layout/contact/Contact';
import Footer from './layout/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
          <Route exact path="/portfolio-react-app" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
      {/* <Home /> */}
      {/* <About /> */}
    </div>
  );
}

export default App;
