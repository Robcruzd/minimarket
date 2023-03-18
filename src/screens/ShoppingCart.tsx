import { Image, Linking, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import ListItem from "../components/ListItem";
import { IProduct } from "../models/product";

const ShoppingCart = (props: any) => {

    const productsRedux = useSelector((state:any) => state.productSlice);
    const totalPrice = useSelector((state:any) => state.totalPriceSlice.totalPrice);

    return (
        <SafeAreaView style={styles.safeArea}>
            <Header navigation={props.navigation} title="Shopping Cart"/>
            <ScrollView>
                {productsRedux && productsRedux.map((product:IProduct, index:number) => {
                    return (
                        <ListItem key={index} product={product} index={index} />
                    )
                })}
            </ScrollView>
            <View style={styles.viewPrice}>
                <Text style={styles.textTotal}>Total: </Text>
                <Text style={styles.textPrice}>${totalPrice}</Text>
            </View>
            <TouchableOpacity
                style={styles.touchWompi}
                onPress={() => Linking.openURL('https://checkout.wompi.co/p/?mode=widget&public-key=pub_test_Q5yDA9xoKdePzhSGeVe9HAez7HgGORGf&currency=COP&amount-in-cents=4950000&reference=1WLEQAVPCURZ&redirect-url=https%3A%2F%2Ftransaction-redirect.wompi.co%2Fcheck&widget-operation=purchase')}
            >
                <Image
                    style={styles.imageWompi}
                    source={require("minimarket/src/images/escudo.png")}
                />
                <Text style={styles.textPaga}>Paga con <Text style={styles.textWompi}>Wompi</Text></Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default ShoppingCart;

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor:"white", 
        flex:1
    },
    viewPrice: {
        marginVertical:20, 
        marginRight:10, 
        flexDirection:'row', 
        justifyContent:'flex-end'
    },
    textTotal: {
        color:"#aaa", 
        fontSize:20, 
        fontWeight:'bold'
    },
    textPrice: {
        color:"#A51BB6", 
        fontSize:20, 
        fontWeight:'bold'
    },
    touchWompi: {
        marginLeft:20, 
        marginBottom:20, 
        backgroundColor:"#1a4594", 
        height:40, 
        width:"50%", 
        borderRadius:5, 
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'center'
    },
    imageWompi: {
        width:20, 
        height:20
    },
    textPaga:{
        color:'white', 
        fontSize:16, 
        marginLeft:10
    },
    textWompi: {
        fontWeight:"bold"
    }

})