import { StyleSheet } from "react-native";
import Colors from "../../colors/Colors";

export default Style = StyleSheet.create({
  text13: {
    fontSize: 13,
    color: Colors.light
  },
  text17B: {
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.light
  },
  text17BU: {
    fontSize: 17,
    fontWeight: "bold",
    color: Colors.light,
    textDecorationLine:'underline'
  },
  textConnect:{
    fontSize: 17,
    fontWeight:'bold',
    color: Colors.black 
  },
  btnVideoCall:{
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderWidth: 2,
    borderRadius: 200,
    borderColor: Colors.light,
    marginTop: 10
  },
  btnCall:{
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 2,
    borderRadius: 200,
    borderColor: Colors.light,
    marginTop: 10,
    marginLeft: 10
  }
});
