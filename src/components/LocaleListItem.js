import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class LocaleListItem extends Component {

  render() {
    const  locale  = this.props.planLocale;
    return (
        <View style={{flex: 1}}>
          <CardSection style={styles.backgroundStyle}>
            <Image
              style={styles.thumbnailStyle}
              source={{uri: locale.image_url}}
            />
            <CardSection style={styles.backgroundStyle}>
              <Text style={styles.headerTextStyle}>
              {locale.name}
              <Text style={styles.addressStyle}>
                {"\n"}
                {locale.address}
              </Text>
            </Text>


            </CardSection>
          </CardSection>
        </View>
    );
  }
}

const styles = {
  headerTextStyle: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'helvetica',
    paddingLeft: 5,
    backgroundColor: 'transparent',
    flex: 0.8,
    textAlign: 'left',
    flexWrap: 'wrap',
  },
  thumbnailStyle: {
    height: 80,
    width: 80,
    backgroundColor: 'transparent'
  },
  addressStyle: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'helvetica',
    backgroundColor: 'transparent'
  },
  backgroundStyle: {
    backgroundColor: 'transparent',
    flex:0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default LocaleListItem;
