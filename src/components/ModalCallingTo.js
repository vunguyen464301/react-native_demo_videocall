import React, { Component } from "react";
import { View, Text, Modal, StyleSheet , TouchableOpacity} from "react-native";
import Common from "../themes/styles/Common";
import Colors from "../themes/colors/Colors";
import {
  MaterialIcons
} from "react-native-vector-icons";
export default class ModalCallingTo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { animationType, transparent, visible, onPress } = this.props;
    return (
      <Modal
        animationType={animationType}
        transparent={transparent}
        visible={visible}
      >
        <View
          style={[Common.flex1, { backgroundColor: Colors.backgroundModal }]}
        >
          <View style={[Common.flex1, Common.viewCenter]}>
            <View style={[Common.nColumn, styles.viewContainer]}>
              <View style={[Common.viewCenterVertical]}>
                <Text style={styles.textConnect}>Đang kết nối . . . </Text>
              </View>
              <TouchableOpacity
                style={styles.btnCallEnd}
                onPress={() => {
                  onPress()
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
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: { backgroundColor: Colors.light, padding: 10 },
  btnCallEnd: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderWidth: 2,
    borderRadius: 200,
    borderColor: Colors.black,
    marginTop: 10,
    marginLeft: 10
  },
  textConnect:{
    fontSize: 17,
    fontWeight:'bold',
    color: Colors.black 
  }
});
