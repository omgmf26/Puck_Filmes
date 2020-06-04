import React from 'react';
import './App.css';

import Header from "./components/header"
import Card from "./components/card/index"
import Botons from "./components/botons"

function App() {
  return (
    <div className="App">
     <Header/>
     <div className="content">
       <Botons/>
     </div>
     <div className="content">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
     </div>
    </div>
  );
}

export default App;
