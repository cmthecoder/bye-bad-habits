import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Advice from './pages/Advice';
import Resources from './pages/Resources';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/advice' element={<Advice />}/>
        <Route path='/resources' element={<Resources />}/>
      </Routes>
    </div>
  );
}

export default App;
