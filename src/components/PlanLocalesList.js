import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from "react-redux";
import { View, Text, ListView}  from 'react-native';
import axios from 'axios';
import {Button}  from './common';
import {planLocalesFetch} from '../actions';
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
       axios.delete('http://localhost:3000/locales/`${planLocale.id}', { params: {
      locale_id: planLocale.id
      }
    })
    }
    }];
    return (
      <Swipeout right={swipeBtns}
        backgroundColor= 'transparent'>
        
          <View>
           <LocaleListItem planLocale={planLocale} />
          </View>
      </Swipeout>
    )
  }

  render () {
    return (

      <View style={{flex: 1}}>
        <ListView
          dataSource={this.dataSource}
          renderRow={this.renderRow}
      />
      </View>

    );
  }
}

const mapStateToProps = state => {
  const plan = state.planLocales.plan
  const planLocales = _.map(state.planLocales.locales, (val, uid) => {
    return { ...val, uid };
  });
  return { planLocales, plan};
};
export default  connect(mapStateToProps, {planLocalesFetch})(PlanLocalesList);
