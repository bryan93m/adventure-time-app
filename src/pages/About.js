import megPic from "../pages/assets/meadventuretime.png"
import lemon from "../pages/assets/lemongrab.jpg"
import bryanPic from "../pages/assets/bryanPic.png"
import TeejayPic from "../pages/assets/TeejayPic.png"

const About = () => {
  return (
    <div className='about'>
        
        <div className='about__info'>
            <h3>ABOUT PAGE</h3>
            <h3>Adventure Time Web App</h3>
        
            <p>Flatiron School Project Created By:</p>
            <div >
              <ul className="profiles">
                  <li className="person">
                    <h4>Megan Moulos</h4>
                    <img className="profile-pic" src={megPic} alt="megan" />
                    <a href="https://github.com/meganmoulos">Megan's Github</a>
                  </li>
                  <li className="person">
                    <h4>Teejay Dixon</h4>
                    <img className="profile-pic" src={TeejayPic} alt="lemongrab" />
                    <a href="https://github.com/TeejayDixon">Teejay's Github</a>
                  </li>
                  <li className="person">
                    <h4>Bryan Meadows</h4>
                    <img className="profile-pic" src={bryanPic} alt="Bryan" />
                    <a href="https://github.com/bryan93m">Bryan's Github</a>
                  </li>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default About