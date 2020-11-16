import React from 'react'
import { Section } from 'react-scroll-section'
import { BENEFITS } from '../../utils/constants'
import './benefitsStyles.scss'

const BenefitsSection = () => {
  return (
    <Section id="benefits">
      <h2>
        Entre los beneficios que ofrecemos se encuentran{' '}
        <span className="color-blue">;)</span>
      </h2>
      <div className="contentBenefits">
        {BENEFITS.map((benefit, index) => (
          <div key={benefit.img} className="benefitItem">
            <img src={benefit.img} className="benefitImage zoom" />
            <div className="benefitText">{benefit.text}</div>
          </div>
        ))}
      </div>
      <div className="line"></div>
    </Section>
  )
}

export default BenefitsSection
