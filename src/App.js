import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Education from './components/Education'
import Skills from './components/Skills'
import Footer from './components/Footer';
import Contacts from './components/Contacts';

function App() {
	return (
		<>
			<Navbar />
			<Header />
			<div className="container py-5" id="content">
				<AboutMe />
				<Education />
				<Skills />
				<Contacts />
			</div>
			<Footer />
		</>
	)
}

export default App
