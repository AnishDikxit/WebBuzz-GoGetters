import React from 'react';
import { CSSTransition } from 'react-transition-group';
import cricketBackground from '../assets/cricket-icon.jpg'; // Example path to cricket background
import cricketImage1 from '../assets/cricket-background.jpg'; // Example path to additional cricket image
import cricketImage2 from '../assets/cricket-logo.jpg'; // Example path to additional cricket image

const Home = () => {
  return (
    <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
      <section id="home" className="relative h-screen flex items-center justify-center text-white" style={{ backgroundImage: `url(${cricketBackground})`, backgroundSize: 'cover' }}>
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to XYZ Cricket Tournaments</h1>
          <p className="text-xl mb-8">Join us for exciting cricket tournaments in various formats.</p>
        </div>
        <img src={cricketImage1} alt="Cricket Image 1" className="absolute bottom-10 left-10 h-32 w-32 object-cover rounded-full border-4 border-white" />
        <img src={cricketImage2} alt="Cricket Image 2" className="absolute bottom-10 right-10 h-32 w-32 object-cover rounded-full border-4 border-white" />
      </section>
    </CSSTransition>
  );
};

export default Home;