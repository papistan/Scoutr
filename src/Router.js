import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import FlipCards from './components/FlipCards';


const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>

      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" initial />
      </Scene>

      <Scene key="main">

        <Scene
          key="flipCards"
          component={FlipCards}
          title="FlipCards"

        />

      </Scene>
    </Router>
  );
};

export default RouterComponent;
