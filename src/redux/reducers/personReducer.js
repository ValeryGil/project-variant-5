import { GET_USER_ID, LOGOUT, SIGN_IN } from "../types/personTypes"

export const personReducer = (store = {}, action) => {
  switch (action.type) {
	  case SIGN_IN:
      return {
		    ...store,
		    ...action.payload
	    }

    case LOGOUT:
      return {
        ...store,
        token: action.payload,
      }

    case GET_USER_ID:
      return {
        ...store,
        ...action.payload
      }
	
	default:
	  return store
  }
}
