import React from 'react';
import { View } from 'native-base'
import { Image, Animated } from 'react-native'
export default class HomeSeekBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seek: 0
    };
  }

  render() {
    const seek_percentage = parseFloat(100 - (this.props.seek || 0)).toFixed(2);
    const dynamic_width = {width: seek_percentage + '%'};
    console.log("DYNAMIC WIDTH: ", dynamic_width);
    return (
      <View style={{flexDirection: 'column'}}>
        <Image source={require('../img/icons/seek_bar.png')} style={{height: 3, width: 'auto'}}/>
        <View style={{backgroundColor: '#fff', height: 4, width: '0%', position: 'absolute', right: 0,...dynamic_width}}/>            
      </View>
    )
  }
}