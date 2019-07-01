import React from 'react';
import { Text, View } from 'react-native';
import { Colors, FAB } from 'react-native-paper';
import { NavigationContainerProps } from 'react-navigation';
import { ChatFeedStyle } from './chatfeedstyles';

interface Props extends NavigationContainerProps {
  theme?: any;
}

export default class ChatFeed extends React.Component<Props> {
  public constructor(props: Props) {
    super(props);
    this.navigate = this.navigate.bind(this);
  }

  public navigate() {
    if (this.props.navigation) {
      this.props.navigation.navigate('NewChat');
    }
  }

  public render() {
    return (
      <View style={ChatFeedStyle.view}>
        <Text>Chat Feed</Text>
        <FAB
          style={ChatFeedStyle.fab}
          icon="add"
          theme={{ colors: { accent: Colors.red300 } }}
          onPress={this.navigate}
        />
      </View>
    );
  }
}
