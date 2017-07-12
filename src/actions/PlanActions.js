import axios from 'axios';
import {Actions} from 'react-native-router-flux'
import {
  PLAN_UPDATE,
  PLAN_CREATE,
  PLANS_FETCH,
} from './types';

export const planUpdate = ({prop, value}) => {
  console.log(prop, value);
  return {
    type: PLAN_UPDATE,
    payload: {prop, value}
  };
};
export const planCreate = ({ title, city, district}) => {
  return (dispatch, state) => {
    var user_id = state().auth.user.ruby_id;
     axios.post('http://localhost:3000/plans', { params: { user_id: user_id, title: title, city: city, district: district}
    }).then((response) => {
      dispatch({ type: PLAN_CREATE, payload: response.data});
        Actions.flipCards({plan: response.data});
    });
  };
};


export const plansFetch = () => {

  return (dispatch, state) => {
  var user_id = state().auth.user.ruby_id;
  axios.get(`http://localhost:3000/users/${user_id}`).then((response) => {
    dispatch({ type: PLANS_FETCH, payload: response.data});
  });
  };
};
