import React from "react";
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Data from './components/data/Data'
import Cloud from './components/cloud/Cloud'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Data  />
      <Cloud />
      <Footer />
    </div>
  );
}

export default App;
