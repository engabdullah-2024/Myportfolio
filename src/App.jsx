import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes, FaRegSmileBeam, FaWhatsapp } from 'react-icons/fa';
import CountUp from 'react-countup';
import me from './images/me.jpg';

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showTimer, setShowTimer] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [showGetReady, setShowGetReady] = useState(false);

  useEffect(() => {
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(false);
      setShowTimer(true);
    }, 3000); // Show welcome message for 3 seconds

    return () => clearTimeout(welcomeTimer);
  }, []);

  useEffect(() => {
    if (showTimer && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000); // Countdown timer

      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setShowTimer(false);
      setShowGetReady(true);
      const getReadyTimer = setTimeout(() => {
        setShowGetReady(false);
      }, 1000); // Show "Get Ready" for 1 second

      return () => clearTimeout(getReadyTimer);
    }
  }, [showTimer, countdown]);

  return (
    <div className="App font-sans antialiased">
      {showWelcome ? (
        <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
          <div className="text-center animate-fade-in">
            <FaRegSmileBeam className="text-6xl mb-4" />
            <h1 className="text-4xl">Welcome to my portfolio page</h1>
          </div>
        </div>
      ) : showTimer ? (
        <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
          <div className="text-center animate-fade-in">
            <h1 className="text-6xl">{countdown}</h1>
          </div>
        </div>
      ) : showGetReady ? (
        <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
          <div className="text-center animate-fade-in">
            <h1 className="text-6xl">Get Ready</h1>
          </div>
        </div>
      ) : (
        <>
          <Header />
          <Hero />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
          <a
            href="https://wa.me/252613169435"
            className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-3xl" />
          </a>
        </>
      )}
    </div>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-900 text-white p-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Abdullah Ali</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#hero" className="hover:text-gray-400 transition duration-300">Home</a>
          <a href="#skills" className="hover:text-gray-400 transition duration-300">Skills</a>
          <a href="#projects" className="hover:text-gray-400 transition duration-300">Projects</a>
          <a href="#contact" className="hover:text-gray-400 transition duration-300">Contact</a>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-gray-900 text-white p-6">
          <a href="#hero" className="block py-2 hover:text-gray-400 transition duration-300" onClick={toggleMenu}>Home</a>
          <a href="#skills" className="block py-2 hover:text-gray-400 transition duration-300" onClick={toggleMenu}>Skills</a>
          <a href="#projects" className="block py-2 hover:text-gray-400 transition duration-300" onClick={toggleMenu}>Projects</a>
          <a href="#contact" className="block py-2 hover:text-gray-400 transition duration-300" onClick={toggleMenu}>Contact</a>
        </nav>
      )}
    </header>
  );
};

const Hero = () => (
  <section id="hero" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 text-center">
    <div className="container mx-auto">
      <img src={me} alt="Profile" className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-white shadow-lg" />
      <h2 className="text-5xl font-bold mb-6">Abdullah Ali</h2>
      <p className="text-2xl">I'm a Passionate in Fullstack Dev and UI/UX Design. Enjoy building fast-performance and well-designed website interfaces using the latest technologies..</p>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="py-20 bg-gray-100">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="p-6 bg-white shadow-lg rounded-lg transition transform hover:scale-105 hover:bg-blue-500 duration-300 text-center hover:text-white">
          <h3 className="text-2xl font-semibold mb-4">Frontend Technologies</h3>
          <div className="text-gray-600 hover:text-white">
            <p>HTML</p>
            <CountUp end={100} duration={2.5} suffix="%" className="text-2xl font-bold" />
            <p>CSS</p>
            <CountUp end={90} duration={2.5} suffix="%" className="text-2xl font-bold" />
            <p>JavaScript</p>
            <CountUp end={85} duration={2.5} suffix="%" className="text-2xl font-bold" />
            <p>React</p>
            <CountUp end={80} duration={2.5} suffix="%" className="text-2xl font-bold" />
          </div>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg transition transform hover:scale-105 hover:bg-blue-500 duration-300 text-center hover:text-white">
          <h3 className="text-2xl font-semibold mb-4">Backend Technologies</h3>
          <div className="text-gray-600 hover:text-white">
            <p>Node.js</p>
            <CountUp end={75} duration={2.5} suffix="%" className="text-2xl font-bold" />
            <p>Express.js</p>
            <CountUp end={70} duration={2.5} suffix="%" className="text-2xl font-bold" />
            <p>MongoDB</p>
            <CountUp end={65} duration={2.5} suffix="%" className="text-2xl font-bold" />
            <p>SQL</p>
            <CountUp end={60} duration={2.5} suffix="%" className="text-2xl font-bold" />
          </div>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg transition transform hover:scale-105 hover:bg-blue-500 duration-300 text-center hover:text-white">
          <h3 className="text-2xl font-semibold mb-4">Graphic Design Technologies</h3>
          <div className="text-gray-600 hover:text-white">
            <p>Photoshop</p>
            <CountUp end={90} duration={2.5} suffix="%" className="text-2xl font-bold" />
            <p>Illustrator</p>
            <CountUp end={85} duration={2.5} suffix="%" className="text-2xl font-bold" />
            <p>Figma</p>
            <CountUp end={80} duration={2.5} suffix="%" className="text-2xl font-bold" />
            <p>Sketch</p>
            <CountUp end={75} duration={2.5} suffix="%" className="text-2xl font-bold" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-20">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="p-6 bg-white shadow-lg rounded-lg transition transform hover:scale-105 hover:bg-blue-500 duration-300 text-center hover:text-white">
          <h3 className="text-2xl font-semibold mb-4">E-commerce</h3>
          <a href="https://eco-market-psi.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzEFmWkVGSO0CW8GyvGak6XkQEugnHFdYxzQ&s" alt="E-commerce" className="w-full h-40 object-cover rounded-lg mb-4" />
          </a>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg transition transform hover:scale-105 hover:bg-blue-500 duration-300 text-center hover:text-white">
          <h3 className="text-2xl font-semibold mb-4">Calculator</h3>
          <a href="https://calculator-app-chi-vert.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl1tipCjJcAknNHMg28wegSVJGjNSY33olwg&s" alt="Calculator" className="w-full h-40 object-cover rounded-lg mb-4" />
          </a>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg transition transform hover:scale-105 hover:bg-blue-500 duration-300 text-center hover:text-white">
          <h3 className="text-2xl font-semibold mb-4">BMI</h3>
          <a href="https://bmi-calculator-ochre-three.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Tutc-pLoQU8L27NrMRezcYNY-m5Sz70zbg&s" alt="BMI" className="w-full h-40 object-cover rounded-lg mb-4" />
          </a>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg transition transform hover:scale-105 hover:bg-blue-500 duration-300 text-center hover:text-white">
          <h3 className="text-2xl font-semibold mb-4">Weather App</h3>
          <a href="https://cimilo-tracker.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src="https://media.istockphoto.com/id/1442507354/vector/weather-forecast-widget-icon-set.jpg?s=612x612&w=0&k=20&c=Q8pbgqeY7eOgpXKKF71AGQfvOX1-oak9OcavxTCLJgw=" alt="Weather App" className="w-full h-40 object-cover rounded-lg mb-4" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-20 bg-gray-100">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-8">Contact</h2>
      <p className="mb-8 text-lg">Feel free to reach out to me!</p>
      <div className="flex justify-center space-x-6">
        <a href="https://github.com/engabdullah-2024" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-800 hover:text-blue-600 transition duration-300 ">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/eng-abdullah-3abaa9311/" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-800 hover:text-blue-600 transition duration-300 ">
          <FaLinkedin />
        </a>
        <a href="mailto:your.enga95311@gmail.com" className="text-3xl text-gray-800 hover:text-blue-600 transition duration-300">
          <FaEnvelope />
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 text-white py-6 text-center">
    <p>&copy; 2024 Abdullah Ali</p>
  </footer>
);

export default App;