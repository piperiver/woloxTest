import { Register } from '../api/register'

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
  countrySelected: ''
}

/**
 * TYPES
 */
const COUNTRY_SELECTED = 'COUNTRY_SELECTED'
const REGISTER_USER = 'REGISTER_USER'

/**
 * REDUCERS
 * @param {*} state
 * @param {*} action
 */
export default function reducer (state = initData, action = []) {
  switch (action.type) {
    case COUNTRY_SELECTED:
      return { ...state, countrySelected: action.countrySelected }

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

export const setCountrySelected = (country) => async (dispatch, getState) => {
  dispatch({
    type: COUNTRY_SELECTED,
    countrySelected: country
  })
}
