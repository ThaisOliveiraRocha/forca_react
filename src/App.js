import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import ListaItens from './components/ListaItens'
import Forca from './components/forca/Forca'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={ListaItens} />
            <Route path="/forca" component={Forca} />
        </Switch>
      </ BrowserRouter>
    );
  }
}

export default App;
