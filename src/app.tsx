// lib imports
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
// app imports
import { MainLayout } from './layouts/main-layout';
import { HomeContainer } from './containers/home-container/index';
import { AboutContainer } from './containers/about-container/index';
import CurrencyConverterContainer from './containers/currency-converter-container/index';

import { store } from './store';
const history = syncHistoryWithStore(hashHistory, store) as any;

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route component={MainLayout}>
          <Route path="/" component={HomeContainer}/>
          <Route path="/about" component={AboutContainer}/>
          <Route path="/currency-converter" component={CurrencyConverterContainer}/>
        </Route>
      </Router>
    </Provider>
  );
}

export const app = ReactDOM.render(
  <App />, document.getElementById('app-container')
);
