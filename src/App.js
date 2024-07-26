import React from 'react';
import { useEffect, useMemo, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Contacts from './components/Contacts';
import Experience from './components/Experience';

function App() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
	initParticlesEngine(async (engine) => {
	  await loadSlim(engine);
	}).then(() => {
	  setInit(true);
	});
  }, []);

  const options = useMemo(
	() => ({
	  particles: {
		links: {
		  color: "#ffffff",
		  distance: 150,
		  enable: true,
		  opacity: 0.5,
		  width: 1,
		},
		move: {
		  direction: "none",
		  enable: true,
		  outModes: {
			default: "bounce",
		  },
		  random: false,
		  speed: 6,
		  straight: false,
		},
		number: {
		  density: {
			enable: true,
		  },
		  value: 80,
		},
		opacity: {
		  value: 0.5,
		},
		shape: {
		  type: "square",
		},
		size: {
		  value: { min: 1, max: 6 },
		},
	  },
	  fullScreen: { enable: false},
	}),
	[],
  );

  return (
	<>
		<Particles
			id="tsparticles"
		  	className="particles-canvas"
		  	options={options}
		/>
	  <Navbar />
	  <Header />
	  <div className="container py-5" id="content">
		<AboutMe />
		<Experience />
		<Skills />
		<Education />
		<Contacts />
	  </div>
	  <Footer />
	</>
  );
}

export default App;
