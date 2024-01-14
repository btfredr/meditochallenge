import ProgressBar from 'Progressbar'

const Hero = () => {
    return (
      <div className="hero-container">
        <h1>Flexible Fundraising Cause</h1>
        <p>Empower change through your support</p>
        <ProgressBar />
        <button className="hero_btn">Donate Now</button>
      </div>
    );
  };
  
  export default Hero;