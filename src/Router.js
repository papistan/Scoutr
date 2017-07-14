import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import FlipCards from './components/FlipCards';
import PlanCreate from './components/PlanCreate';
import PlansList from './components/PlansList';
import PlanLocalesList from './components/PlanLocalesList';
import localeShow from './components/localeShow';


const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>

    <Scene key="auth">
          <Scene
              onRight={() => Actions.register()}
              rightTitle='Register'
              key="login"
              component={LoginForm}
              title="Please Login"
               />
              <Scene key="register" component={LoginForm} title="New Account"  />
    </Scene>

      <Scene key="main">

        <Scene
          onRight={() => Actions.createPlan()}
          rightTitle='Create Plan'
          key="plansList"
          component={PlansList}
          title="Scouted Lists"
        />

        <Scene
          key="createPlan"
          component={PlanCreate}
          title="Make a List"
        />
        <Scene
            renderBackButton={()=>(null)}
            key="flipCards"
            component={FlipCards}
            title="Scoutr"

          />
          <Scene
            renderBackButton={()=>(null)}
            onRight={() => Actions.plansList()}
            rightTitle='Lists'
            key="planLocalesList"
            component={PlanLocalesList}
            title="Scouted Spots"
          />
        <Scene
          key="LocaleShow"
          component={localeShow}
          title="Details"
        />

      </Scene>
    </Router>
  );
};

export default RouterComponent;
