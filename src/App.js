import './App.css'
import { BrowserRouter as Router} from 'react-router-dom';
import FAQ from './components/FAQ';
import Donate from './components/Donate';
import Hero from './components/Hero';
import Navigation from './components/Navbar';
import HamburgerMenu from './components/HamburgerMenu';

const App = () => {

  const faqData = [
    {
      question: 'What is Lorem Ipsum?',
      answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      question: 'Why do we use it?',
      answer: 'It is a long established fact that a reader will be distracted by the readable content.',
    },
    // Add more FAQ items as needed
  ];

  const links = [
    { text: 'Home', url: '/' },
    { text: 'About', url: '/about' },
    { text: 'Services', url: '/services' },
    { text: 'Contact', url: '/contact' },
  ];

  return (
    <Router>
      <Navigation links={links} />
      <Hero />
      <FAQ faqData={faqData} />
      <Donate />
    </Router>
  );
};

export default App;
