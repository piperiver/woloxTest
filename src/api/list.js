import { API_BACKEND } from '../utils/constants'

const headers = new Headers({
  'Content-Type': 'application/json'
})

export const GetList = async () => {
  try {
    const response = await fetch(`${API_BACKEND}/techs`, {
      method: 'GET',
      headers
    })

    return await response.json()
  } catch (error) {
    return { error, token: null }
  }
}
