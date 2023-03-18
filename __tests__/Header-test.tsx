import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { useSelector } from 'react-redux';
import Header from '../src/components/Header';

jest.mock('react-redux', () => ({
  useSelector: jest.fn()
}));

describe('<Header />', () => {

  let navigation:any;

  beforeEach(() => {
    navigation = { navigate: jest.fn() };
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders correctly with a title and a logo', () => {
    (useSelector as jest.Mock).mockReturnValueOnce(0);
    const title = 'Home';
    const header = renderer.create(<Header title={title} navigation={navigation} />).toJSON();
    expect(header).toMatchSnapshot();
  });

  it('renders correctly with a title and a shopping cart', () => {
    (useSelector as jest.Mock).mockReturnValueOnce(10);
    const title = 'Shopping Cart';
    const header = renderer.create(<Header title={title} navigation={navigation} />).toJSON();
    expect(header).toMatchSnapshot();
  });

  it('navigates to Home when clicked on shopping cart on the Product or ShoppingCart page', () => {
    (useSelector as jest.Mock).mockReturnValueOnce(0);
    const title = 'Home';
    const header = renderer.create(<Header title={title} navigation={navigation} />);
    const shoppingCart = header.root.findByProps({ testID: 'shoppingCartButton' });
    act(() => shoppingCart.props.onPress());
    expect(navigation.navigate).toHaveBeenCalledWith('ShoppingCart');
  });

  it('navigates to ShoppingCart when clicked on the shopping cart on the Home page', () => {
    (useSelector as jest.Mock).mockReturnValueOnce(10);
    const title = 'Shopping Cart';
    const header = renderer.create(<Header title={title} navigation={navigation} />);
    const shoppingCart = header.root.findByProps({ testID: 'shoppingCartButton' });
    act(() => shoppingCart.props.onPress());
    expect(navigation.navigate).toHaveBeenCalledWith('Home');
  });

});
