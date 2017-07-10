import React from 'react';
import {StyleSheet, Text, View, Image, ActivityIndicator} from 'react-native';
import Spinner from './Spinner'


let NoMoreCards = React.createClass({
  render() {
    return (
      <View style={styles.noMoreCards}>
        <ActivityIndicator size={'large'} />
      </View>
    )
  }
})

const styles = StyleSheet.create({
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default NoMoreCards;