import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, } from '@fortawesome/free-solid-svg-icons'

function App() {
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

            <FontAwesomeIcon className='linkedin margin-text' icon={faLinkedin} />
            <FontAwesomeIcon className='linkedin margin-text' icon={faGithub} />
            <FontAwesomeIcon className='linkedin margin-text' icon={faEnvelope} />

          </div>


        </div>
        <div className='profile-image-container'  >
          <img className='photo' src="/sophie.png"></img>
        </div>

      </div>

    </div>
  );
}

export default App;
