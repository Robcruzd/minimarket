import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CircleNumber from "../components/CircleNumber";
import Header from "../components/Header";
import { addProduct, rmProduct } from "../redux/slices/productSlice";
import { TouchableOpacity } from "react-native";
import { setTotalPrice } from "../redux/slices/totalPriceSlice";

let widthCard = Dimensions.get("window").width - 12;

const Product = (props: {
    route: any; navigation: any
}) => {

    const product = props.route.params.product;
    const dispatch = useDispatch();
    const productRedux = useSelector((state:any) => {
        const products = state.productSlice;
        const productRedux = products.find((element:any) => element.id === product.id);
        return productRedux});

    const addThisProduct = () => {
        dispatch(addProduct(product));
        dispatch(setTotalPrice(product.price));
    }

    const rmThisProduct =()=>{
        dispatch(rmProduct(product));
        if(productRedux){
            dispatch(setTotalPrice(-product.price));
        }
    }

    

    return (
        <SafeAreaView style={styles.safeArea}>
            <Header title="Product" navigation={props.navigation}/>
            <ScrollView style={styles.scroll}>
                <View 
                    style={styles.viewProduct}
                    >   
                    {/* {console.log("product: ", product)} */}
                        {productRedux && 
                            <CircleNumber quantity={productRedux.quantity}/>
                        }
                    <Image
                        style={styles.imageProd}
                        source={{
                        uri: product.urlImage,
                        }}
                    />
                    <View style={[styles.row_between, styles.center_width]}>
                        <View style={styles.row_between}>
                            <Text style={styles.textName}>{product.name}</Text>
                            <Text style={styles.textColorPunto}> • </Text>
                            <Text style={styles.textPrice}>${product.price}</Text>
                        </View>
                        <View style={styles.viewAddRm}>
                            <TouchableOpacity 
                                onPress={() => rmThisProduct()} 
                                style={[styles.touchable]}>
                                <Text style={styles.textAddRm}>-</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={() => addThisProduct()} 
                                style={[styles.touchable, {backgroundColor: "#A51BB6"}]}>
                                <Text style={styles.textAddRm}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.viewDescription}>
                    <Text>{product.description}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Product;

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor:'white', 
        paddingHorizontal:5
    },
    scroll: {
        marginBottom:70
    },
    viewProduct: { 
        flexDirection: 'column', 
        alignItems:'center' 
    },
    imageProd: {
        width:widthCard, 
        height:widthCard
    },
    row_between:{
        flexDirection:'row', 
        justifyContent:'space-between'
    },
    center_width: {
        width:"100%", 
        alignItems:'center'
    },
    textName: {
        fontWeight:'bold', 
        fontSize:16, 
        color:'black'
    },
    textColorPunto: { 
        color:'#ECBDF2'
    },
    textPrice: {
        fontWeight:'bold', 
        fontSize:16, 
        color:'#A51BB6'
    },
    viewAddRm: {
        flexDirection:'row', 
        justifyContent:'flex-end', 
        alignItems: "center", 
        marginRight:20
    },
    touchable: {
        backgroundColor:"#ddd",
        flexDirection: 'row', 
        height: 30, 
        width: widthCard*0.1,
        alignItems: 'center',
        justifyContent: 'center',
        elevation:3
    },
    textAddRm : {
        fontWeight:'bold', 
        fontSize:20, 
        color:'black',
    },
    viewDescription: {
        borderBottomWidth:1, 
        borderTopWidth:1, 
        borderTopColor: "#ECBDF2",
        borderBottomColor: "#ECBDF2", 
        marginVertical:5
    }
})