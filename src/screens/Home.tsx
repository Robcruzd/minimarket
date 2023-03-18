import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import Header from "../components/Header";
import { products } from "../services/api";


const Home = (props: { navigation: any; }) => {

    const productsRedux = useSelector((state:any) => state.productSlice);

    return (
        <SafeAreaView style={styles.safeArea}>
            <Header title="Store" navigation={props.navigation}/>
            <ScrollView style={styles.scroll}>
                <View style={styles.wrap}> 
                    {
                        products.map((product, index) => {
                            const myCart = productsRedux.find((element:any) => product.id === element.id);
                            return (
                                <Card myCart={myCart} product={product} index={index} navigation={props.navigation}/>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor:'white', 
        paddingHorizontal:5
    },
    scroll: {
        marginBottom:70
    },
    wrap: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})