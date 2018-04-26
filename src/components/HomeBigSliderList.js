import React from 'react';
import { View, Left, Text, Right, Button, Content } from 'native-base'
import { Image, ImageBackground } from 'react-native'
import { PRIMARY_COLOR } from '../constants/Colors'
export default class HomeBigSliderList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{justifyContent: 'center'}}>
            <Text style={{fontSize: 28, fontWeight: 'bold'}}>
              {this.props.title || 'List'}
            </Text>
          </View>
          <View style={{justifyContent: 'center'}}>
            <Button rounded bordered small style={{borderColor: PRIMARY_COLOR}}>
              <Text style={{color: PRIMARY_COLOR}} uppercase={false}>
                more
              </Text>
            </Button>
          </View>
        </View>

        <View style={{marginTop: 3}}>
          <Content horizontal>
            <View style={{flex: 1, padding: 5}}>
              <ImageBackground source={require('../img/songs/big_a.png')} style={{width: 320, height: 202, justifyContent: 'center',alignItems: 'center'}}>
                <View style={{height: 36,width: 36,backgroundColor: '#000', opacity: 0.4, justifyContent: 'center',alignItems: 'center', borderRadius: 35, zIndex: 9}}>
                </View>
                <Image source={require('../img/icons/play_white.png')} style={{height: 20, width: 18, zIndex: 10, position: 'absolute'}}/>
              </ImageBackground>
              <Text style={{marginLeft: 20}}>
                All Night
              </Text>
            </View>

            <View style={{flex: 1, padding: 5}}>
              {/* <Image source={require('../img/songs/big_b.png')} style={{width: 320, height: 202}}/> */}
              <ImageBackground source={require('../img/songs/big_b.png')} style={{width: 320, height: 202, justifyContent: 'center',alignItems: 'center'}}>
                <View style={{height: 36,width: 36,backgroundColor: '#000', opacity: 0.4, justifyContent: 'center',alignItems: 'center', borderRadius: 35, zIndex: 9}}>
                </View>
                <Image source={require('../img/icons/play_white.png')} style={{height: 20, width: 18, zIndex: 10, position: 'absolute'}}/>
              </ImageBackground>

              <Text style={{marginLeft: 20}}>
                All Night
              </Text>
            </View>
          </Content>
        </View>
      </View>
    )
  }
}