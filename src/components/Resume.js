import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'; // Adjust the path based on your file structure

const Resume = () => {
  const downloadResume = () => {
    // Define the URL to your resume PDF
    const resumeUrl = 'https://docs.google.com/document/d/1I1J-WAj0K_KDeIhwdAws0cEK2TBcfO5I/edit?usp=sharing&ouid=101851951958766230168&rtpof=true&sd=true'; // Replace with the actual URL
    
    // Trigger the download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.target = 'https://docs.google.com/document/d/1I1J-WAj0K_KDeIhwdAws0cEK2TBcfO5I/edit?usp=sharing&ouid=101851951958766230168&rtpof=true&sd=true'; // Open in a new tab
    link.download = '/resume.pdf'; // Specify the filename for download
    link.click();
  };

  return (
    <div className="resume-page">
      <div>
      <Header page="resume" />
      <div className="row">
      <h1>Proficiencies</h1>
      <h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>Git</li>
          <li>Bootstrap</li>
        </ul>
      </h3>
      </div>
      <div className="resume">
        <a href="https://docs.google.com/document/d/1I1J-WAj0K_KDeIhwdAws0cEK2TBcfO5I/edit?usp=sharing&ouid=101851951958766230168&rtpof=true&sd=true" target="_blank" rel="noreferrer">
        <img src="/resume.pdf" alt="resume" />
        </a>
      </div>
      <div className="row">
      <div className="btn" onClick={downloadResume}>Download Resume</div>
      </div>
      <Footer />
    </div>
    </div>
  );
};



export default Resume;
