import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import AppProvider from './app/providers/AppProviders.jsx';
import './shared/styles/reset.css';

ReactDOM.render(
  <StrictMode>
    <AppProvider />
  </StrictMode>,
  document.getElementById('root')
);
