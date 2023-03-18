import React from 'react';
import { Dimensions, Image } from 'react-native';
import { create } from 'react-test-renderer';
import ListItem from '../src/components/ListItem';

const widthCard = Dimensions.get('window').width / 4;

describe('<ListItem />', () => {
  it('renders correctly', () => {
    const product = {
      quantity: 0,
      urlImage: 'https://example.com/image.png',
    };
    const listItemJson = create(<ListItem index={0} product={product} />).toJSON();
    expect(listItemJson).toMatchSnapshot();
  });

  it('renders the CircleNumber component', () => {
    const product = {
      quantity: 3,
      urlImage: 'https://example.com/image.png',
    };
    const testRenderer = create(<ListItem index={0} product={product} />);
    const circleNumberInstance = testRenderer.root.findByProps({ testID: 'circleNumber' });
    expect(circleNumberInstance).toBeTruthy();
  });

  it('renders the Image component with the correct source', () => {
    const product = {
      quantity: 3,
      urlImage: 'https://example.com/image.png',
    };
    const testRenderer = create(<ListItem index={0} product={product} />);
    const imageInstance = testRenderer.root.findByProps({ testID: 'imageProd' });
    expect(imageInstance.props.source.uri).toBe(product.urlImage);
  });

  it('renders the Image component with the correct style', () => {
    const product = {
      quantity: 3,
      urlImage: 'https://example.com/image.png',
    };
    const testRenderer = create(<ListItem index={0} product={product} />);
    const imageInstance = testRenderer.root.findByProps({ testID: 'imageProd' });
    expect(imageInstance.props.style).toEqual(expect.objectContaining({
      width: widthCard,
      height: widthCard,
      marginLeft: 20,
    }));
  });
});