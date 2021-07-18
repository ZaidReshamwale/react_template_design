import React from 'react';
import './App.css';
import CardSection from './CardSection'
import FeaSection from './FeaSection'
import Text from './Text'
import NavBar from './NavBar'
import FooterSection from './FooterSection'



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

