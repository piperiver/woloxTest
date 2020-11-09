import React from 'react'
import hero from './../../assets/Hero/Ic_ilustra_Hero@3x.png';
import './homeStyles.scss';

const HomeSection = () => {
    
    return (
        <section id="home">
            <div className='contentWelcome'>
                Bienvenido a tu<br/>
                <span className='bold'>Entrevista T&eacute;cnica</span> en<br/>
                <span className='extra-bold color-green'>Wolox</span>
            </div>
            <div className='contentComputer'>
                <img src={hero} className='logo'/>
            </div>
        </section>
    )
}

export default HomeSection