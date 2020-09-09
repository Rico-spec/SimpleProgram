import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Menubar from './components/Menubar';
import Timeline from './components/Timeline';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Menubar />
        <Timeline />
        
        <Switch>
          <Route path='/' exact />
          {/* <Route path='' component={ Menubar } />/ */}
        </Switch>

      </Router>
    </>
  );
}

export default App;
