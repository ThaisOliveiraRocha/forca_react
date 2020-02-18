import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/home/Home'
import ListaItens from './components/listaItens/ListaItens'
import Forca from './components/forca/Forca'
import Livraria from './components/livraria/Livraria'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/lista" component={ListaItens} />
            <Route path="/forca" component={Forca} />
            <Route path="/livraria" component={Livraria} />
        </Switch>
      </ BrowserRouter>
    );
  }
}

export default App;
