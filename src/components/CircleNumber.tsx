import { StyleSheet, Text } from "react-native"

const CircleNumber = (props: {
    style?: {}; 
    quantity: number
}) => {
    return (
        <Text testID="circleNumber" style={[styles.textStyle, props.style]}>{props.quantity}</Text>
    )
}

export default CircleNumber;

const styles = StyleSheet.create({
    textStyle : {
        textAlign:"center",
        textAlignVertical:"center",
        zIndex: 2,
        backgroundColor:"#A51BB6", 
        color: "#fff",
        position:"absolute",
        width:30,
        height:30,
        borderRadius:50,
        top:5,
        left:5
        }
})