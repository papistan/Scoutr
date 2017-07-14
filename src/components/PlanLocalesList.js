import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from "react-redux";
import { AlertIOS, Image, View, Text, ListView}  from 'react-native';
import axios from 'axios';
import { Button, CardSection }  from './common';
import { Actions } from 'react-native-router-flux';
import {planLocalesFetch, localeDelete} from '../actions';
import LocaleListItem from './LocaleListItem';
import Swipeout from 'react-native-swipeout';
import Communications from 'react-native-communications'

class  PlanLocalesList extends Component {

  componentWillMount() {
    this.props.planLocalesFetch(plan = this.props.rowPlan);
    this.createDataSource(this.props);

  }
  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps)
  }
  createDataSource({planLocales}) {

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.dataSource = ds.cloneWithRows(planLocales);
  }
   renderRow(planLocale) {
    let swipeBtns = [{
      text: 'Delete',
      fontWeight: 'bold',
      backgroundColor: 'red',
      onPress: () => {
      axios.delete(`https://localites.herokuapp.com/locales/${planLocale.id}`, { params: {
      locale_id: planLocale.id }}).then(() => {
        this.props.planLocalesFetch();
      })
      .catch((error) => console.log(error));

      }
    }]
    let swipeBtnsLeft = [{
      text: 'Details',
      fontWeight: 'bold',
      backgroundColor: 'green',
      onPress: () => {
        console.log(planLocale.yelp_id);
      Actions.LocaleShow({ id: planLocale.yelp_id });
      console.log(planLocale);
      }
    }];

    return (

      <Swipeout
      right={swipeBtns}
      left={swipeBtnsLeft}
      autoClose={true}
      backgroundColor= 'transparent'>

          <View>
           <LocaleListItem planLocale={planLocale} />
          </View>
      </Swipeout>
    )
  }
  textIt(phoneNumber) {

   const { plan } = this.props;
     var localez = ""
    this.props.planLocales.forEach(function(locale){
        localez += (locale.name + "\n" + locale.address + "\n")
    });

    Communications.text(phoneNumber, `Check out these spots in ${plan.district}: ${localez}`)
  }
  onTextPress () {

  AlertIOS.prompt(
      'Enter phone #',
      null,
      text => this.textIt(text)
    );
  }
  render () {
    return (

      <View style={styles.container}>

       <Image 
        source={{uri: 'https://s-media-cache-ak0.pinimg.com/736x/bc/8d/5f/bc8d5f496fbb5cf4f760231b8a5301ff--san-francisco-california-california-usa.jpg'}} 
        style={styles.container}
        blurRadius={5}
        >
        <ListView
          enableEmptySections={true}
          dataSource={this.dataSource}
          renderRow={this.renderRow.bind(this)}
        />

        <CardSection>
          <View style={styles.buttonStyle}>
          </View>
          <Button onPress={this.onTextPress.bind(this)}>
            text
          </Button>
        </CardSection>

        </Image>
      </View>

    );
  }
}

const styles = {
  container: {
    flex: 1
  },
  buttonStyle: {
    flex: 4,
  }
};

const mapStateToProps = state => {
  const plan = state.planLocales.plan
  const planLocales = _.map(state.planLocales.locales, (val, uid) => {
    return { ...val, uid };
  });
  return { planLocales, plan};
};
export default  connect(mapStateToProps, {planLocalesFetch, localeDelete})(PlanLocalesList);
