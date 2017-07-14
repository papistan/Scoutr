import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import {  StyleSheet }  from 'react-native';
import LoginForm from './components/LoginForm';
import FlipCards from './components/FlipCards';
import PlanCreate from './components/PlanCreate';
import PlansList from './components/PlansList';
import PlanLocalesList from './components/PlanLocalesList';
import localeShow from './components/localeShow';


const RouterComponent = () => {
  return (
    <Router 
    navigationBarStyle={styles.navBar} 
    titleStyle={styles.navTitle} 
    sceneStyle={{ paddingTop: 65 }}
    >

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
          onLeft={() => Actions.LocaleShow()}
          leftTitle='show'
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
          title="show"
        />

      </Scene>
    </Router>
  );
};
const styles = StyleSheet.create({
  navBar: {
    // flex: 1,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'transparent' // changing navbar color
  },
  navTitle: {
    color: 'black' // changing navbar title color
  }
})
export default RouterComponent;
