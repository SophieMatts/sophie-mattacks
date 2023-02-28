import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, } from '@fortawesome/free-solid-svg-icons'
import CVButton from '../../components/CVButton/CVButton';

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
    <div className="homepage-container">
      <div className='profile-container'  >
        <div className='profile-text-container'  >
          <div className='header-text-container'>
            <div className='first-name-text'>
              I'm Sophie
            </div>
            <div className='header2-text'>
              A Web Developer!
            </div>
          </div>
          <div className="break-container">
            <div className="break">
              _______________________________________
            </div>
          </div>
          <div className='blurb-container'>
            <div className="blurb-text-1">
              London based developer with experience in:
            </div>
            <div className="blurb-text-2">
              Ruby, Rails, JavaScript and React.
            </div>
            <div className="blurb-text-3">
              A developer with a passion for front end and design.
            </div>
            <div className="blurb-text-4">
              Feel free to drop them a line, or download their CV here...
            </div>
          </div>

          <div className="CVButton-container">
            <CVButton/>
          </div>

          <div className='link-container'>

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

        <div className='profile-image-container'>

          <div className="profile-img-col-1">
            <div className="col1-photo1"></div>
            <div className="col1-photo2"></div>
          </div>
          <div className="profile-img-col-2">
            <div className="col2-photo1"></div>
            <div className="col2-photo2"></div>
            <div className="col2-photo3"></div>
          </div>
          <div className="profile-img-col-3">
            <div className="col3-photo1"></div>
            <div className="col3-photo2"></div>
            <div className="col3-photo3"></div>
          </div>
          <div className="profile-img-col-4">
            <div className="col4-photo1"></div>
            <div className="col4-photo2"></div>
            <div className="col4-photo3"></div>
            <div className="col4-photo4"></div>
          </div>

        </div>

      </div>
    </div>

    </>
  );

}

export default Home;
