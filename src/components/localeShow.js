import React, {Component} from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class  localeShow extends Component {
  state = { id: 'the-temporarium-coffee-and-tea-san-francisco', loading: true }
  componentWillMount(){
    axios.get(`http://localhost:3000/locales/${this.state.id}`).then((response) => {
      this.setState({location: response.data, loading: false})
      console.log(this.state.location);
    });
  }
  renderShow(){
    if (this.state.loading) {
      return <Text> not done </Text>
    }
    return(

      <View>
      <Text style={{ fontSize: 20 }}>
        {this.state.location.name}
        {"\n"}
      </Text>
      <Text style={{ fontSize: 20 }}>
        {this.state.location.location.display_address[0]}
        {"\n"}
        {this.state.location.location.display_address[1]}
        {"\n"}
        {this.state.location.display_phone}
        {"\n"}
      </Text>
      <Text style={{ fontSize: 20 }}>
        {this.state.location.photos[1]}
        {"\n"}
        {this.state.location.photos[2]}
        {"\n"}
      </Text>
      <Text style={{ fontSize: 20 }}>
        {this.state.location.price}
        {"\n"}
        {this.state.location.rating}
        {"\n"}
        {this.state.location.review_count}
        {"\n"}
      </Text>
      <Text style={{ fontSize: 20 }}>
        {this.state.location.url}
      </Text>
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

export default  localeShow;
