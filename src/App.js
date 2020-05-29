import React from 'react';
import './App.css';

import Header from "./components/header"
import Card from "./components/card/index"

function App() {
  return (
    <div className="App">
     <Header/>
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
