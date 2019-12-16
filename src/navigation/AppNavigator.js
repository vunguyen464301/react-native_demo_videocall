import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ConnectIDScreen from '../screens/ConnectIDScreen';
// import CallScreen from '../screens/CallScreen';

const MainNavigator = createStackNavigator({
    ConnectID: {screen: ConnectIDScreen},
    // CallScreen:{screen:CallScreen}
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
      tabBarVisible: false
    }
  });

const App = createAppContainer(MainNavigator);

export default App;
