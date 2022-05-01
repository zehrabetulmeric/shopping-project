import React from "react";
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback} from "react-native";


const ProductCard = (props) => {
    return(
        <TouchableWithoutFeedback onPress={props.onPress}>
        <View style={styles.container}>
            <Image
            source={{uri: props.image}} 
            style={styles.image}
            />
            <View style={styles.textContainer}>
            <Text style={styles.title}>{props.title}</Text>
            <View>
            <Text style={styles.category}>{props.category}</Text>
            <Text style={styles.price}>{props.price}$</Text>
            </View>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:  {
        backgroundColor: 'white',
        width: '48%',
        margin: '1%',
        padding: 10,
        borderRadius: 10,
        flex: 1,
        
    },

    textContainer: {
        flex:1,
        justifyContent: 'space-between'
    },

    image: {
        width: 180,
        minHeight: 180,
        alignSelf: 'center',
        marginTop: 5,
        resizeMode: 'contain'
    },

    title: {
        fontSize: 17,
        marginTop: 10,
        color: 'black',
    },

    category: {
        fontSize: 15,
        marginTop: 5,
        fontStyle: 'italic',
        color: 'gray'
    },

    price: {
        fontSize: 16,
        marginVertical: 5,
        color: 'black'
    }
})

export default ProductCard;