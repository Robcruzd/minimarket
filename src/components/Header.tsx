import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import { useSelector } from "react-redux";

const Header = (props: { title: string; navigation:any}) => {

    const totalPrice = useSelector((state:any) => state.totalPriceSlice.totalPrice);

    const isShoppingCart = props.title === 'Shopping Cart';

    const handleScreen = () => {
        if(isShoppingCart){
            props.navigation.navigate("Home");
        }else {
            props.navigation.navigate("ShoppingCart")
        }
    }

    return (
        <View style={styles.viewHeader}>
            <View style={styles.viewArriba}>
                <Image
                    style={styles.imageLogo}
                    source={require("minimarket/src/images/logo.png")}
                />
                <TouchableOpacity 
                    testID="shoppingCartButton"
                    onPress={() => handleScreen()}
                    style={styles.touchTotal}>
                        <View style={[styles.viewPriceTotal, {backgroundColor: isShoppingCart ? "#ECBDF2" : "#A51BB6"}]}>
                            <Image
                                style={styles.imageCarrito}
                                source={isShoppingCart ? require("minimarket/src/images/shopping-cart-p.png") : require("minimarket/src/images/shopping-cart1.png")}
                            />
                            <Text style={[{color:isShoppingCart ? "#A51BB6":'white'}, styles.textTotalPrice]}>${totalPrice}</Text>
                        </View>
                    {isShoppingCart &&
                        <Text style={styles.textX}>X</Text>
                    }
                </TouchableOpacity>
            </View>
                <Text style={styles.textTitle}>{props.title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    viewHeader:{
        borderBottomWidth:1, 
        borderBottomColor: "#ECBDF2", 
        flexDirection: 'column', 
        margin: 5
    },
    viewArriba: { 
        flexDirection: 'row', 
        justifyContent:'space-between',
        alignItems:'center',
        margin: 5
    },
    imageLogo: {
        width:40, 
        height:40
    },
    touchTotal: {
        flexDirection:'row', 
        height:30
    },
    viewPriceTotal: { 
        flexDirection:'row', 
        height:30,
        padding:5
    },
    imageCarrito: {
        width:20, 
        height:20
    },
    textTotalPrice :{
        fontSize:16, 
        marginLeft:5
    },
    textX: {
        fontWeight:'bold',
        fontSize:12, 
        width:20, 
        height:30, 
        backgroundColor: "#A51BB6",
        color:"white",
        textAlign:'center',
        textAlignVertical: 'center'
    },
    textTitle: {
        color: "#A51BB6", 
        fontWeight:'bold', 
        fontSize:16
    }
})