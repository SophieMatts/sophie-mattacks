import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, } from '@fortawesome/free-solid-svg-icons'

function Home() {
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
    <>
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

            <a href="https://www.linkedin.com/in/sophie-mattacks-88501659/">
              <FontAwesomeIcon
                className={`icon margin-text ${hoverLinkedIn ? "fa-beat" : ""}`} icon={faLinkedin}
                onMouseEnter={toggleLinkedInHover}
                onMouseLeave={toggleLinkedInHover}
              />
            </a>

            <a href="https://github.com/SophieMatts">
              <FontAwesomeIcon
                className={`icon margin-text ${hoverGitHub ? "fa-beat" : ""}`} icon={faGithub}
                onMouseEnter={toggleGitHubHover}
                onMouseLeave={toggleGitHubHover}
              />
            </a>

            <a href="mailto:mail@sophiemattacks.com">
              <FontAwesomeIcon
                className={`icon margin-text ${hoverMail ? "fa-beat" : ""}`} icon={faEnvelope}
                onMouseEnter={toggleMailHover}
                onMouseLeave={toggleMailHover}
              />
            </a>

          </div>


        </div>
        <div className='profile-image-container'  >
          <img className='photo' alt='sophie' src="/sophie.png"></img>
        </div>

      </div>

    </>
  );

}

export default Home;
