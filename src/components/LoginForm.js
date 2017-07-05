import { Actions } from 'react-native-router-flux';
import React, { Component } from 'react';
import {View} from 'react-native';
import { Button, CardSection, Input, Card, Flip} from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false, token: "" };

 onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });
     axios.get('https://localites.herokuapp.com/users', {params: {email: this.state.email, password: this.state.password}})
     .then(response => this.setState({ user: response.data.id, plans: response.data.plans}))
  }

  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
  }

  render() {
    return (
      <View>

        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;

