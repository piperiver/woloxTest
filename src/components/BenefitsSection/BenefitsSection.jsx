import React from 'react'
import hour from './../../assets/Ic_Hour.svg';
import homeOffice from './../../assets/Ic_HomeOffice.svg';
import workshops from './../../assets/Ic_Workshops.svg';
import snacks from './../../assets/Ic_DrinkSnacks.svg';
import laptop from './../../assets/Ic_laptop.svg';
import brain from './../../assets/Ic_brain.svg';
import './benefitsStyles.scss';

const BenefitsSection = () => {
    
    const benefits = [
        {
            img: hour,
            text: 'Flexibilidad Horaria',
        },
        {
            img: homeOffice,
            text: 'Home Office',
        },
        {
            img: workshops,
            text: 'Capacitaciones y workshops',
        },
        {
            img: snacks,
            text: 'Snacks, frutas y bebidas gratis',
        },
        {
            img: laptop,
            text: 'Semana Remota',
        },
        {
            img: brain,
            text: 'Trabajar en ultimas tecnologías',
        }
    ];


    return (
        <section id="benefits">
            <h2>Entre los beneficios que ofrecemos se encuentran <span className='color-blue'>;)</span></h2>
            <div className='contentBenefits'>
                {benefits.map((benefit, index) =>
                    <div key={index} className="benefitItem">
                        <img src={benefit.img} className="benefitImage zoom" />
                        <div className="benefitText">{benefit.text}</div>
                    </div>
                )}
            </div>
            <div className="line"></div>
        </section>
    )
}

export default BenefitsSection