import React from 'react';
import { View, Left, Text, Right, Button, Content } from 'native-base'
import { Image, ImageBackground } from 'react-native'
import { PRIMARY_COLOR } from '../constants/Colors'

import { Avatar } from 'react-native-elements'

export default class HomeSingersList extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{justifyContent: 'center'}}>
            <Text style={{fontSize: 28, fontWeight: 'bold'}}>
              {this.props.title || 'The Singer'}
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

            <View style={{flex: 1, alignItems: 'center', padding: 5}}>
              <Avatar
                rounded
                source={require('../img/singers/a.png')}
                height={70}
                width={70}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
              />
              <Text style={{color: '#333333'}}>
                Atif
              </Text>
            </View>

            <View style={{flex: 1, alignItems: 'center', padding: 5}}>
              <Avatar
                rounded
                source={require('../img/singers/b.png')}
                height={70}
                width={70}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
              />
              <Text style={{color: '#333333'}}>
                Arijit
              </Text>
            </View>

            <View style={{flex: 1, alignItems: 'center', padding: 5}}>
              <Avatar
                rounded
                source={require('../img/singers/c.png')}
                height={70}
                width={70}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
              />
              <Text style={{color: '#333333'}}>
                Atif
              </Text>
            </View>

            <View style={{flex: 1, alignItems: 'center', padding: 5}}>
              <Avatar
                rounded
                source={require('../img/singers/d.png')}
                height={70}
                width={70}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
              />
              <Text style={{color: '#333333'}}>
                Shreya
              </Text>
            </View>

            <View style={{flex: 1, alignItems: 'center', padding: 5}}>
              <Avatar
                rounded
                source={require('../img/singers/e.png')}
                height={70}
                width={70}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
              />
              <Text style={{color: '#333333'}}>
                Kate
              </Text>
            </View>
          </Content>
        </View>
      </View>
    )
  }
}