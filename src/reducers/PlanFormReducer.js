import {
  PLAN_UPDATE,
  PLAN_CREATE
}  from '../actions/types';

const INITIAL_STATE = {
  title: '',
  city: '',
  district: ''

};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case PLAN_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value};
    case PLAN_CREATE:
      return { ...state, ...INITIAL_STATE, currentPlan: action.payload};
    default:
      return state;
  }
};
