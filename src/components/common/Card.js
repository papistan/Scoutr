import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

let Card = React.createClass({
  render() {
    return (

      <View style={styles.card}>
        <Image style={styles.thumbnail} source={{uri: this.props.image_url}} />
        <Text style={styles.text}>{this.props.name}</Text>
      </View>

    )
  }
})

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'gray',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
  },
  thumbnail: {
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },

})

export default Card;
