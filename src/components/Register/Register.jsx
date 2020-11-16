import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import {
  MAX_LENGTH_INPUT,
  COUNTRIES,
  COUNTRY_INIT
} from '../../utils/constants'
import { registerUser, getProvinces } from '../../redux/registerDucks'
import './registerStyles.scss'

const Register = () => {
  const dispatch = useDispatch()
  const countryInfo = useSelector((store) => store.register.countryInfo)

  const { register, handleSubmit, watch, errors, formState } = useForm({
    mode: 'all'
  })

  const onSubmit = (data) => {
    delete data.password_repeat
    dispatch(registerUser(data))
    window.location.href = '/List'
  }

  const getMessage = (object) => {
    if (object?.type === 'required') {
      return <span>Este campo es obligatorio</span>
    }
    if (object?.type === 'maxLength') {
      return (
        <span>El campo no puede exceder los {MAX_LENGTH_INPUT} caracteres</span>
      )
    }
    if (object?.type === 'pattern') {
      return <span>{object.message}</span>
    }
    if (object?.type === 'minLength') {
      return <span>Mínimo 6 caracteres</span>
    }
    if (object?.type === 'validate') {
      return <span>Las contraseñas no coinciden</span>
    }
  }

  const getProvince = () => dispatch(getProvinces(watch('country')))

  return (
    <div id="register">
      <div className="contentForm">
        <h1>REGISTRO</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="content-input">
            <label>Nombres</label>
            <input
              name="name"
              ref={register({ required: true, maxLength: MAX_LENGTH_INPUT })}
            />
            {getMessage(errors.name)}
          </div>

          <div className="content-input">
            <label>Apellidos</label>
            <input
              name="surname"
              ref={register({ required: true, maxLength: MAX_LENGTH_INPUT })}
            />
            {getMessage(errors.surname)}
          </div>

          <div className="content-input">
            <label>Pais</label>
            <select
              name="country"
              ref={register({ required: true })}
              onChange={getProvince}
              defaultValue={COUNTRY_INIT}
            >
              {COUNTRIES.map((country, index) => (
                <option key={index} value={country.id}>
                  {country.country}
                </option>
              ))}
            </select>
            {getMessage(errors.country)}
          </div>

          <div className="content-input">
            <label>Provincia</label>
            <select name="province" ref={register({ required: true })}>
              {countryInfo.provinces.map((province, index) => (
                <option key={index} value={province.id}>
                  {province.province}
                </option>
              ))}
            </select>
            {getMessage(errors.province)}
          </div>

          <div className="content-input">
            <label>Correo</label>
            <input
              name="email"
              ref={register({
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Formato de correo inválido'
                }
              })}
            />
            {getMessage(errors.email)}
          </div>

          <div className="content-input">
            <label>Teléfono</label>
            <input
              name="phone"
              type="number"
              ref={register({ required: true })}
            />
            <span>{errors.phone?.message}</span>
          </div>

          <div className="content-input">
            <label>Contraseña</label>
            <input
              name="password"
              type="password"
              ref={register({
                required: true,
                pattern: {
                  value: /^[a-zA-Z0-9]+$/,
                  message: 'La contraseña debe tener números y letras'
                },
                minLength: {
                  value: 6
                }
              })}
            />
            {getMessage(errors.password)}
          </div>

          <div className="content-input">
            <label>Confirmar contraseña</label>
            <input
              name="password_repeat"
              type="password"
              ref={register({
                required: true,
                validate: (value) => value === watch('password')
              })}
            />
            {getMessage(errors.password_repeat)}
          </div>

          <div className="content-input">
            <label className="inline">
              <input
                name="terms"
                type="checkbox"
                ref={register({ required: true })}
              />
              Acepto los{' '}
              <a href="/TermsAndConditions" target="_blank">
                Terminos y condiciones
              </a>
            </label>
            <div>{getMessage(errors.terms)}</div>
          </div>

          <input
            type="submit"
            value="REGISTRARME"
            className="btn-send"
            disabled={!formState.isValid}
          />
        </form>
      </div>
    </div>
  )
}

export default Register
