import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

import registerServiceWorker from './registerServiceWorker';

const ourReduxStore = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={ourReduxStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
