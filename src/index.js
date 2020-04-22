import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import BlogDetail from './Layouts/BlogDetail';


const routs = (
  < BrowserRouter >
      <Switch>
            <Route exact path="/" component={App} />
            <Route name="BlogDetail" path="/:id/:title/:bcolor/:lcolor/:name" component={BlogDetail} />
      </Switch>
  </ BrowserRouter >
);

ReactDOM.render(routs, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
