import React from 'react';
import ReactDOM from 'react-dom';
import { StoreContext } from 'redux-react-hook';

import configureStore from './store/configureStore';
import rootSaga from './sagas/';
import App from './App';

const store = configureStore();
store.runSaga(rootSaga);

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  document.getElementById('root')
);
