import { Dimensions, Image, StyleSheet, TouchableOpacity } from "react-native";
import CircleNumber from "./CircleNumber";

let widthCard = Dimensions.get("window").width/2 - 17;

const Card = (props: {myCart:any, product:any, navigation:any, index:number}) => {
    return (
        <TouchableOpacity 
            onPress={() => props.navigation.navigate("Product", { product: props.product, myCart:props.myCart})}
            style={styles.touch}
            key={props.index}>
                {props.myCart && 
                    <CircleNumber quantity={props.myCart.quantity}/>
                }
            <Image
                style={styles.imageProd}
                source={{
                uri: props.product.urlImage,
                }}
            />
        </TouchableOpacity>
    )
}

export default Card;

const styles = StyleSheet.create({
    touch: {
        borderWidth:1, 
        borderColor:"#aaaaaa", 
        margin: 5
    },
    imageProd: {
        width:widthCard, 
        height:widthCard
    }
})