import { Register } from '../api/register'
import { PROVINCES, COUNTRY_INIT } from '../utils/constants'

/**
 * CONSTANTS
 */
const initData = {
  userInfo: {
    name: '',
    surname: '',
    country: '',
    province: '',
    email: '',
    phone: '',
    password: '',
    terms: false,
    token: ''
  },
  countryInfo: PROVINCES[COUNTRY_INIT]
}

/**
 * TYPES
 */
const CHANGE_PROVINCES = 'CHANGE_PROVINCES'
const REGISTER_USER = 'REGISTER_USER'

/**
 * REDUCERS
 * @param {*} state
 * @param {*} action
 */
export default function reducer (state = initData, action = []) {
  switch (action.type) {
    case CHANGE_PROVINCES:
      return { ...state, countryInfo: action.provinces }

    case REGISTER_USER:
      return { ...state, userInfo: action.userInfo }

    default:
      return state
  }
}

/**
 * ACTIONS
 */
export const registerUser = (userInfo) => async (dispatch, getState) => {
  try {
    const response = await Register(userInfo)
    if (typeof response.token === 'undefined') {
      return
    }

    localStorage.setItem('user', JSON.stringify(userInfo))
    localStorage.setItem('token', response.token)

    userInfo.token = response.token

    dispatch({
      type: REGISTER_USER,
      userInfo: userInfo
    })
  } catch (error) {
    console.log(error)
  }
}

export const getProvinces = (country) => async (dispatch, getState) => {
  const provinces = PROVINCES[country]
  dispatch({
    type: CHANGE_PROVINCES,
    provinces: provinces
  })
}
