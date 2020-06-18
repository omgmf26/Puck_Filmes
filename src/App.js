import React from 'react';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom'
import './App.css';

import Header from "./components/header"
import Lancamentos from "./paginas/lancamentos/Lancamentos"
import Favoritos from "./paginas/favoritos/Favoritos"
import Acao from "./paginas/acao/Acao"
import Comedia from "./paginas/comedia/Comedia"
import Animacao from "./paginas/animacao/animacao"
import Romance from "./paginas/romance/Romance"


function App() {
  return (
    <div className="App">
     <Header/>
     <BrowserRouter>
     <div className="nav-formatacao">
     <NavLink to="/favoritos" className="nav-link1">Favoritos</NavLink>
     <NavLink to ="/lancamentos" className="nav-link2">Lançamentos</NavLink>
     <NavLink to ="/acao" className="nav-link3">Ação</NavLink>
     <NavLink to ="/comedia" className="nav-link4">Comédia</NavLink>
     <NavLink to ="/animacao" className="nav-link5">Animação</NavLink>
     <NavLink to ="/romance" className="nav-link6">Romance</NavLink>
     </div>
      <Switch>
      <Route exact path="/" component={Lancamentos}/>
      <Route path="/lancamentos" component={Lancamentos}/>
      <Route path="/favoritos" component={Favoritos}/>
      <Route path="/acao" component={Acao}/>
      <Route path="/comedia" component={Comedia}/>
      <Route path="/animacao" component={Animacao}/>
      <Route path="/romance" component={Romance}/>
      </Switch>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
