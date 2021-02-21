import logo from './logo.svg';
import './App.css';
import FaceDemographic from './FaceDemographic.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <FaceDemographic/>
      </header>
    </div>
  );
}

export default App;
