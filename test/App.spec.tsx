import { shallow } from 'enzyme';
import React from 'react';
import { FAB } from 'react-native-paper';
import renderer, { ReactTestRenderer } from 'react-test-renderer';
import ChatFeed from '../src/ChatFeed/ChatFeed';

test('Renders correctly with default', () => {
  const app: ReactTestRenderer = renderer.create(<ChatFeed />);
  expect(app).toMatchSnapshot();
});

const createTestProps = (props: Record<string, any>) => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...props,
});

test('has a button that links to new chat', () => {
  let props: any;
  props = createTestProps({});

  const app = shallow(<ChatFeed {...props} />);

  app.find(FAB).simulate('press');
  expect(props.navigation.navigate).toBeCalledWith('NewChat');
});
