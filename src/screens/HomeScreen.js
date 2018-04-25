import React from 'react';

import { View, Text, Container, Header, Footer, Content, Left, Title, Right, Icon, Button } from 'native-base'
import { Image, StatusBar } from 'react-native'
import HomeSliderList from '../components/HomeSliderList'
import HomeBigSliderList from '../components/HomeBigSliderList'
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
    this.state = {};
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
        <Content padder style={{backgroundColor: '#fff'}}>
          <HomeSliderList title={'Ranking list'} data={rankingList}/>
          <HomeSliderList title={'Latest songs'} data={rankingList}/>
          
          <HomeBigSliderList title={'Hit MV'} />
          
        </Content>
        <Footer style={{backgroundColor: '#fff'}}>
        </Footer>
      </Container>
    );
  }
}