import './App.css'
import { BrowserRouter as Router} from 'react-router-dom';
import FAQ from './components/FAQ';
import Donate from './components/Donate';
import Hero from './components/Hero';

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

  return (
    <Router>
      <Hero />
      <FAQ faqData={faqData} />
      <Donate />
    </Router>
  );
};

export default App;
