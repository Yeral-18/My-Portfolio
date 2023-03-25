import React from 'react';
import '../css/Footer.css'
function Footer(props) {
  return (
    <footer>
      <div className='iconos-contacto'>
        <a href={props.href} target="_blank" rel="noopener noreferrer">
          <img className='icono-footer'
           src={require(`../img/icono-${props.icono}.png`)}
            alt={props.icono}
          />
          <p>
            {props.texto}
          </p>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
