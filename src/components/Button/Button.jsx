import React from 'react'
import { useDispatch } from 'react-redux'
import { buttonSection } from '../../redux/buttonDucks'
import './buttonStyles.scss'

const Button = (params) => {
  const dispatch = useDispatch()

  return (
    <button
      onClick={() => dispatch(buttonSection(params))}
      className={params.className}
    >
      {params.name}
    </button>
  )
}

export default Button
