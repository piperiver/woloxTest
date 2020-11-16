import React from 'react'
import { Section } from 'react-scroll-section'
import hero from './../../assets/Hero/Ic_ilustra_Hero@3x.png'
import './homeStyles.scss'

const HomeSection = () => {
  return (
    <Section id="home">
      <div className="contentWelcome font-md">
        <div className="fade-in-hello">
          Bienvenido a tu
          <br />
          <span className="bold">Entrevista T&eacute;cnica</span> en
          <br />
          <span className="extra-bold color-green">Wolox</span>
        </div>
      </div>
      <div className="contentComputer">
        <img src={hero} className="logo fade-in-hello" />
      </div>
    </Section>
  )
}

export default HomeSection
