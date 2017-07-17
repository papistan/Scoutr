import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import PlanFormReducer from './PlanFormReducer';
import PlansReducer from './PlansReducer';
import PlanLocaleReducer from './PlanLocaleReducer';
export default combineReducers({
  auth: AuthReducer,
  planForm: PlanFormReducer,
  plans: PlansReducer,
  planLocales: PlanLocaleReducer
});

