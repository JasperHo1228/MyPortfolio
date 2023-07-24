import React from 'react';
import Home from './Home/Home.js';
import Project from './Project/project.js';
import Experience from './Experience/Skills.js'
import './style/index.css'
function App() {
  return (
    <div class="container">
      <section className='homepage'><Home/></section>
      <section className="project"><Project/></section>
      <section className='skills'><Experience/></section>
    </div>
    );
}
export default App;
