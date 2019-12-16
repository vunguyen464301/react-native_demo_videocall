import React, { Component } from "react";
import { View, Text, Modal, StyleSheet, TouchableOpacity } from "react-native";
import Common from "../themes/styles/Common";
import Colors from "../themes/colors/Colors";
import { MaterialIcons } from "react-native-vector-icons";
export default class ModalCallingFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      animationType,
      transparent,
      visible,
      onPressCallStart,
      onPressCallEnd
    } = this.props;
    return (
      <Modal
        animationType={animationType}
        transparent={transparent}
        visible={visible}
      >
        <View style={[Common.flex1, styles.backgroundColor]}>
          <View style={[Common.flex1, Common.viewCenter]}>
            <View style={[Common.nRow, styles.viewContainer]}>
              <Text style={styles.textConnect}>ABC đang gọi đến</Text>
              <View style={[Common.nColumn]}>
                <TouchableOpacity
                  style={styles.btnCallStart}
                  onPress={() => {
                    onPressCallStart();
                  }}
                >
                  <MaterialIcons name={"call"} size={40} color={Colors.black} />
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.btnCallEnd}
                  onPress={() => {
                    onPressCallEnd();
                  }}
                >
                  <MaterialIcons
                    name={"call-end"}
                    size={40}
                    color={Colors.black}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: Colors.backgroundModal
  },
  viewContainer: { backgroundColor: Colors.light, padding: 10 },
  btnCallStart: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderWidth: 2,
    borderRadius: 200,
    borderColor: Colors.black,
    marginTop: 10,
    marginRight: 10
  },
  btnCallEnd: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderWidth: 2,
    borderRadius: 200,
    borderColor: Colors.black,
    marginTop: 10,
    marginLeft: 10
  },
  textConnect: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
    color: Colors.black
  }
});
