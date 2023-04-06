import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { App } from 'components';
import { store } from 'store';
import { fetchOffer } from 'store/api-actions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(fetchOffer());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <ToastContainer />
        <App />
      </HelmetProvider>
    </Provider>
  </React.StrictMode>,
);
