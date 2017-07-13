import React, {Component} from 'react';
import { Image, View, Text, StyleSheet, Button, TouchableOpacity}  from 'react-native';
import  Flip from './common/Flip'
import { CardSection, Input} from './common';
import { planFetch } from '../actions';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {planLocalesFetch, planUpdate} from '../actions';

class  FlipCards extends Component {
  state = {category: ""}

   onButtonPress() {
    Actions.planLocalesList(plan = this.props.plan);
    }
    onCategorySubmit() {
      this.props.plan.category = this.props.category;
      this.setState({category:  this.props.plan.category});
      this.forceUpdate();
    }
   render(props) {

    return (
      <View style={{flex: 1}}>
      <Image source={{uri: 'https://s-media-cache-ak0.pinimg.com/originals/b7/cb/71/b7cb7135bb30fa29778c5d4dff33fae6.jpg'}} style={{flex: 1}}>
      <View style={{flex:1}}>
        <CardSection style={{flex:1, paddingTop: 5}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Input
            style={{flex: 9, color: 'black' }}
            label="Type:"
            placeholder="eg. bar, gym or park..."
            onChangeText={value => this.props.planUpdate({prop: 'category', value})}
            value={this.props.category}
            />
            <View >
            <Button
              title="GO"
              color="#000"
              style={styles.goButtonStyle}
              onPress={this.onCategorySubmit.bind(this)}
            />
            </View>
          </View>
        </CardSection>
        <CardSection style={{flex:9}}>
          <Flip plan={this.props.plan}
          category={this.state.category} />
        </CardSection>

      <CardSection style={{flex:1, paddingBottom: 10}}>
        <TouchableOpacity onPress={this.onButtonPress.bind(this)} style={styles.buttonStyle}>
          <Text style={styles.textStyle}>
            DONE
          </Text>
        </TouchableOpacity>
      </CardSection>
      </View>
      </Image>
    </View>
    );
  }
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 30,
    fontWeight: '600',
    paddingTop: 5,
    paddingBottom: 5
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    borderRadius: 25,
    borderWidth: 3,
    borderColor: 'white',
    marginLeft: 10,
    marginRight: 10
  },
  goButtonStyle: {
    flex: 1,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: 'white',
    color: 'white'
  }
};

const mapStateToProps = (state) => {
  const {id, title, city, district} = state.planForm.currentPlan;
  const {category} = state.planForm;
  return {id, title, city, district, category}
};

export default  connect(mapStateToProps, {planLocalesFetch, planUpdate})(FlipCards);
