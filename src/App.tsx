import Home from "./screens/Home";
import { Provider } from "react-redux";
import { Store } from "./redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import Product from "./screens/Product";
import ShoppingCart from "./screens/ShoppingCart";

const Stack = createNativeStackNavigator();

const App = () => {

    return (
        <Provider store={Store}>
            <NavigationContainer>
                <NativeBaseProvider>
                <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false, gestureEnabled:true}}>
                    <Stack.Screen name="Home" component={Home}/>
                    <Stack.Screen name="Product" component={Product}/>
                    <Stack.Screen name="ShoppingCart" component={ShoppingCart}/>
                    {/* <Stack.Screen name="Login" component={Login}/> */}
                </Stack.Navigator>
                </NativeBaseProvider>
            </NavigationContainer>
        </Provider>
    )
}

export default App;