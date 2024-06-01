import logo from './logo.svg';
import wise from './sleepWise.jpg';
import './App.css';
import Header from './Header';
function App() {
  return (
    <div className="App">
      <Header />
      <br/><br/><br/>
      <img src={wise} className="App-logo" alt="logo" />
      <br/><br/><br/>
      <p>
        axia no web desu Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <p/>
      <a
        className="App-link"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
        rel="noopener noreferrer"
      >
        Pornhub
      </a>
    </div>
  );
}

export default App;
