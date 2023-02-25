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
            <div className="blurb-text">
              London based developer with experience in:
            </div>
            <div className="blurb-text">
              Ruby, Rails, JavaScript and React.
            </div>
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
          <div className="profile-img-s1">
            <div className="profile-img-s1-left">
              <div className="photo1"></div>
            </div>
            <div className="profile-img-s1-right">
              <div className="photo2"></div>
              <div className="photo3"></div>
            </div>
          </div>
          <div className="profile-img-s2">
            <div className="photo4"></div>
            <div className="photo5"></div>
            <div className="photo6"></div>
          </div>



        </div>

      </div>
    </div>

    </>
  );

}

export default Home;
