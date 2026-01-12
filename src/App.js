import './App.css'
import Name from './components/Name';
import Navbar from './components/Navbar';
import ProjectHolder from './components/ProjectsHolder';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Skill from './components/Skill';

function App() {
  return (
    <>
      <Navbar />
      <Name />
      <AboutMe />
      <Skill />
      <ProjectHolder />
      <Education />
      <Footer />
    </>
  );
}

export default App;
