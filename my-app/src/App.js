import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/Schmololo.js';
import StatefulGreeting from './components/StatefulGreeting';
import Hatred from './components/Hatred';
import HooksCounter from './components/HooksCounter';
import RandomExtra from './components/RandomExtra';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HooksCounter/>
        <p className="App-wololo">
          <FunctionalGreeting name="&#128520;" />
          </p>
        <div className="App-likes">
          <StatefulGreeting/>
          <Hatred/>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <RandomExtra />
      </header>
    </div>
  );
}

export default App;
