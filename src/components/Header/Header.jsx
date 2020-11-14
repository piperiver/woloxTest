import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router';
import Button from '../Button/Button'
import {useScrollSection} from 'react-scroll-section';
import logo from './../../assets/logo_full_color.svg';
import starActive from './../../assets/star_active.svg'
import './headerStyles.scss';


const Header = () => {
    const location = useLocation();
    const store = useSelector(store => store)
    const auth = store.auth;

    const favorites = localStorage.getItem('favorites');
    let totalFavorites = 0;
    if(favorites !== null){
        totalFavorites = JSON.parse(favorites).length;
    }
    
    const [isSticky, setSticky] = useState(false);
    const homeSection = useScrollSection('home');
    const BenefitSection = useScrollSection('benefits');

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

    let bulletFav = '';
    if(totalFavorites > 0){
        bulletFav = (<span className="bulletFav">{totalFavorites}</span>);
    }

    return (
        <div className={(isSticky)? 'contentHeader sticky' : 'contentHeader'}>
            <div className='contentLogo'>
                <img src={logo} className='logo zoom'/>
            </div>
            
            {location.pathname == '/' &&
                <div className='contentActions'>
                    <a onClick={homeSection.onClick} selected={homeSection.selected}>Inicio</a>
                    <a onClick={BenefitSection.onClick} selected={BenefitSection.selected}>Beneficios</a>
                    {bulletFav}
                    {auth.login === false &&
                        <Button name='Registro' redirect='/Register' className='light'/>
                    }
                    {auth.login &&
                        <Button name='Listado' redirect='/List' className='light'/>
                    }

                </div>
            }
            
            {location.pathname !== '/' &&
                <div className='contentActions'>
                    {bulletFav}
                    <Button name='Volver al inicio' redirect='/' className='light'/>
                </div>
            }
        </div>
    )
}

export default Header