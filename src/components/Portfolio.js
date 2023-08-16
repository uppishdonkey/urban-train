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
      title="Boredom Killer"
      description="###"
      imageUrl="project1scrnshot.png"
      projectLink="https://mahlheim.github.io/fuzzy-octo-succotash"
      githubLink="https://github.com/mahlheim/fuzzy-octo-succotash"
      />
      <PortfolioCard 
      title="JAM Diner"
      description="###"
      imageUrl="project2scrnshot.png"
      projectLink="https://ancient-cove-48096-c1c1d1e494f0.herokuapp.com/"
      githubLink="https://github.com/leamr10/supreme-guacamole"
      />
      <PortfolioCard 
      title="The Golden Spatula"
      description="###"
      imageUrl="project3scrnshot.png"
      projectLink="#"
      githubLink="https://github.com/sam-stikeleather/Group-Project-3"
      />
    </div>
    <Footer />
</div>
);
};

export default Portfolio;