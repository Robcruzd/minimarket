import React from 'react';
import { TouchableOpacity } from 'react-native';
import renderer from 'react-test-renderer';
import Card from '../src/components/Card';
import CircleNumber from '../src/components/CircleNumber';

describe('<Card />', () => {
  const myCart = {
    quantity: 0,
    urlImage: 'https://example.com/image.png',
  };
  const product = {
      id: 1,
      quantity: 0,
      name: "",
      price: 1000,
      urlImage: 'https://example.com/image.png',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    };
  const navigation = { navigate: jest.fn() };
  const index = 1;

  it('renders correctly', () => {
    const card = renderer
      .create(
        <Card myCart={myCart} product={product} navigation={navigation} index={index} />,
      )
      .toJSON();
    expect(card).toMatchSnapshot();
  });

  it('renders CircleNumber component if myCart prop is present', () => {
    const card = renderer.create(
      <Card myCart={myCart} product={product} navigation={navigation} index={index} />,
    );
    const instance = card.root;
    expect(instance.findByType(CircleNumber)).toBeTruthy();
  });

  it('does not render CircleNumber component if myCart prop is not present', () => {
    const card = renderer.create(
      <Card myCart={undefined} product={product} navigation={navigation} index={index} />,
    );
    const instance = card.root;
    expect(() => instance.findByType(CircleNumber)).toThrow();
  });

  it('navigates to Product screen when TouchableOpacity is pressed', () => {
    const card = renderer.create(
      <Card myCart={myCart} product={product} navigation={navigation} index={index} />,
    );
    const instance = card.root;
    instance.findByType(TouchableOpacity).props.onPress();
    expect(navigation.navigate).toHaveBeenCalledWith('Product', { product, myCart });
  });

});
