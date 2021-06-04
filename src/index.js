import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppProvider } from './context';
import { createStore } from 'redux';
import { rootReducer } from './store/reducers/reducer';
import { Provider } from 'react-redux';
const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);