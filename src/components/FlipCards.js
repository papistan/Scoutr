import React, {Component} from 'react';
import { View, Text, StyleSheet}  from 'react-native';
import  Flip from './common/Flip'
import { CardSection, Button} from './common';
import { planFetch } from '../actions';
import { connect } from 'react-redux';

class  FlipCards extends Component {

   onButtonPress() {
      console.log("Plan: ", this.props.plan)
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

export default  connect(mapStateToProps, {})(FlipCards);
