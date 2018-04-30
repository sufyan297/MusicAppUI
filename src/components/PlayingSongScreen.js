import React from 'react';

import { View, Text, Header, Left, Right, Button, Icon, Content, Container, Body, Title } from 'native-base'
import { Image } from 'react-native'
import Slider from 'react-native-slider';
import { PRIMARY_COLOR } from '../constants/Colors';

const MIN_TOP = -18;
export default class PlayingSongScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onSliderValueChange(val) {
    console.log("onValueChange: ", val);
  }
  render() {
    return (
      <Container>
        <Header noShadow style={{backgroundColor: 'transparent', position: 'absolute',zIndex: 100}}>
          <Left>
            <Button transparent>
              <Icon name='ios-arrow-down-outline' style={{height: 22,width: 22}}/>
            </Button>
          </Left>
          <Right>
            <Button transparent>
              <Image source={require('../img/icons/share_outline.png')} style={{height: 22, width: 22}}/>            
            </Button>
          </Right>
        </Header>

        <Content>
          <View style={{zIndex: 97}}>
            <Image source={require('../img/songs/playing_main.png')} style={{width: 'auto', height: 412}}/>
          </View>
          <View>
            <Slider 
              maximumValue={0}
              maximumValue={100}
              step={1}
              onValueChange={(val) => this.onSliderValueChange(val)}
              trackStyle={{backgroundColor: '#ddd'}}
              style={{top: MIN_TOP, zIndex: 97}} 
              minimumTrackTintColor={'#ffd995'} maximumTrackTintColor={'#ff8f8a'} thumbTintColor={'transparent'} 
              thumbStyle={{height: 40, width: 40, borderRadius: 50}} 
              thumbImage={require('../img/icons/seek_thumb.png')}/>
          </View>

          <View style={{ top: MIN_TOP - 10, paddingLeft: 15, paddingRight: 15}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Left>
                <Text style={{color: '#d6d6d6'}}>
                  00:49
                </Text>
              </Left>
              <Right>
                <Text style={{color: '#d6d6d6'}}>
                  02:51
                </Text>
              </Right>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Left style={{flex: 1}}>
                <Button transparent style={{height: 30, width: 30}}>
                  <Image source={require('../img/icons/heart.png')} style={{height: 23, width: 27}}/>            
                </Button>
              </Left>
              <Body style={{flex: 3}}>
                <Title style={{color: PRIMARY_COLOR}}>Someone Like You</Title>
                <Text note>Atif Aslam</Text>
              </Body>
              <Right style={{flex: 1}}>
                <Button transparent style={{height: 30, width: 30}}>
                  <Image source={require('../img/icons/download.png')} style={{height: 23, width: 23}}/>            
                </Button>
              </Right>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}