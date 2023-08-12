import React from 'react';
import { myRoute } from './component/Route.js';
import './style/index.css'
import Navbar from './component/navbar';
import Footer from './Footer/Footer.js'
import { ToastContainer } from 'react-toastify';
const myOwnRoute = ([...myRoute])

function App() {
  return (
    <div className='app'>
       <aside className = 'sidebar'> 
              <Navbar />
        </aside> 
        <main className='main_content'>
          {myOwnRoute.map((route)=>
                <section id={route.title}>{route.element}</section>
          )}
            <ToastContainer theme='colored' autoClose={2500}/>
            <div><Footer/></div>
          </main>
        
    </div>
    );
}
export default App;
