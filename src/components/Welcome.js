import React from 'react';
import Header from '../components/Header'; // Adjust the path based on your file structure
import Footer from '../components/Footer'; // Adjust the path based on your file structure


const Welcome = () => {
  return (
    <div>
      <Header page="welcome" />
      <div className="welcome-page">
        <h1>About Me</h1>
        <p>As a new web developer, I am a creative problem-solver with a passion for applying and growing my skills.</p>
        <p>######
        </p>
        <aside className="aside">
          <img src="/headshot2.png" alt="Profile" />
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default Welcome;