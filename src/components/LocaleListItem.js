import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class LocaleListItem extends Component {

  render() {
    const  locale  = this.props.planLocale;
    return (
        <View>
          <CardSection>
            <Image
              style={styles.thumbnailStyle}
              source={{uri: locale.image_url}}
            />
            <CardSection>
              <Text style={styles.headerTextStyle}>
              {locale.name}
              {"\n"}
              <Text>
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
    fontSize: 18,
    paddingLeft: 5
  },
  thumbnailStyle: {
    height: 80,
    width: 80
  },
  addressStyle: {
    height: 80,
    width: 80
  }

};

export default LocaleListItem;
