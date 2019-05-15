import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, FAB } from 'react-native-paper';
import { NavigationContainerProps } from 'react-navigation';

interface Props extends NavigationContainerProps {
  theme?: any;
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
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
      <View>
        <Text>Chat Feed</Text>
        <FAB
          style={styles.fab}
          icon="add"
          theme={{ colors: { accent: Colors.red300 } }}
          onPress={this.navigate}
        />
      </View>
    );
  }
}
