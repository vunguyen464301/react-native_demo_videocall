import React, { Component } from 'react';
import { View, Text ,TextInput , StyleSheet} from 'react-native';
import Common from '../themes/styles/Common'
import Colors from '../themes/colors/Colors'
export default class InputID extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      const { value, onChangeText, placeholder } = this.props
    return (
        <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={Styles.input}
      />
    );
  }
}

const Styles = StyleSheet.create({
    input:{
        borderBottomWidth: 1,
        borderColor: Colors.light,
        color: Colors.light
    }
})