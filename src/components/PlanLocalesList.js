import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from "react-redux";
import { View, Text, ListView}  from 'react-native';
import {planLocalesFetch} from '../actions';
import LocaleListItem from './LocaleListItem'

class  PlanLocalesList extends Component {

  componentWillMount() {
    this.props.planLocalesFetch();

    this.createDataSource(this.props)
  }
  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps)
  }
  createDataSource({planlocales}) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.dataSource = ds.cloneWithRows(planlocales);
  }
   renderRow(planlocale) {

    return <LocaleListItem planlocale={planlocale} />;
  }

  render () {
    return (
      <View>

        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow} />

      </View>

    );
  }
}
const mapStateToProps = state => {
  const planlocales = _.map(state.planlocales, (val, uid) => {
    return { ...val, uid };
  });

  return { planlocales };
};

export default  connect(mapStateToProps, {planLocalesFetch})(PlanLocalesList);
