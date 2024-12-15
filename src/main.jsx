import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './index.css';

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );

    function App() {
      const initDataRaw = useLaunchParams()?.initDataRaw;
      return (
        <div className="container">
          <h1>Hello, world!</h1>
          <div>{initDataRaw}</div>
        </div>
      );
    }
