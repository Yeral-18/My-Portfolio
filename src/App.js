import React from 'react';
import AboutMe from './componentes/AboutMe';
import Projects from './componentes/Projects';
import './css/Projects.css';
import './css/Footer.css'
import Skills from './componentes/Skills';
import Footer from './componentes/Footer';
import './App.css'
// import 'Apps.css'

function App() {
  return (
    <div className="portfolio">
      <AboutMe />

    
      <Projects

      />

      <Skills />
    
      <div className='footer'>
     
        <Footer 
          href='https://www.linkedin.com/in/yeraldine-mosquera/'
          icono='linkedin'
          texto='Yeraldine Mosquera'

        />
        <Footer 
          href='mailto:yeraldinem718@gmail.com'
          icono='correo'
          texto='yeraldinem718@gmail.com'
        />
        <Footer 
          href='https://wa.me/573007528265'
          icono='whatsapp'
          texto='+57 300 752 8265'
          
        />
        <Footer 
          href='https://github.com/Yeral-18'
          icono='github'
          texto='Yeral-18'
        />
        
        </div>
        <div className='container-footer'>
      <p>&copy; 2023 Yeraldine Mosquera.</p>
      </div>
      </div>
  );
}

export default App;
