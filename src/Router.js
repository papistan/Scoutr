import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import FlipCards from './components/FlipCards';
import PlanCreate from './components/PlanCreate';
import PlansList from './components/PlansList';
import PlanLocalesList from './components/PlanLocalesList';


const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>

      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" initial />
      </Scene>

      <Scene key="main">
       
        <Scene
          onRight={() => Actions.createPlan()}
          rightTitle='Create Plan'
          key="plansList"
          component={PlansList}
          title="Plans List"
        />
        <Scene
          onRight={() => Actions.createLocale()}
          rightTitle='Add Locale'
          key="planLocalesList"
          component={PlanLocalesList}
          title="Plan Locales List"
        />
        <Scene
          key="createPlan"
          component={PlanCreate}
          title="New Plan"
        />
      </Scene>

      <Scene key="plan">
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
