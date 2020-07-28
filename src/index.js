import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

const erro404 = () => (
  <div>
    <center>
      <h1>Erro 404</h1>
    </center>
  </div>
)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/Video" component={CadastroVideo} exact/>
      <Route path="/cadastro/Categoria" component={CadastroCategoria} exact/>
      <Route component={erro404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

