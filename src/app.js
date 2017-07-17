import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';


class App extends Component {
   componentWillMount() {
    const config = {
    apiKey: "AIzaSyArQ2T1MSL2GyEZoX0hshB932erK4qiUts",
    authDomain: "manager-76a1a.firebaseapp.com",
    databaseURL: "https://manager-76a1a.firebaseio.com",
    projectId: "manager-76a1a",
    storageBucket: "manager-76a1a.appspot.com",
    messagingSenderId: "9631883082"
  };
  firebase.initializeApp(config);
  }
  render () {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
            <Router />
      </Provider>
    );
  }
}

export default App;
