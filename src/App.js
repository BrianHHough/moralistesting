import logo from './logo.svg';
import './App.css';

import { useMoralis } from "react-moralis";

function App() {

  const { authenticate, isAuthenticated, user } = useMoralis();

    const { logout, isAuthenticating } = useMoralis();

  if (!isAuthenticated) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button 
          type='submit'
          onClick={() => authenticate()}
          >Login with MetaMask
        </button>
      </header>
    </div>
  );
  }
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>Welcome {user.get("username")}</h1>
      <button 
        type='submit'
        onClick={() => logout()}
        disabled={isAuthenticating}
        >Sign Out</button>
    </div>
  );

}

export default App;
