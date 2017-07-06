'use strict';

import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import axios from 'axios';
import Card from './Card';
import NoMoreCards from './NoMoreCards';
import SwipeCards from 'react-native-swipe-cards';

export default React.createClass({

  getInitialState() {
    return {
      cards: [],
      cardsCount: 0,
      outOfCards: false
    }
  },
  componentWillMount() {
    axios.get('https://localites.herokuapp.com/locales').then(response => this.setState({ cards: response.data["businesses"], cardsCount: response.data["businesses"].length }));
  },
  handleYup (card) {
    console.log("yup", card)
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


