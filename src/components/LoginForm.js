import React, {Component} from 'react';
import { Image, Text, View }  from 'react-native';
import {connect} from 'react-redux';
import {emailChanged, passwordChange, loginUser} from '../actions';
import {Card, CardSection, Button, Input, Spinner} from './common';

class  LoginForm extends Component {
  onEmailChange(text){
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
      this.props.passwordChange(text);
  }
  onButtonPress() {
      const {email, password} = this.props;

      this.props.loginUser({email, password});
  }
  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
       <Button onPress={this.onButtonPress.bind(this)} >
           Login
       </Button>
    );
  }

  render () {
    return (
      <View style={{flex: 1}}>
      <Image source={{uri: 'https://s-media-cache-ak0.pinimg.com/originals/fe/b5/4a/feb54a8e9c9a8d15357d8787bf126c7c.jpg'}} style={{flex: 1}}>
      <View style={{flex: 1}}>
        
        <CardSection >
          <Input
            label="Email"
            placeholder="Test@test.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
            autoCorrect={false}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="Password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
            autoCorrect={false}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}> {this.props.error} </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </View>
      </Image>
    </View>
    );
  }
}
const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
    backgroundColor: 'transparent'
  }
};

const mapStateToProps = ({auth}) => { // comes from index reducer
  const {email, password, error, loading } = auth;

  return { email, password, error, loading}; // comes form auth reducer
};

export default  connect(mapStateToProps, {
  emailChanged,
  passwordChange,
  loginUser
})(LoginForm);
