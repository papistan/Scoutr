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

      debugger
      this.props.plan.planLocalesFetch();
    }
   render(props) {
    return (
      <View style={{flex:1}}>
        <CardSection style={{flex:9}}>
          <Flip props={this.props.plan} />
        </CardSection>

      <CardSection style={{flex:1, paddingBottom: 10}}>
         <Button onPress={this.onButtonPress.bind(this)}>
            Done!
          </Button>
      </CardSection>
      </View>

    );
  }
}
const mapStateToProps = (state) => {
  const {title, city, district} = state.planForm;
  return {title, city, district}
};

export default  connect(mapStateToProps, {planLocalesFetch})(FlipCards);
