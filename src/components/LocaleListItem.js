import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class LocaleListItem extends Component {

  render() {
    const  locale  = this.props.planLocale;
    return (

          <CardSection>
            <Text style={styles.titleStyle}>
              {locale.name}
            </Text>
          </CardSection>

    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,

  }
};

export default LocaleListItem;
