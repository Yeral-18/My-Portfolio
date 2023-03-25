import React from 'react';
import '../css/Skills.css'

function Skills() {
  return (
    <section className="skills">
      <div className='container-img'>
        <img
          src={require(`../img/skills.png`)}
          alt='skills-saludar'
        />
      </div>
     
      <div className='container-skills'>
      <h2>Habilidades</h2>
      
      <ul>
        <li><i></i>HTML5</li>
        <li><i></i>CSS3</li>
        <li><i></i>JavaScript</li>
        <li><i></i>React</li>
      </ul>
      </div>
    </section>
  );
}

export default Skills;
