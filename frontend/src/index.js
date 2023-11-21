import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import { AuthProvider } from 'react-use-auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AuthProvider> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </AuthProvider> */}
  </React.StrictMode>
);
