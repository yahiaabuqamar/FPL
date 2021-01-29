import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://fantasy.premierleague.com/my-team"
          target="_blank"
          rel="noopener noreferrer"
        >
          The King line up!
        </a>
      </header>
    </div>
  );
}

export default App;
