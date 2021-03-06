import React from 'react';
import { Image } from 'react-native';
import { CoordinatorLayout, BottomSheetBehavior } from 'react-native-bottom-sheet-behavior'
import { View, Text, Container, Header, Footer, Content, Left, Title, Right, Icon, Button, Body } from 'native-base'

export default class BottomSheetBehavior extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <CoordinatorLayout style={{position: 'absolute', bottom: 0, width: '100%', height: 'auto'}}>
      {/* <View style={{ flex: 1, backgroundColor: 'red' }}></View> //BACKDROP*/}
      
      <BottomSheetBehavior
        ref='bottomSheet'
        peekHeight={72}
        hideable={false}
        state={BottomSheetBehavior.STATE_COLLAPSED}>
        <View style={{backgroundColor: '#fff', flex: 1}}>
          <View>
            <HomeSeekBar seek={this.state.seek}/>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Left style={{flex: 0.2}}>
                <Avatar
                  source={require('../img/icons/playing_song.png')}
                  onPress={() => console.log("Works!")}
                  activeOpacity={0.7}
                  height={70}
                  width={70}
                />
              </Left>
              <Body style={{flex: 0.55, justifyContent: 'center', alignItems: 'flex-start',marginLeft: 10}}>
                <Text style={{color: PRIMARY_COLOR, fontSize: 18,fontWeight: 'bold', flexWrap: 'wrap'}}>Someone Like You</Text>
                <Text style={{color: '#999999', fontSize: 14}}>Atif Aslam</Text>
              </Body>
              <Right style={{flex: 0.25, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',marginLeft: 5,marginRight: 6}}>
                <Button transparent style={{height: 40, width: 45, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('../img/icons/next_song.png')} style={{height: 30, width: 25}} />
                </Button>
                <Button transparent style={{height: 40, width: 45, justifyContent: 'center', alignItems: 'center'}} onPress={() => this.onPlayPause()}>
                  {
                    this.state.playBtn ?
                      <Image source={require('../img/icons/play_pink.png')} style={{height: 30, width: 25}}/>
                    : <Image source={require('../img/icons/pause_song.png')} style={{height: 30, width: 25}}/>
                  }
                </Button>
              </Right>
            </View>
          </View>
          <View style={{flex:1, height: this.props.deviceHeight, backgroundColor: '#fff'}} >
            <PlayingSongScreen />
          </View>
        </View>
      </BottomSheetBehavior>
      {/* <FloatingActionButton autoAnchor ref="fab" /> */}
      </CoordinatorLayout>

    )
  }
}
