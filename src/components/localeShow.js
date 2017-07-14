import React, {Component} from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
import { CardSection } from './common';

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
      return <Text> loading... </Text>
    }
    return(

      <View>
      <CardSection>
        <Text style={{ fontSize: 30 }}>
          {this.state.location.name}
          {"\n"}
        </Text>
      </CardSection>

      
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
