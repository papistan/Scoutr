import firebase from 'firebase';
import axios from 'axios';
import {Actions} from 'react-native-router-flux';
import { EMAIL_CHANGED,
         PASSWORD_CHANGED,
         LOGIN_USER_SUCCESS,
         LOGIN_USER_FAIL,
         LOGIN_USER
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};
export const passwordChange = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};
export const loginUser = ({email, password}) => {
  return(dispatch) => {
    dispatch({type: LOGIN_USER});
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        axios.post(`http://localhost:3000/users/rn_create`,
        { params: { email: email, password: password, password_confirmation: password, firebase_uid: user.uid } }).then((response) => {
            user.ruby_id = response.data.user.id;
            console.log( user.ruby_id)
            loginUserSuccess(dispatch, user);
        })
      })
      .catch(() => loginUserFail(dispatch));
    });
  };
};
const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
  Actions.main();
};
const loginUserFail = (dispatch, user) => {
  dispatch({ type: LOGIN_USER_FAIL });
};
