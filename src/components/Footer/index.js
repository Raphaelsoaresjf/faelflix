import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.instagram.com/faelsoaresjf/?hl=pt-br" target="_blank">
        <img src={Logo} alt="Logo Faelflix"/>
      </a>
      <p>
        Orgulhosamente criado por
        {' '}
        <a href="https://www.instagram.com/faelsoaresjf/?hl=pt-br" target="_blank">
          Raphael Soares xD
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
