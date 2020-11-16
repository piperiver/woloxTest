import React from 'react'
import woloxIcon from './../../assets/Ic_Wolox_Footer.svg'
import './thanksStyles.scss'
import Button from '../Button/Button'

const ThanksSection = () => {
  return (
    <section id="thanks">
      <h2 className="thanks extra-bold font-lg">
        Gracias por <span className="color-blue">completar el ejercicio</span>
      </h2>
      <h2 className="font-md">Te invitamos a ver más información</h2>
      <Button
        name="Conocer más"
        className="dark"
        blank={true}
        redirect="https://www.wolox.com.ar/"
      />
      <div>
        <img src={woloxIcon} className="iconWolox zoom" />
      </div>
    </section>
  )
}

export default ThanksSection
