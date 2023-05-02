import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DatasContextProvider } from './context/DatasContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DatasContextProvider>
      <App />
    </DatasContextProvider>
  </React.StrictMode>
);

