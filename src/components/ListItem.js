import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {

  render() {
    const { title } = this.props.plan;

    return (

          <CardSection>
            <Text style={styles.titleStyle}>
              {title}
            </Text>
          </CardSection>

    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;
