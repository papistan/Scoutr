import React, {Component} from 'react';
import { View, Text, StyleSheet}  from 'react-native';
import  Flip from './common/Flip'
import { CardSection, Button, Input} from './common';
import { planFetch } from '../actions';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {planLocalesFetch, planUpdate} from '../actions';

class  FlipCards extends Component {
    state = {category: ''}
   onButtonPress() {
    Actions.planLocalesList(plan = this.props.plan);
    }
    onCategorySubmit() {
      this.setState({category: this.props.category});
    }
   render(props) {

    return (
      <View style={{flex:1, backgroundColor: 'lightblue'}}>
        <CardSection style={{flex:1, paddingTop: 5}}>
          <View style={{flex: 1}}>
            <Input
            style={{flex: 9}}
            label="Category"
            placeholder="bar or gym or park ..."
            onChangeText={value => this.props.planUpdate({prop: 'category', value})}
            value={this.props.category}
            />
            <Button
            style={{flex: 1}}
            onPress={this.onCategorySubmit.bind(this)}
            >
              &#10003;
             </Button>
          </View>
        </CardSection>
        <CardSection style={{flex:9}}>
          <Flip plan={this.props.plan}
          category={this.props.category} />
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
  const {category} = state.planForm;
  return {id, title, city, district, category}
};

export default  connect(mapStateToProps, {planLocalesFetch, planUpdate})(FlipCards);
