import React from 'react';

import { myRoute } from './component/Route.js';
import './style/index.css'


const myOwnRoute = ([...myRoute])

function App() {
  return (
    <div className='all'>
          {myOwnRoute.map((route)=>
                <section id={route.title}>{route.element}</section>
          )}

    </div>
    );
}
export default App;
