import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { SWRConfig } from 'swr';
import { localStorageProvider } from './localstorage-cache.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SWRConfig value={{ provider: localStorageProvider }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SWRConfig>
  </React.StrictMode>
);
