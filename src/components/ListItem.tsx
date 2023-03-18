import { Dimensions, Image, StyleSheet, View } from "react-native";
import CircleNumber from "./CircleNumber";

const widthCard = Dimensions.get("window").width/4;

const ListItem = (props: {index:number, product:any}) => {
    return (
        <View key={props.index} style={styles.viewList}>
            <CircleNumber quantity={props.product.quantity} 
                style={styles.circleNumber}/>
            <Image
                testID="imageProd"
                style={styles.imageProd}
                source={{
                uri: props.product.urlImage,
                }}
            />
        </View>
    )
}
export default ListItem;

const styles = StyleSheet.create({
    viewList: {
        flexDirection:"row", 
        borderBottomWidth:1, 
        borderBottomColor:"#ddd", 
        alignItems:'center', 
        marginLeft:10
    },
    circleNumber: {
        width:widthCard/2, 
        height:widthCard/2, 
        fontSize:widthCard/4, 
        position: "relative", 
        top:0
    },
    imageProd: {
        width:widthCard, 
        height:widthCard, 
        marginLeft:20
    }
})