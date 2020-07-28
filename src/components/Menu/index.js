import React from 'react';
import Logo from '../../assets/img/logo.png';
import Button from '../Button';
import './Menu.css';
import {Link} from 'react-router-dom';


function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Faelflix logo" />
            </Link>
            <Button as={Link} to='/cadastro/video'>
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu;