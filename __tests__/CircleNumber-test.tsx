import React from 'react';
import { create } from 'react-test-renderer';
import CircleNumber from '../src/components/CircleNumber';

describe('<CircleNumber />', () => {
  test('renders correctly with props', () => {
    const tree = create(<CircleNumber quantity={5} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('renders correct quantity', () => {
    const quantity = 5;
    const circleRenderer = create(<CircleNumber quantity={quantity} />);
    const circleInstance = circleRenderer.root;
    expect(circleInstance.findByProps({testID: 'circleNumber'}).props.children).toBe(quantity);
  });

  test('renders with custom style', () => {
    const customStyle = { color: '#00FF00' };
    const circleRenderer = create(<CircleNumber quantity={5} style={customStyle} />);
    const circleInstance = circleRenderer.root;
    expect(circleInstance.findByProps({testID: 'circleNumber'}).props.style).toContain(customStyle);
  });
});