import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChngContextProvider} from './context/Toggle';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChngContextProvider>   
      <App/>
      <ToastContainer/>
  </ChngContextProvider>
);