import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Advice from './pages/Advice';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/advice' element={<Advice />}/>
      </Routes>
    </div>
  );
}

export default App;
