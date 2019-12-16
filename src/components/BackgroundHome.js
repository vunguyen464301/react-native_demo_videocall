import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Common from '../themes/styles/Common'
export default class BackgroundHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Image
          resizeMode="cover"
          source={require("../assets/home-page.jpg")}
          style={Common.flex1}
        />
    );
  }
}
