import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  return (
	<nav
	  className="navbar navbar-expand-lg navbar-light"
	  style={{ background: 'black' }}
	>
	  <div className="container">
		<button
		  className="navbar-toggler"
		  type="button"
		  data-toggle="collapse"
		  data-target="#navbarSupportedContent"
		  aria-controls="navbarSupportedContent"
		  aria-expanded="false"
		  aria-label="Toggle navigation"
		>
		  <FontAwesomeIcon icon={faBars} style={{ color: '#ffffff' }} />
		</button>
		<div className="collapse navbar-collapse" id="navbarSupportedContent">
		  <ul className="navbar-nav mr-auto">
			<li className="nav-item active">
			  <a className="nav-link" href="#header">
				Home
			  </a>
			</li>
			<li className="nav-item">
			  <a className="nav-link" href="#about-me">
				About me
			  </a>
			</li>
			<li className="nav-item">
			  <a className="nav-link" href="#experience">
				Experience
			  </a>
			</li>
			<li className="nav-item">
			  <a className="nav-link" href="#skills">
				Skills
			  </a>
			</li>
			<li className="nav-item">
			  <a className="nav-link" href="#education">
				Education
			  </a>
			</li>
		  </ul>
		  <ul className="navbar-nav ml-auto socialM">
			<li className="nav-item">
			  <a
				href="https://www.linkedin.com/in/ammar-daham/"
				className="nav-link"
				target="_blank"
				rel="noreferrer"
			  >
				<FaLinkedin size={30} style={{ color: '#0e76a8', background: 'white' }} />
			  </a>
			</li>
			<li className="nav-item">
			  <a
				href="https://github.com/Ammar-daham"
				className="nav-link"
				target="_blank"
				rel="noreferrer"
			  >
				<FaGithubSquare size={30} style={{ color: '#ffffff' }} />
			  </a>
			</li>
		  </ul>
		</div>
	  </div>
	</nav>
  );
};

export default Navbar;
