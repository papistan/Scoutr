import {
  PLAN_LOCALES_FETCH
} from '../actions/types';

const INITIAL_STATE = {plan: {}, locales: []};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLAN_LOCALES_FETCH:

      return action.payload;
    default:
      return state;
  }
};
