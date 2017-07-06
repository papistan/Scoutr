import firebase from 'firebase';
import axios from 'axios';
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
  // const { currentUser } = firebase.auth();
  return (dispatch) => {
    var user_id = 1;
     axios.post('http://localhost:3000/plans', { params: { user_id: user_id, title: title, city: city, district: district}
    }).then((response) => {
      dispatch({ type: PLAN_CREATE, payload: response.data});
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
