import React from 'react';
//import pages
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav'
//import from router :: switch detect first ruote match
import {Switch,Route, useLocation} from 'react-router-dom';
import MovieDetail from './pages/MovieDetail';
//animation
import {AnimatePresence} from 'framer-motion'

function App() {
  const location = useLocation();
  //console.log(location); //to detect the keys on browser's console
  return (
    <div className="App">
    <GlobalStyle />
    <Nav />
    <AnimatePresence exitBeforeEnter>
    <Switch location={location} key={location.pathname}>
    <Route path="/" exact>
    <AboutUs />
    </Route>
    <Route path="/work" exact>
    <OurWork />
    </Route>
    <Route path="/work/:id">
    <MovieDetail />
    </Route>
    <Route path="/contact">
    <ContactUs />
    </Route>
    </Switch>
    </AnimatePresence>
    </div>
  );
}

export default App;

//   <Switch>
//<Route path="/">
