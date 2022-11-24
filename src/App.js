import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Advice from './pages/Advice';
import Resources from './pages/Resources';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Advice />
      <Resources />
      <Footer />
    </div>
  );
}

export default App;
