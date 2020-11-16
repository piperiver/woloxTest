import React from 'react'
import twitter from './../../assets/twitter_logo.svg';
import Button from '../Button/Button'
import './woloxersStyles.scss';

const WoloxersSection = () => {
    
    return (
        <section id="woloxers">
            <div className='woloxersPeoples'>
                <div className='content-text-woloxers'>
                    <div className='text-woloxers'>
                        <div>
                            <span className='extra-bold color-green font-lg'>350 + </span>
                            <span className='extra-bold color-blue font-lg'>Woloxers</span>
                        </div>
                        <div className='color-white link-tw'>
                            <img src={twitter} className='twitter'/>
                            @Wolox
                        </div>
                        <Button name='Siguenos' className='transparent' blank={true} redirect='https://twitter.com/wolox'/>
                    </div>
                </div>
            </div>
            <div className='contentIdeas bold'>
                <div className='font-md'>
                    Trabajamos para<br/>
                    <span className='extra-bold color-blue'>convertir </span>
                    <span className='extra-bold color-green'>ideas</span> en <br/>
                    productos.
                </div>
            </div>
        </section>
    )
}

export default WoloxersSection