import logo from './logo.svg';
import './App.css';
import Home from './Home';
import {Route, Routes} from 'react-router-dom';
import EditPlayer from './EditPlayer';

function App() {
  return (
    <div>
      <header>
        <Routes>
          <Route path='/:id' element={<EditPlayer/>}></Route>
          <Route exact path='/' element={<Home/>}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>