import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './layout/Header';
import Home from './layout/home/Home';
import About from './layout/about/About';
import Work from './layout/work/Work';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/work" component={Work} />
      </Switch>
      {/* <Home /> */}
      {/* <About /> */}
    </div>
  );
}

export default App;
