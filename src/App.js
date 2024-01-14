import './App.css'
import { BrowserRouter as Router} from 'react-router-dom';
import FAQ from './components/FAQ';
import Donate from './components/Donate';
import Hero from './components/Hero';

const App = () => {
  return (
    <Router>
      

      <Hero />
      <FAQ />
      <Donate />
    </Router>
  );
};

export default App;
