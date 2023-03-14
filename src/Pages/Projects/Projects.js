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
          <Card img="" title="Clarity" contents="This is the contents for Clarity" plink="https://github.com/arhamzubair00/Clarity_app#readme" />
          <Card title="MyBasket" contents="This is the contents for MyBasket" plink="https://github.com/SophieMatts/my_basket#readme" />
        </div>
      </div>
    </>
  );
};



export default Projects;
