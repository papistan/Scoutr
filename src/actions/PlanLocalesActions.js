import firebase from 'firebase';
import {Actions} from 'react-native-router-flux'
import {
  PLAN_LOCALES_FETCH
} from './types';

// export const planLocaleCreate = ({ plan, locale}) => {
//   const { currentUser } = firebase.auth();

//   return (dispatch) => {
//     firebase.database().ref(`/users/${currentUser.uid}/planLocales`)
//       .push({plan, locale })
//       .then(() => {
//         dispatch({ type: PLAN_CREATE });
//         Actions.plan();
//       });
//   };
// };
export const planFetch = () => {
  const { currentUser } = firebase.auth();
  console.log()
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/planLocales`)
      .on('value', snapshot => {
        dispatch({ type: PLAN_LOCALES_FETCH, payload: snapshot.val() });
      });
  };
};