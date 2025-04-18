
import { StrictMode } from "react"
import "./shared/styles/reset.css"
import ReactDOM from 'react-dom';
import AppProvider from './app/providers/AppProviders.jsx';

ReactDOM.render(
  <StrictMode>
    <AppProvider />
  </StrictMode>,
  document.getElementById('root')
);
