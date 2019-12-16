// import React, { Component } from 'react';
// import { View, Text } from 'react-native';
// import AppContainer from './src/AppContainer' 
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

//   render() {
//     return (
//       <AppContainer/>
//     );
//   }
// }
import React, {Component} from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  RTCPeerConnection,
  RTCIceCandidate,
  RTCSessionDescription,
  RTCView,
  MediaStream,
  MediaStreamTrack,
  mediaDevices,
  registerGlobals,
} from 'react-native-webrtc';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFront: true,
      inputIDStream: '',
      videoLocalURL: null,
      videoStreamURL: null,
    };
  }
  componentDidMount() {
    const configuration = {iceServers: [{url: 'stun:stun.l.google.com:19302'}]};
    const pc = new RTCPeerConnection(configuration);
    const {isFront} = this.state;

    mediaDevices.enumerateDevices().then(sourceInfos => {
      console.log(sourceInfos);
      let videoSourceId;
      for (let i = 0; i < sourceInfos.length; i++) {
        const sourceInfo = sourceInfos[i];
        if (
          sourceInfo.kind == 'videoinput' &&
          sourceInfo.facing == (isFront ? 'front' : 'environment')
        ) {
          videoSourceId = sourceInfo.deviceId;
        }
      }
      mediaDevices
        .getUserMedia({
          audio: true,
          video:
            Platform.OS === 'ios'
              ? false
              : {
                  mandatory: {
                    Width: '100%', // Provide your own width, height and frame rate here
                    Height: '100%',
                    minFrameRate: 30,
                  },
                  facingMode: isFront ? 'user' : 'environment',
                  optional: videoSourceId ? [{sourceId: videoSourceId}] : [],
                },
        })
        .then(stream => {
          // Got stream!
          this.setState({videoLocalURL: stream.toURL()});
          pc.addStream(stream);
          console.log('===========================');
          console.log(stream);
          console.log('===========================');
          this.setState({inputIDStream:stream.toURL()})
        })
        .catch(error => {
          console.log(error);
        });
    });

    pc.createOffer().then(desc => {
      pc.setLocalDescription(desc).then(() => {
        // Send pc.localDescription to peer
        console.log('==============')
        console.log(pc.localDescription)
        console.log('==============')
      });
    });

    pc.onicecandidate = function(event) {
      // send event.candidate to peer
    };

    // pc.onaddstream().then(d=>{
    //   this.setState({videoStreamURL:d.stream.toURL()})
    // })
    this.pc = pc;
  }
  onHandleChangeIDStream = text => {
    this.setState({inputIDStream: text});
  };

  btnCall = () => {
    const {inputIDStream} = this.state;
    this.setState({videoStreamURL: inputIDStream});
  };
  render() {
    const {inputIDStream} = this.state;
    return (
      <View style={styles.congtainer}>
        {/* <RTCView streamURL={this.state.videoLocalURL} style={styles.congtainer} /> */}
        <RTCView
          streamURL={this.state.videoStreamURL}
          style={styles.cameraBig}
        />
        <View style={styles.over}>
          <RTCView
            streamURL={this.state.videoLocalURL}
            style={styles.cameraSmall}
          />
          <TextInput
            style={styles.inputStream}
            onChangeText={this.onHandleChangeIDStream}
            value={inputIDStream}
          />
          <TouchableOpacity
            style={styles.buttonCall}
            onPress={() => this.btnCall()}>
            <Text style={{color: 'white'}}>Call</Text>
          </TouchableOpacity>
        </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  congtainer: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: 'red',
    // backgroundColor:'blue'
  },
  over: {
    position: 'absolute',
  },
  cameraBig: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'blue',
  },
  cameraSmall: {
    width: 80,
    height: 100,
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'blue',
    // marginTop: 50,
    marginLeft: 50,
    padding:2
  },
  inputStream: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 15,
    borderWidth: 1,
    borderColor: 'red',
    color: 'white',
  },
  buttonCall: {
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: 'red',
    padding: 10,
  },
});
