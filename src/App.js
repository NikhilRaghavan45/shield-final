// import logo from './logo.svg';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import MyRoutingComp from './Components/RoutingModule';
import UserSideComp from './Components/UserSideComp'






function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      
      <MyRoutingComp/>

    
      

      
     
      
      {/* <MyRoutingComp/> */}
      
    </div>
  );
}

export default App;
