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

          <Card
          imageUrl= {'/projects_card.png'}
          title="Clarity"
          language="Language: Ruby-on-Rails, JavaScript, HTML, SCSS"
          description="A diary for the Neurodiverse."
          plink="https://github.com/arhamzubair00/Clarity_app#readme"
          />

          <Card
          imageUrl= {'/projects_card.png'}
          title="MyBasket"
          language="Language: Ruby-on-Rails, JavaScript, HTML, SCSS"
          description="Shopping list app with Gmail User Sign-In."
          plink="https://github.com/SophieMatts/my_basket#readme"
          />

          <Card
          imageUrl= {'/projects_card.png'}
          title="Secret Santa"
          language="Language: Ruby-on-Rails, JavaScript, HTML, CSS"
          description="A Secret Santa Generator for fun and festive gifting."
          plink="https://github.com/SophieMatts/Secret_Santa_App#readme"
          />

          <Card
          imageUrl= {'/projects_card.png'}
          title="To-Do List"
          language="Language: TypeScript, JavaScript, HTML, CSS"
          description="A simple to-do list for any task."
          plink="https://github.com/SophieMatts/Angular-To-Do-List-"
          />

          <Card
          imageUrl= {'/projects_card.png'}
          title="Portfolio "
          language="Language: React, JavaScript, HTML, CSS"
          description="My personal portfolio website."
          plink="https://github.com/SophieMatts/sophie-mattacks"
          />

        </div>
      </div>
    </>
  );
};



export default Projects;
