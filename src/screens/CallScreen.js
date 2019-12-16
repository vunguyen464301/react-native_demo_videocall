import React, { Component } from "react";
import { View, Text, TouchableOpacity, WebView,StyleSheet } from "react-native";
import Common from "../themes/styles/Common";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import Colors from "../themes/colors/Colors";
import CallStyle from "../themes/styles/Tab/CallScreen";
import {
  RTCPeerConnection,
  RTCIceCandidate,
  RTCSessionDescription,
  RTCView,
  MediaStream,
  MediaStreamTrack,
  mediaDevices,
  registerGlobals
} from 'react-native-webrtc';
import io from "socket.io-client/dist/socket.io.js";
export default class CallScreen extends Component {
  constructor(props) {
    super(props);
    this.state={
      clientID:null,
      hasCameraPermission: null,
      type: Camera.Constants.Type.back
    }
    const id=this.props.navigation.getParam('id')
    this.setState({clientID:id})
    this.socket = io("http://192.168.0.114:5000", {
      jsonp: false
    });
    this.socket
    .on("init", ({ id: clientId }) => {
      this.setState({ clientId });
      console.log(clientId);
    })
    .on("request", ({ from: callFrom }) => {
      this.setState({ callFrom_ID: callFrom });
      // this.setState({ modalVisibleCallFrom: true });
    })
    .on("call", data => {
      console.log("=================data");
      console.log(data);
    })
    .on("end", data => {
      // this.setState({ modalVisibleCallFrom: false });
      // this.setState({ modalVisibleCallTo: false });
    })
    .emit("init");
    
  }


  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={Common.flex1}>
          <View style={[Common.flex1,{backgroundColor:'blue'}]}>

          </View>
          <View style={[Common.viewOverride,CallStyle.viewSmall,{backgroundColor:'red'}]}>

          </View>
        </View>
      );
    }
  }
}
