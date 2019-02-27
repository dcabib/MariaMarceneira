import React, { Component } from 'react';
import './resources/styles.css';
import './css/style.css';
import { Element } from 'react-scroll';


import Header       from './components/header_footer/Header';
import Featured     from './components/featured';
import VunueNfo     from './components/venueNfo';
import Highlight    from './components/highlights';
import Pricing      from './components/pricing';
import Location     from './components/location';
import Footer       from './components/header_footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>

        <Element name="featured">
          <Featured/>
        </Element>

        <Element name="venuenfo">
          <VunueNfo/>
        </Element>
        
        <Element name="highlights">
          <Highlight/>
        </Element>
        
        <Element name="pricing">
          <Pricing/>
        </Element>

        <Element name="location">
          <Location/>
        </Element>
        
        <Footer/>
      </div>
    );
  }
}

export default App;
