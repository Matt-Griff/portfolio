import './App.css'
import Name from './components/Name';
import Navbar from './components/Navbar';
import ProjectHolder from './components/ProjectsHolder';
import StackLoop from './components/StackLoop';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Education from './components/Education';

function App() {
  return (
    <>
      <Navbar />
      <Name />
      <AboutMe />
      <StackLoop />
      <ProjectHolder />
      <Education />
      <Footer />
    </>
  );
}

export default App;
