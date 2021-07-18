import React from 'react';
import './App.css';
import CardSection from './Modules/CardSection'
import FeaSection from './Modules/FeaSection'
import Text from './Modules/Text'
import NavBar from './Modules/NavBar'
import FooterSection from './Modules/FooterSection'



function App() {
  return (
    <div className="App">
    <NavBar />
        <FeaSection />
        <Text />
        <CardSection />
        <FooterSection />
   </div>
  );
}

export default App;

