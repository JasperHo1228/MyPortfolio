import React from 'react';
import { myRoute } from './component/Route.js';
import './style/index.css'
import Navbar from './component/navbar';

const myOwnRoute = ([...myRoute])

function App() {
  return (
    <div className='app'>
       <aside className='sidebar'> 
              <Navbar />
        </aside> 
        <main className='main_content'>
          {myOwnRoute.map((route)=>
                <section id={route.title}>{route.element}</section>
          )}
          </main>
    </div>
    );
}
export default App;
