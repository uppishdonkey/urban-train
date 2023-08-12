import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'; 
import PortfolioCard from './PortfolioCard';


const Portfolio = () => {
  return (
  <div>
    <Header page="portfolio" />
    <h1>Portfolio</h1>
    <div className="portfolio-cards">
      <PortfolioCard 
      title="#"
      description="#"
      imageUrl="#"
      projectLink="#"
      githubLink="#"
      />
      <PortfolioCard 
      title="#"
      description="#"
      imageUrl="#"
      projectLink="#"
      githubLink="#"
      />
      <PortfolioCard 
      title="#"
      description="#"
      imageUrl="#"
      projectLink="#"
      githubLink="#"
      />
      <PortfolioCard 
      title="#"
      description="#"
      imageUrl="#"
      projectLink="#"
      githubLink="#"
      />
      <PortfolioCard 
      title="#"
      description="#"
      imageUrl="#"
      projectLink="#"
      githubLink="#"
      />
      <PortfolioCard 
      title="#"
      description="#"
      imageUrl="#"
      projectLink="#"
      githubLink="#"
      />
    </div>
    <Footer />
</div>
);
};

export default Portfolio;