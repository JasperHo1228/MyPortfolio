import React, { useState,useEffect} from 'react';
import { myRoute } from './component/Route.js';
import './style/index.css';
import Navbar from './component/navbar';
import MobileNavBar from './component/mobileNavBar.js';
import Footer from './Footer/Footer.js';
import { ToastContainer } from 'react-toastify';

const myOwnRoute = [...myRoute];


function App() {

  const [isNavbarOpen, setNavbarOpen] = useState(null);
  const togglerNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  useEffect(() => {
    // Add event listener to close the sidebar when clicking outside of it
    const handleOutsideClick = (e) => {
      if (!e.target.closest('#open') && isNavbarOpen !== null) {
        setNavbarOpen(false); 
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isNavbarOpen]);


  // Rest of your component code
  return (
    <div className='app'>
    <aside className='sidebar'>
        <Navbar isNavbarOpen={isNavbarOpen} togglerNavbar={togglerNavbar} />
      </aside>
      <div className='mobileNavBar'>
        <MobileNavBar isNavbarOpen={isNavbarOpen} togglerNavbar={togglerNavbar} />
      </div>
      <main className='main_content'>
        {myOwnRoute.map((route) => (
          <section id={route.title} key={route.id}>
            {route.element}
          </section>
        ))}
        <ToastContainer theme='colored' autoClose={2500} />
        <div>
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
