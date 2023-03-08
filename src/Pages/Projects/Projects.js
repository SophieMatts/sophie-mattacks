import React from 'react';
import Card from '../../components/Card/Card';


const Projects = () => {

  return (
    <>
    <div className="projects-container">
      <div className="projects-header-container">
        <div className="p-header">Projects</div>
      </div>
      <div className="card-section-container">
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
    </>
  );
};



export default Projects;
