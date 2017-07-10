'use strict';

import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { Spinner } from './Spinner';
import axios from 'axios';
import Card from './Card';
import NoMoreCards from './NoMoreCards';
import SwipeCards from 'react-native-swipe-cards';


export default React.createClass({

  getInitialState() {
    return {
      loading: true,
      cards: [],
      cardsCount: 0,
      outOfCards: false
    }
  },
  renderSpinner(){
    if (this.state.loading){
      return <Spinner />;
    }

    return (
        <NoMoreCards />
      );
  },
  componentWillMount() {
    var city = this.props.plan.city;
    var neighborhood = this.props.plan.district;
    axios.get('http://localhost:3000/locales'
    , { params: {
    city: city, neighborhood: neighborhood
  }})
  .then(response => this.setState({ cards: response.data["businesses"], cardsCount: response.data["businesses"].length,  loading: false }));
  },
  handleYup (card) {
    var plan_id = this.props.plan.id;
    console.log("Plan: ", plan_id);
    axios.post('http://localhost:3000/locales', { params: {
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
      console.log(`Adding more cards`);
        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response =>  this.setState({ cards: this.state.cards.concat(response.data), cardsCount: (this.state.cardsCount += response.data.length) }));
      };

    },
  // },
  render() {
    return (
      <SwipeCards
        cards={this.state.cards}
        loop={false}

        renderCard={(cardData) => <Card {...cardData} />}
        renderSpinner={this.renderSpinner}
        // renderNoMoreCards={() => <NoMoreCards />}
        showYup={true}
        showNope={true}

        handleYup={this.handleYup}
        handleNope={this.handleNope}
        cardRemoved={this.cardRemoved}
      />
    )
  }
})
