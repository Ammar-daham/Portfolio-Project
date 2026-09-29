import { ReactTyped } from 'react-typed'

const Header = () => {
  return (
    <div className="header-wraper" id="header">
      <div className="main-info">
        <h1>Hi, I&apos;m Ammar Daham</h1>
        <ReactTyped
          className="typed-text"
          strings={[
            'Full-stack developer',
            'React · Node.js · Java',
            'Helsinki, Finland',
          ]}
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
