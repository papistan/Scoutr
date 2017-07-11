import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {
  onRowPress() {
    Actions.planLocalesList({ rowPlan: this.props.plan });
  }

  render() {
    const { title } = this.props.plan;

    return (
      <TouchableWithoutFeedback underlayColor = '#008b8b' onPress={this.onRowPress.bind(this)}>
        <View >
          <CardSection style={styles.backgroundStyle}>
            <Text style={styles.titleStyle}>
              {title}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    flex: 1,
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'helvetica',
    paddingLeft: 30,
    height: 50,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
  },
  backgroundStyle: {
    // opacity: 0.2,
    backgroundColor: 'transparent'
  }
};

export default ListItem;
