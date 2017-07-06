import React, {Component} from 'react';
import { View, Text, StyleSheet}  from 'react-native';
import  Flip from './common/Flip'
import { CardSection, Button} from './common';
class  FlipCards extends Component {
   render() {
    return (
      <View style={{flex:1}}>
        <CardSection style={{flex:6}}>
          <Flip />
        </CardSection>

      <CardSection style={{flex:1, paddingBottom: 10}}>
         <Button style={{justifyContent:  'center'}}>
            Done!
          </Button>
      </CardSection>
      </View>

    );
  }
}


export default  FlipCards;
