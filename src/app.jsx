import "./index.css";

function App() {
    const initDataRaw = useLaunchParams()?.initDataRaw;
    return (
      <div className="container">
        <h1>Hello, world!</h1>
        <div>{initDataRaw}</div>
      </div>
    );
  }

  export default App;