import {
  PLANS_FETCH
} from '../actions/types';

const INITIAL_STATE = {plans: []};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLANS_FETCH:
      return action.payload;
    default:
      return state;
  }
};

