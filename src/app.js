import React, {Component} from 'react';
import {View} from 'react-native';
import Router from './Router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';


class App extends Component {
  render () {
    return (
        <Router />
    );
  }
}

export default App;
