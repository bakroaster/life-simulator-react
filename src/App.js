import './App.css';
import 'react-bootstrap'

import Main from './mainComponents/Main'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Header from './mainComponents/Header'
import Footer from './mainComponents/Footer'
import Employment from './pages/Employment'
import Socialising from './pages/Socialising'
import Shopping from './pages/Shopping'
import Relationship from './pages/Relationship'
import Properties from './pages/Properties'
import Help from './pages/Help'
import Finance from './pages/Finance'
import Health from './pages/Health'
import Business from './pages/Business'
import Education from './pages/Education'
import About from './pages/About'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/Home" component={Main} />
          <Route exact path="/Employment" component={Employment} />
          <Route exact path="/Socialising" component={Socialising} />
          <Route exact path="/Shopping" component={Shopping} />
          <Route exact path="/Relationship" component={Relationship} />
          <Route exact path="/Properties" component={Properties} />
          <Route exact path="/Help" component={Help} />
          <Route exact path="/Finance" component={Finance} />
          <Route exact path="/Health" component={Health} />
          <Route exact path="/Business" component={Business} />
          <Route exact path="/Education" component={Education} />
          <Route exact path="/About" component={About} />
          <Redirect to="/Home" />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
