import renderer, { ReactTestRenderer } from 'react-test-renderer';
import React from 'react';
import { mount } from 'enzyme';
import * as Navigation from 'react-navigation';
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

  const app = mount(<ChatFeed navigation={...props} />);

  expect(props.navigation.navigate).toBeCalledWith('NewChat');
});
