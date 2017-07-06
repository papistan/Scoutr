import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class LocaleListItem extends Component {

  render() {
    const { title } = this.props.planlocale;

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
    color: 'white',
    paddingLeft: 15,
    backgroundColor: 'black'
  }
};

export default LocaleListItem;