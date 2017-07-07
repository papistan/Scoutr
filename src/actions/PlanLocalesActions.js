import axios from 'axios';
import {Actions} from 'react-native-router-flux'
import {
  PLAN_LOCALES_FETCH
} from './types';

export const planLocalesFetch = () => {
  return (dispatch) => {
    var plan_id = 1git;
  axios.get(`http://localhost:3000/plans/${plan_id}`).then((response) => {

    dispatch({type: PLAN_LOCALES_FETCH, payload: response.data})
  });
  };
};
