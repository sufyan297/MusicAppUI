import React from 'react';

import { View, Text } from 'native-base'

export default class PlayingSongScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>
          Hey Wassup!
        </Text>
      </View>
    )
  }
}