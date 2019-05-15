import { createAppContainer, createStackNavigator } from 'react-navigation';
import ChatFeed from './ChatFeed/ChatFeed';

const AppNavigator = createStackNavigator(
  {
    Home: ChatFeed,
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);
