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

