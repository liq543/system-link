import './App.css';

function App() {
  return (
    <div className="container">
      {/* Three panels on the top row */}
      <div className="panel"></div>
      <div className="panel"></div>
      <div className="panel"></div>

      {/* One panel and header in the second row */}
      <div className="panel"></div>
      <div className="header">
        {/* Apply the text styles separately if needed */}
        <span className="header-text">SYSTEM__LINK</span>
      </div>

      {/* Three panels in the third row */}
      <div className="panel"></div>
      <div className="panel"></div>
      <div className="panel"></div>

      {/* Placeholder and two panels in the fourth row */}
      <div className="placeholder"></div>
      <div className="panel"></div>
      <div className="panel"></div>
    </div>
  );
}

export default App;
