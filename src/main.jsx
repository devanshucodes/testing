import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './index.css';

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );

    function App() {
      return (
        <div className="container">
          <h1>Hello, world!</h1>
        </div>
      );
    }
