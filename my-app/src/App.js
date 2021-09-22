import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/Schmololo.js';
import StatefulGreeting from './components/StatefulGreeting';
import Hatred from './components/Hatred';
import HooksCounter from './components/HooksCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <HooksCounter/>
        <p> 
          It works 
        </p>
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
      </header>
    </div>
  );
}

export default App;
