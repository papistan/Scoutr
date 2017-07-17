import axios from 'axios';
import {Actions} from 'react-native-router-flux'
import {
  PLAN_LOCALES_FETCH
} from './types';

  export const planLocalesFetch = (plan) => {
    return (dispatch, state) => {
    if (plan) {
       state().planForm.currentPlan = plan;
    }
    var plan_id = state().planForm.currentPlan.id;
    axios.get(`https://localites.herokuapp.com/plans/${plan_id}`).then((response) => {
      dispatch({type: PLAN_LOCALES_FETCH, payload: response.data})
    });
    };
  };
export const localeDelete = (locale) => {
  return (dispatch) => {
  axios.delete(`https://localites.herokuapp.com/locales/${locale.id}`, { params: {
      locale_id: locale.id }})
  axios.get(`https://localites.herokuapp.com/plans/${plan_id}`).then((response) => {
    dispatch({type: PLAN_LOCALES_FETCH, payload: response.data})
  });
  };
};
