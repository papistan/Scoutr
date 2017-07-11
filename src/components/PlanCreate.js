import React, {Component} from 'react';
import { Picker, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { planUpdate, planCreate } from '../actions';
import { CardSection, Input, Button} from './common';



class PlanCreate extends Component {
 onButtonPress() {
     const {title, city, district} = this.props;

     this.props.planCreate({title, city, district});
 }
  render () {
    return (
      <View>
        <CardSection>
          <Input
            lable="Title"
            placeholder="New Plan"
            autoCorrect={false}
            minLength = {3}
            value={this.props.title}
            onChangeText={value => this.props.planUpdate({prop: 'title', value})}
          />
        </CardSection>
        <CardSection>
          <Input
            lable="City"
            placeholder="Oakland"
            autoCorrect={true}
            minLength = {3}
            value={this.props.city}
            onChangeText={value => this.props.planUpdate({prop: 'city', value})}
          />
        </CardSection>
         <CardSection>
          <Input
            lable="District"
            placeholder="Chinatown"
            autoCorrect={true}
            minLength = {3}
            value={this.props.district}
            onChangeText={value => this.props.planUpdate({prop: 'district', value})}
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create Plan
          </Button>
        </CardSection>
      </View>
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
  const {title, city, district} = state.planForm;
  return {title, city, district}
};
export default  connect(mapStateToProps, {planUpdate, planCreate})(PlanCreate);
