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
          <div className="language-header-ruby">
            <h1>Ruby-On-Rails</h1>
          </div>

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

          <div className="language-header-react">
            <h1>React</h1>
          </div>

          <Card
          imageUrl= {'/projects_card.png'}
          title="Portfolio"
          language="Language: React, JavaScript, HTML, CSS"
          description="My personal portfolio website."
          plink="https://github.com/SophieMatts/sophie-mattacks"
          />

          <Card
          imageUrl= {'/projects_card.png'}
          title="Media-Info-System"
          language="Language: React, JavaScript, HTML, CSS"
          description="A Media Information System that displays an easily readable user interface via JSON."
          plink="https://github.com/SophieMatts/media-info-system#readme"
          />

          <Card
          imageUrl= {'/projects_card.png'}
          title="To-do List"
          language="Language: React, JavaScript, HTML, CSS"
          description="A simple to-do list to add, edit and delete tasks."
          plink="https://github.com/SophieMatts/React-TodoList#readme"
          />

          <Card
          imageUrl= {'/projects_card.png'}
          title="Calculator"
          language="Language: React, JavaScript, HTML, CSS"
          description="A calculator that handles input changes, user interaction, and complex calculations."
          plink="https://github.com/SophieMatts/React-Calculator#readme"
          />


        </div>
      </div>
    </>
  );
};



export default Projects;
