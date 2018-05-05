import React from 'react';
import { View, Text, Container, Header, Footer, Content, Left, Title, Right, Icon, Button, Body } from 'native-base'
import { PRIMARY_COLOR } from '../constants/Colors'
import { Avatar } from 'react-native-elements'
import { Image, Platform } from 'react-native'

import HomeSeekBar from './HomeSeekBar'
import PlayingSongScreen from './PlayingSongScreen'
export default class PlayingSongBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playBtn: true,
      seek: 0
    };
  }

  playingTimer = null;
  onPlayPause() {
    if (this.state.playBtn) {
      this.playingTimer = setInterval(() => {
        this.setState({seek: parseFloat(this.state.seek + 0.1)});
        console.log("SeekBar: ", this.state.seek);
        if (this.state.seek >= 100) {
          this.setState({playBtn: !this.state.playBtn});          
          clearInterval(this.playingTimer);
        }
      }, 100);
      console.log("Playing Song...");
    } else {
      clearInterval(this.playingTimer);
      console.log("Song Paused.");
    }

    this.setState({playBtn: !this.state.playBtn});
  }


  render() {
    return (
      <View>
        {
          
        }
      </View>
    )
  }
}