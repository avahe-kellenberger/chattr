import App from '../src/App';
import renderer, { ReactTestRenderer } from 'react-test-renderer';
import React from 'react';

test('Renders correctly with default', () => {
    const app: ReactTestRenderer = renderer.create(<App />);
    expect(app).toMatchSnapshot();
});
