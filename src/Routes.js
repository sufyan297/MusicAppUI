//@ts-check
import { Scene, Router, Stack, onBackAndroid, Actions } from 'react-native-router-flux';
import React from 'react';


//Screens
import HomeScreen from './screens/HomeScreen'
export default class Routes extends React.Component {
  constructor(props) {
    super(props);
  }

  //Handler
  onBackAndroid() {
    console.log("Back_Button_Pressed.");
  }

  render() {
    return (
      <Router backAndroidHandler={() => this.onBackAndroid()}>
        <Stack key="root">        
          <Scene key="login" component={HomeScreen} hideNavBar={true}/>

        </Stack>
      </Router>
    )
  }

}
