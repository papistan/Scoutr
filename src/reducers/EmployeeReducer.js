import {
  EMPLOYEE_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
   console.log("PAYLOAD", action)
  switch (action.type) {
    case EMPLOYEE_FETCH_SUCCESS:
      console.log("PAYLOADdaslf asf",action.payload)
      return action.payload;
    default:
      return state;
  }
};

