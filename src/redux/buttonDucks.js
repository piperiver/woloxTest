/**
 * CONSTANTS
 */
const initData = {
  section: ''
}

/**
 * TYPES
 */

/**
 * REDUCERS
 * @param {*} state
 * @param {*} action
 */
export default function reducer (state = initData, action = []) {
  switch (action.type) {
    default:
      return state
  }
}

/**
 * ACTIONS
 */
export const buttonSection = (params) => async (dispatch, getState) => {
  try {
    if (typeof params.redirect !== 'undefined' && params.redirect !== '') {
      if (typeof params.blank !== 'undefined' && params.blank === true) {
        window.open(params.redirect, '_blank')
      } else {
        window.location.href = params.redirect
      }
    }
  } catch (error) {
    return error
  }
}
