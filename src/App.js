import './App.css'
import Home from './Home'
import About from './About';
import Project from './Project';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './Components/Logo/Logo';
import BackgroundAnimation from './Components/BackgroundAnimation'
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <div className='d-block gradient_background' >
        <Logo />
        <BackgroundAnimation />
        <Home />
        <About />
        <Project />
        <Footer />
      </div>
    </>
  );
}

export default App;
