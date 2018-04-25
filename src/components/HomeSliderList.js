import React from 'react';
import { View, Left, Text, Right, Button, Content } from 'native-base'
import { Image } from 'react-native'
import { PRIMARY_COLOR } from '../constants/Colors'
export default class HomeSliderList extends React.Component {
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
            {/* {
              this.props.data.map((row, idx) =>
              {
                let image_path = '../img/songs/a.png';
                return (
                  <View style={{flex: 1, alignItems: 'center', padding: 5}} key={idx}>
                    <Image source={require(image_path)} style={{width: 120, height: 120}}/>
                    <Text>
                      {row.name}
                    </Text>
                  </View>
                )
              }
            )
            } */}
            <View style={{flex: 1, alignItems: 'center', padding: 5}}>
              <Image source={require('../img/songs/a.png')} style={{width: 120, height: 120}}/>
              <Text>
              Bodak Yellow
              </Text>
            </View>
            <View style={{flex: 1, alignItems: 'center', padding: 5}}>
              <Image source={require('../img/songs/b.png')} style={{width: 120, height: 120}}/>
              <Text>
                Feel It Still
              </Text>
            </View>
            <View style={{flex: 1, alignItems: 'center', padding: 5}}>
              <Image source={require('../img/songs/c.png')} style={{width: 120, height: 120}}/>
              <Text>
                Thunder
              </Text>
            </View>
            <View style={{flex: 1, alignItems: 'center', padding: 5}}>
              <Image source={require('../img/songs/d.png')} style={{width: 120, height: 120}}/>
              <Text>
                Attention
              </Text>
            </View>
          </Content>
        </View>
      </View>
    )
  }
}