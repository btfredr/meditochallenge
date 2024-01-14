import ProgressBar from './ProgressBar'
import Nav from './Nav'

const Hero = () => {
    const goal = 10000;
    const amountRaised = 6450;


    return (
      <div className="hero-container">
      <Nav />
        <h1>Flexible Fundraising Cause</h1>
        <p>Empower change through your support</p>
        <ProgressBar goal={goal} amountRaised={amountRaised} />
        <button className="hero_btn">Donate Now</button>
      </div>
    );
  };
  
  export default Hero;