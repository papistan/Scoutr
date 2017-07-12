import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from "react-redux";
import { Image, View, Text, ListView}  from 'react-native';
import axios from 'axios';
import {Button}  from './common';
import { Actions } from 'react-native-router-flux';
import {planLocalesFetch, localeDelete} from '../actions';
import LocaleListItem from './LocaleListItem';
import Swipeout from 'react-native-swipeout';

class  PlanLocalesList extends Component {

  componentWillMount() {
    this.props.planLocalesFetch(plan = this.props.rowPlan);
    this.createDataSource(this.props)
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
      axios.delete(`http://localhost:3000/locales/${planLocale.id}`, { params: {
      locale_id: planLocale.id }}).then(() => {
        this.props.planLocalesFetch();
      })
      .catch((error) => console.log(error));

    }
    }];
    return (

      <Swipeout
      right={swipeBtns}
      autoClose={true}
      backgroundColor= 'transparent'>

          <View>
           <LocaleListItem planLocale={planLocale} />
          </View>
      </Swipeout>
    )
  }

  render () {
    return (

      <View style={styles.container}>
        <Image source={{uri: 'https://s-media-cache-ak0.pinimg.com/736x/bc/8d/5f/bc8d5f496fbb5cf4f760231b8a5301ff--san-francisco-california-california-usa.jpg'}} style={styles.container}>
        
        <ListView
          enableEmptySections={true}
          dataSource={this.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
        </Image>
      </View>

    );
  }
}

const styles = {
  container: {
    flex: 1
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
