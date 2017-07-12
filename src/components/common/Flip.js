'use strict';

import React from 'react';
import { Image, StyleSheet, Text, View} from 'react-native';
import { Spinner } from './Spinner';
import axios from 'axios';
import Card from './Card';
import NoMoreCards from './NoMoreCards';
import SwipeCards from 'react-native-swipe-cards';


export default React.createClass({
  getInitialState() {
    return {
      cards: [],
      cardsCount: 0,
      outOfCards: false,
    }
  },
  renderSpinner(){
      return <Spinner />;
  },
  componentWillMount() {
    var city = this.props.plan.city;
    var neighborhood = this.props.plan.district;
    var category = this.props.category;
    axios.get('https://localites.herokuapp.com/locales', { params: {
    city: city, neighborhood: neighborhood, category: category }})
  .then(response => this.setState({ cards: response.data["businesses"], cardsCount: response.data["businesses"].length }));
  },
  componentWillReceiveProps(nextProps){
    console.log("Flip Next Props: ", nextProps.category);
    console.log("flip category ", this.props.category);
    if (this.props.category !== nextProps.category) {
      console.log("True")
      var city = this.props.plan.city;
      var neighborhood = this.props.plan.district;
      var category = this.props.category;
      axios.get('https://localites.herokuapp.com/locales', { params: {
      city: city, neighborhood: neighborhood, category: category }})
    .then((response) => {
      this.setState({ cards: response.data["businesses"], cardsCount: response.data["businesses"].length })
      });
    } else {
      console.log("false")
    }

  },
  handleYup (card) {
    var plan_id = this.props.plan.id;
    axios.post('https://localites.herokuapp.com/locales', { params: {
      plan_id: plan_id,
      card: card
      }
    })
  },
  handleNope (card) {
    console.log("nope")
  },
  cardRemoved (index) {
    console.log(`The index is ${index}`);

    if (this.state.cardsCount - index <= 1 ) {
       // for more than 50 results axios call here
      };
    },
  // },
  render() {
    return (
        <SwipeCards

        cards={this.state.cards}
        loop={false}

        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        showYup={true}
        showNope={true}

        handleYup={this.handleYup}
        handleNope={this.handleNope}
        cardRemoved={this.cardRemoved}
        />
    )
  }
})
