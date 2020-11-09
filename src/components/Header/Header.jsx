import React from 'react'

import Button from '../Button/Button'

import logo from './../../assets/logo_full_color.svg';
import './headerStyles.scss';

const Header = () => {

    return (
        <div className='contentHeader'>
            <div className='contentLogo'>
                <img src={logo} className='logo'/>
            </div>
            <div className='contentActions'>
                <a href='#'>Inicio</a>
                <a href='#'>Beneficios</a>

                <Button name='Registro' className='btn-border light'/>
            </div>
        </div>
    )
}

export default Header