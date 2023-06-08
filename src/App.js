import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import About from './components/About/About';
import Home from './components/Home/Home';
import Service from './components/Service/Service';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import Blog from './components/Blog/Blog';
import Resume from './components/Resume/Resume';
import Pricing from './components/Pricing/Pricing';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
        <Service />
        <Resume />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
    </>
  );
}

export default App;
