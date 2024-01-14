import {useSpring, animated} from 'react-spring';
import {useEffect} from 'react';

const ProgressBar = ({goal, amountRaised}) => {
  const percentage = (amountRaised / goal) * 100;

  const { width } = useSpring({
    from: { width: '0%' },
    to: { width: `${percentage}%` },
    config: { duration: 1000 }, // Animation duration in milliseconds
  });

  useEffect(() => {
    // Trigger animation on page load
    width.start();
  }, [width]);

  return (
    <div className="progress-container">
      <div className="progress-bar">
        <animated.div className="progress" style={{ width }} />
      </div>
      <div className="progress-info">
        <p>
          Raised: ${amountRaised} / ${goal}
        </p>
        <p>{percentage.toFixed(2)}%</p>
      </div>
    </div>
  )
}

export default ProgressBar