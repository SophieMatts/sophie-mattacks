import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

function App() {
  const [hoverLinkedIn, setHoverLinkedIn] = useState(false)
  const toggleLinkedInHover = () => {
    setHoverLinkedIn(!hoverLinkedIn)
  }

  const [hoverGitHub, setHoverGitHub] = useState(false)
  const toggleGitHubHover = () => {
    setHoverGitHub(!hoverGitHub)
  }

  const [hoverMail, setHoverMail] = useState(false)
  const toggleMailHover = () => {
    setHoverMail(!hoverMail)
  }

  return (
    <div className='app-container'  >
      <div className='profile-container'  >
        <div className='profile-contents-container'  >
          <div className='name-div'>
            <div className='first-name-text margin-text'>I'm Sophie</div>
            <div className='margin-text'> A Web Developer! </div>
          </div>
          <div className='blurb-div'>
            <div className='margin-text'> London based developer with experience in: Ruby, Rails, JavaScript and React.  </div>
          </div>
          <div className='link-div'>

            <FontAwesomeIcon
              className={`icon margin-text ${hoverLinkedIn ? "fa-beat" : ""}`} icon={faLinkedin}
              onMouseEnter={toggleLinkedInHover}
              onMouseLeave={toggleLinkedInHover}
            />
            <FontAwesomeIcon
              className={`icon margin-text ${hoverGitHub ? "fa-beat" : ""}`} icon={faGithub}
              onMouseEnter={toggleGitHubHover}
              onMouseLeave={toggleGitHubHover}
            />
            <FontAwesomeIcon
              className={`icon margin-text ${hoverMail ? "fa-beat" : ""}`} icon={faEnvelope}
              onMouseEnter={toggleMailHover}
              onMouseLeave={toggleMailHover}

            />

          </div>


        </div>
        <div className='profile-image-container'  >
          <img className='photo' alt='sophie' src="/sophie.png"></img>
        </div>

      </div>

    </div>
  );
}

export default App;
