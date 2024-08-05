import React from 'react';
import './About.css';
import img1 from '../Assets/image 1.png';
import img2 from '../Assets/image 2.png';

const About = () => {
  return (
    <div className="about-us" id="about-us">

      <div className="about-us-content">
        <div className="about-us-image">
          <img src={img2} alt="Web & Mobile App Development" className='Image2' />
        </div>
        <div className="about-us-text">
          <h2>Web & Mobile App Development</h2>
          <p>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
          <button className="about-button">Learn More</button>
        </div>
      </div>

      <div className="about-us-content">
        <div className="about-us-image Image1">
          <img src={img1} alt="Digital Strategy Consulting" className='Image1'/>
        </div>
        <div className="about-us-text">
          <h2>Digital Strategy Consulting</h2>
          <p>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
          <button className="about-button">Learn More</button>
        </div>
      </div>

    </div>
  );
}

export default About;
