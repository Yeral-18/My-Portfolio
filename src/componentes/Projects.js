import React from 'react';
import '../css/Projects.css';
import { useTransition, animated } from 'react-spring';

function Projects() {
  const projectsList = [
    { href: 'https://yeral-18.github.io/PokeDex/', image: 'pokeball', title: 'Pokeball' },
    { href: 'https://yeral-18.github.io/Tic-Tac-Toe/', image: 'triqui', title: 'Triqui' },
    { href: 'https://yeral-18.github.io/Watch/', image: 'watch', title: 'Watch' }
  ];
  
  const transitions = useTransition(projectsList, {
    from: { opacity: 0, transform: 'translate3d(-50px, 0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    delay: 2000,
    trail: 1000
  });

  return (
    <div className='container-project'>
      {transitions((style, project) => (
        <animated.div style={style} key={project.href}>
          <div className="project">
            <a href={project.href} target="_blank" rel="noopener noreferrer">
              <img className="project-img" src={require(`../img/icono-${project.image}.png`)} alt="project" />
              <div className="project-title">{project.title}</div>
            </a>
          </div>
        </animated.div>
      ))}
      {projectsList.length === 0 && <div>No projects to show</div>}
    </div>
  );
}

export default Projects;
