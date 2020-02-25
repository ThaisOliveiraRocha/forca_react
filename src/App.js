import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/home/Home'
import ListaItens from './components/listaItens/ListaItens'
import Forca from './components/forca/Forca'
import Livraria from './components/livraria/Livraria'
import Carrinho from './components/livraria/carrinho/Carrinho'
import PrivateRoute from './routes/PrivateRoute'

const App = () => (
  <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/lista" component={ListaItens} />
            <Route path="/forca" component={Forca} />
            <Route path="/livraria" component={Livraria} />

            <PrivateRoute path="/carrinho" component={Carrinho} />
        </Switch>
      </ BrowserRouter>
)

export default App;
