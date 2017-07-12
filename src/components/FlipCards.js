import React, {Component} from 'react';
import { View, Text, StyleSheet}  from 'react-native';
import  Flip from './common/Flip'
import { CardSection, Button} from './common';
import { planFetch } from '../actions';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {planLocalesFetch} from '../actions';

class  FlipCards extends Component {

   onButtonPress() {
    Actions.planLocalesList(plan = this.props.plan);
    }
   render(props) {
    return (
      <View style={{flex:1, backgroundColor: 'lightblue'}}>
        <CardSection style={{flex:9}}>
          <Flip plan={this.props.plan} />
        </CardSection>

      <CardSection style={{flex:1, paddingBottom: 10}}>
         <Button onPress={this.onButtonPress.bind(this)}>
            DONE
          </Button>
      </CardSection>
      </View>

    );
  }
}
const mapStateToProps = (state) => {
  const {id, title, city, district} = state.planForm.currentPlan;
  return {id, title, city, district}
};

export default  connect(mapStateToProps, {planLocalesFetch})(FlipCards);
