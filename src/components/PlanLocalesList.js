import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from "react-redux";
import { View, Text, TouchableOpacity}  from 'react-native';
import {planLocalesFetch} from '../actions';
import LocaleListItem from './LocaleListItem'
import { SwipeListView } from 'react-native-swipe-list-view';

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

    return <LocaleListItem planLocale={planLocale} />;
  }
  renderHiddenRow() {
     return (
      <View style={styles.rowBack}>
              <Text></Text>
              <Text>Delete</Text>
      </View>
     );
  }

  render () {
    return (

      <View style={{flex: 1}}>
        <SwipeListView
          dataSource={this.dataSource}
          renderRow={this.renderRow}
          renderHiddenRow={this.renderHiddenRow}
          rightOpenValue={-75}
      />
      </View>

    );
  }
}
const styles = {
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#F00',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
  }

};

const mapStateToProps = state => {
  const plan = state.planLocales.plan
  const planLocales = _.map(state.planLocales.locales, (val, uid) => {
    return { ...val, uid };
  });
  return { planLocales, plan};
};
export default  connect(mapStateToProps, {planLocalesFetch})(PlanLocalesList);
