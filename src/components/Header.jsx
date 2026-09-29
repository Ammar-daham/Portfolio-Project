import { ReactTyped } from 'react-typed'
import { profile } from '../data/profile'

const Header = () => {
  return (
    <div className="header-wraper" id="header">
      <div className="main-info">
        <h1>{profile.hero.heading}</h1>
        <ReactTyped
          className="typed-text"
          strings={profile.hero.taglines}
          typeSpeed={50}
          backSpeed={60}
          loop
        />
        <a href="#contact" className="btn-main-offer">
          Contact me
        </a>
      </div>
    </div>
  )
}

export default Header
