import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './state/store';
import App from './App';
import './index.css';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Could not find root container element');
}

const root = ReactDOMClient.createRoot(container);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
