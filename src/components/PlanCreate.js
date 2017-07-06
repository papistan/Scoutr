import React, {Component} from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { EmployeeUpdate, EmployeeCreate } from '../actions';
import {Card, CardSection, Input, Button} from './common';


class PlanCreate extends Component {
 onButtonPress() {
     const {city, district} = this.props;

     this.props.planCreate({city, district});
 }
  render () {
    return (
      <Card>
        <CardSection>
          <Input
            lable="City"
            placeholder="Oakland"
            value={this.props.city}
            // onChangeText={value => this.props.planUpdate({prop: 'city', value})}
          />
        </CardSection>
         <CardSection>
          <Input
            lable="District"
            placeholder="Chinatown"
            value={this.props.district}
            // onChangeText={value => this.props.planUpdate({prop: 'district', value})}
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create Plan
          </Button>
        </CardSection>
      </Card>
    );
  }
}
const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};
const mapStateToProps = (state) => {
  const {city, district} = state.planForm;
  return {city, district}
};
export default  connect(mapStateToProps, {PlanUpdate, PlanCreate})(PlanCreate);
