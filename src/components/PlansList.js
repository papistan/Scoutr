import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from "react-redux";
import { Image, View, Text, ListView, StyleSheet }  from 'react-native';
import {plansFetch} from '../actions';
import ListItem from './ListItem'

class  PlansList extends Component {
  renderOnEmpty() {
    return (
        <View style={{ flex:0.5 }}>
            <Text>List is Empty</Text>
        </View>
    )
}

  componentWillMount() {
    this.props.plansFetch();

    this.createDataSource(this.props)


  }
  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps)
  }
  createDataSource({plans}) {

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.dataSource = ds.cloneWithRows(plans);
  }
   renderRow(plan) {
    return <ListItem plan={plan} />;
  }

  render () {
    return (
      <View style={styles.container} >
        <Image source={{uri: 'https://s-media-cache-ak0.pinimg.com/736x/4c/5a/35/4c5a3585ebb98a6f10df0ff9d4445e50--tumblr-iphone-wallpaper-city-wallpaper.jpg'}} style={styles.container}>
          <ListView 
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
          />
        </Image>
      </View>

    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
});

const mapStateToProps = state => {
  const plans = _.map(state.plans, (val, uid) => {
    return { ...val, uid };
  });

  return { plans };
};

export default  connect(mapStateToProps, {plansFetch})(PlansList);
