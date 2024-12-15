import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
    import ReactDOM from 'react-dom/client';
    import './index.css';
    import App from "./app.jsx";

    ReactDOM.createRoot(document.getElementById('root')).render(
      <StrictMode>
        <App />
      </StrictMode>
    );

    
