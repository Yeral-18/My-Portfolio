import React from 'react';
import '../css/About-Me.css'
// import presentationVideo from '../img/about-me.png';
import RotatingText from 'react-rotating-text';
import { useSpring, animated } from '@react-spring/web';

function AboutMe() {
  const springs = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <animated.section className="about-me" style={springs}>
      <div className="container-video">
        <img
          className="video-presentation"
          src={require(`../img/about-me.png`)}
          alt='about me img'
          // autoPlay={true}
          // controls={false}
          // loop={true}
          // playbackRate={3}
        ></img>
      </div>
      <div className="about-me--container">
        <h2>Hola, mi nombre es Yeraldine Mosquera</h2>
        <h3>Desarrolladora de Software</h3>
        <div className="about-me--texto">
          <RotatingText
            items={[
              'Estoy apacionada con la tecnología y el desarrollo de software con conocimientos en lenguajes de programación como JavaScript. Mi amor por la programación me ha llevado a invertir tiempo y esfuerzo en proyectos personales. Soy una persona creativa y curiosa que busca constantemente nuevas formas de mejorar sus habilidades y aprender más sobre el mundo de la programación.',
            ]}
            typingInterval={40}
            eraseMode="overwrite"
          />
        </div>
        {/* <a href="www.google.com" className="btn-primary">Ver proyectos</a> */}
      </div>
    </animated.section>
  );
}

export default AboutMe;
