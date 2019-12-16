import { StyleSheet } from "react-native";
import Colors from "../colors/Colors";

export default Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundContainer,
    paddingHorizontal: 16,
    paddingVertical: 11
  },
  viewPaddingContainer: {
    paddingHorizontal: 16,
    paddingVertical: 11
  },
  backgroundContainer: {
    backgroundColor: Colors.backgroundContainer
  },
  flex1: {
    flex: 1
  },
  flex2: {
    flex: 2
  },
  flex3: {
    flex: 3
  },
  flex4: {
    flex: 4
  },
  flex5: {
    flex: 5
  },
  flex6: {
    flex: 6
  },
  flex7: {
    flex: 7
  },
  flex8: {
    flex: 8
  },
  flex9: {
    flex: 9
  },
  flex10: {
    flex: 10
  },
  viewCenterHorizontal: {
    alignItems: "center"
  },
  viewCenterVertical: {
    justifyContent: "center"
  },
  viewCenter: {
    alignItems: "center",
    justifyContent: "center"
  },
  viewRight: {
    flexDirection: "row-reverse"
  },
  viewLeft: {
    /*default*/
    // alignItems:'flex-start'
  },
  viewBottom: {
    flexDirection: "column-reverse"
  },
  viewTop: {
    /*default*/
    // alignItems:'flex-start'
  },
  viewFull: {
    alignItems: "stretch"
  },
  nRow: {
    flexDirection: "column"
  },
  nColumn: {
    flexDirection: "row"
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  viewOverride: {
    position: "absolute"
  },
  viewFull: {
    width: "100%",
    height: "100%"
  },
  viewFullWidth: {
    width: "100%"
  },
  viewFullHeight: {
    height: "100%"
  }
});
