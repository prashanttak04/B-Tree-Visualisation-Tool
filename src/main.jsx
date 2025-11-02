// libraries
import React from 'react';
import ReactDOM from 'react-dom/client'; //Lets us Connect React to the Browser's HTML
import App from './App.jsx'; //imports my app main component
import './main.css';

import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme'; // Import the theme you created


ReactDOM.createRoot(document.getElementById('root')).render( //finds that empty container and attaches react to it.
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);