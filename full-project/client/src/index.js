import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store, persistor } from './redux/store';
import 'react-toastify/dist/ReactToastify.css';
import { app } from "./firebase.confug";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} app={app}>
    <PersistGate loading={"loading"} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
