import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router';
import Button from '../Button/Button'
import {useScrollSection} from 'react-scroll-section';
import logo from './../../assets/logo_full_color.svg';
import './headerStyles.scss';


const Header = () => {
    const location = useLocation();

    const infoStore = useSelector(store => store.auth)
    console.log(infoStore);

    const [isSticky, setSticky] = useState(false);

    const handleScroll = () => {
        const sticky = (window.scrollY > 0);
        setSticky(sticky);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        };
    }, []);

    const homeSection = useScrollSection('home');
    const BenefitSection = useScrollSection('benefits');

    return (
        <div className={(isSticky)? 'contentHeader sticky' : 'contentHeader'}>
            <div className='contentLogo'>
                <img src={logo} className='logo zoom'/>
            </div>
            <div className='contentActions'>
                {location.pathname == '/' &&
                    <a onClick={homeSection.onClick} selected={homeSection.selected}>Inicio</a>
                }
                {location.pathname == '/' &&
                    <a onClick={BenefitSection.onClick} selected={BenefitSection.selected}>Beneficios</a>
                }
                {location.pathname == '/' &&
                    <Button name='Registro' redirect='/Register' className='light'/>
                }
                {location.pathname !== '/' &&
                    <Button name='Volver al inicio' redirect='/' className='light'/>
                }

            </div>
        </div>
    )
}

export default Header