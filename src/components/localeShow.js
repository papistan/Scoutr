import React, {Component} from 'react';
import { Text, View, Linking } from 'react-native';
import axios from 'axios';
import ImageSlider from 'react-native-image-slider';
import { CardSection, Spinner } from './common';

class  localeShow extends Component {
  state = { loading: true }
  componentWillMount(){
    axios.get(`https://localites.herokuapp.com/locales/${this.props.id}`).then((response) => {
      this.setState({location: response.data, loading: false})
      console.log(this.state.location);
    });
  }
  renderShow(){
    if (this.state.loading) {
      return <Spinner />
    }
    return(

    <View style={{ flex:1 }}>


      <View style={{ flex: 1, marginLeft: 20 }}>
        <Text style={styles.titleStyle}>
          {this.state.location.name}
        </Text>
      </View>

      <View style={styles.containerStyle}>

        <ImageSlider
          height={298}
          images={[
          this.state.location.photos[1],
          this.state.location.photos[2],
          this.state.location.photos[0]
        ]}/>

      </View>

      <View style={styles.bodyStyle}>

        <Text style={styles.textStyle}>
          {this.state.location.location.display_address[0]}
          {"\n"}
          {this.state.location.location.display_address[1]}
          {"\n"}
          {this.state.location.display_phone}
        </Text>

        <Text style={styles.textStyle}>
          Price: {this.state.location.price}
          {"\n"}
          Rating: {this.state.location.rating} out of 5
          {"\n"}
          Review Count: {this.state.location.review_count}
          {"\n"}
        </Text>
        <Text style={styles.urlStyle}>
          Link to Yelp: {Linking.openURL(this.state.location.url)}
        </Text>

      </View>

    </View>
      );
  }

  render () {

    return (
      <View style={{ flex: 1, marginTop: 50 }}>
      {this.renderShow()}
      </View>
      );
  }
}

const styles = {
  titleStyle: {
    justifyContent: 'center',
    fontSize: 30,
    fontFamily: 'avenir next'
  },
  bodyStyle: {
    flex: 3,
    justifyContent: 'center',
    alignSelf: 'center',
    marginLeft: 20
  },
  containerStyle: {
    flex: 5
  },
  textStyle: {
    fontSize: 15,
    fontFamily: 'avenir next'
  },
  urlStyle:{
    fontSize: 10,
    fontFamily: 'avenir next'
  }
}

export default  localeShow;
