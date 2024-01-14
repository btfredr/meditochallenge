import './App.css'
import { BrowserRouter as Router} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Donate from './components/Donate';
import Hero from './components/Hero';
import Nav from './components/Nav';

const App = () => {
  return (
    <Router>
      <Nav />
      <Home />
      <Hero />
      <About />
      <Donate />
    </Router>
  );
};

export default App;
