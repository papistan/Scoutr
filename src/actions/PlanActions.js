import firebase from 'firebase';
import {Actions} from 'react-native-router-flux'
import {
  PLAN_UPDATE,
  PLAN_CREATE,
  PLANS_FETCH
} from './types';

export const planUpdate = ({prop, value}) => {
  return {
    type: PLAN_UPDATE,
    payload: {prop, value}
  };
};
export const planCreate = ({ title, city, district}) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/plans`)
      .push({title, city, district })
      .then(() => {
        dispatch({ type: PLAN_CREATE });
        Actions.plan();
      });
  };
};
export const plansFetch = () => {
  const { currentUser } = firebase.auth();
  console.log()
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/plans`)
      .on('value', snapshot => {
        dispatch({ type: PLANS_FETCH, payload: snapshot.val() });
      });
  };
};
