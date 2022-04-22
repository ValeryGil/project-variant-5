import { axiosInstance } from "../../components/config/axios";
import { GET_USER_ID, LOGOUT, SIGN_IN } from "../types/personTypes";

export const signIn = (person) => ({
  type: SIGN_IN,
  payload: person,
});

export const signInQuery = ({ email, password, cb }) => async (dispatch) => {
  const response = await axiosInstance.post("signin", {
    email,
    password,
  });
  const person = response.data;
  dispatch(
    signIn({
      ...person.data,
      token: person.token,
    })
  );
  typeof cb === 'function' && cb();
};

export const signUpQuery = ({ email, password, successCb, errorCb }) => async (dispatch) => {
  const response = await axiosInstance.post("signup", {
    email,
    password,
  });
  if (response.status === 201) {
    dispatch(signInQuery({ email, password, cb: successCb }))
  } else {
    errorCb('Error')
  }
};

export const logOutUser = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
    payload: '',
  })
}

export const getUserId = (person) => ({
  type: GET_USER_ID,
  payload: person,
})

export const getUserIdQuery = ({ _id }) => async (dispatch) => {
  const response = await axiosInstance.get("users/me", {
    _id,
  });
  const person = response.data;
  dispatch(
    getUserId({
      ...person.data,
      token: person.token,
    })
  );
}
