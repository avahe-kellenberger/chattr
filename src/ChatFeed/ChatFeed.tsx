import React from 'react';
import { Text, View } from 'react-native';

interface Props {
  navigation: any;
}

export default class ChatFeed extends React.Component<Props> {
  public static defaultProps: Props = {
    navigation: {},
  };

  public render() {
    return (
      <View>
        <Text>Chat Feed</Text>
      </View>
    );
  }
}
