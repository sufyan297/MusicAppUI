import React from 'react';

import { View, Text, Container, Header, Footer, Content, Left, Title, Right, Icon, Button, Body } from 'native-base'
import { Avatar } from 'react-native-elements'
import { PRIMARY_COLOR } from '../constants/Colors'

import { Image, StatusBar, Dimensions } from 'react-native'
import HomeSliderList from '../components/HomeSliderList'
import HomeBigSliderList from '../components/HomeBigSliderList'
import HomeSingersList from '../components/HomeSingersList'
import PlayingSongBar from '../components/PlayingSongBar'
const rankingList = [
  {
    name: 'Bodak Yellow',
    image: 'a.png'
  },
  {
    name: 'Feel It Still',
    image: 'b.png'
  },
  {
    name: 'Thunder',
    image: 'c.png'
  },
  {
    name: 'Attention',
    image: 'd.png'
  }
]
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    let height = Dimensions.get('window').height
    this.state = {
      deviceHeight: height
    };
  }

  componentDidMount() {
    console.log("DeviceHeight: ", this.state.deviceHeight);
  }
  

  render() {
    return (
      <Container>
        <StatusBar
          backgroundColor="red"
          barStyle="light-content"
          hidden={true}
          animated={true}
        />
        <Header noShadow style={{backgroundColor: '#fff'}}>
          <Left>
            <Button transparent>
              <Image source={require('../img/icons/menu.png')} style={{height: 22, width: 22}}/>
            </Button>
          </Left>
          <Right>
            <Button transparent>
              <Image source={require('../img/icons/search.png')} style={{height: 22, width: 22}}/>
            </Button>
          </Right>          
        </Header>
        <Content padder style={{backgroundColor: '#fff', marginBottom: 70}}>
          <HomeSliderList title={'Ranking list'} data={rankingList}/>
          <HomeSliderList title={'Latest songs'} data={rankingList}/>
          
          <HomeBigSliderList title={'Hit  MV'} />
          
          <HomeSingersList title={'The singer'}/>
        </Content>

        <PlayingSongBar deviceHeight={this.state.deviceHeight}/>
        {/* <Footer style={{backgroundColor: '#fff'}}> */}
          
        {/* </Footer> */}
        {/* <Footer style={{backgroundColor: '#fff', height: 73, flexDirection: 'column'}}>
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
            <Body style={{flex: 0.55, justifyContent: 'center', alignItems: 'flex-start'}}>
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
        </Footer> */}
      </Container>
    );
  }
}