import React from 'react';
import { StyleSheet, View } from 'react-native';
import {createMaterialTopTabNavigator, createAppContainer} from 'react-navigation';
import SharePlace from './screen/SharePlace'
import ShowPlace from './screen/ShowPlace'

const TabNavigator = createMaterialTopTabNavigator({
  Share: { screen: SharePlace },
  Show: { screen: ShowPlace },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: '#222',
      }
    })
  }
);

const  App = createAppContainer(TabNavigator);
 
class AppContainer extends React.Component {
  render() {
    return(
      <View style={[styles.noti,styles.container]}>
          <App />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 27,
  },
  noti: {
    backgroundColor: "#000"
  }
});


export default AppContainer;