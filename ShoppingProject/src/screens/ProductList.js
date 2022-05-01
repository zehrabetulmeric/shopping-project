import React from "react";
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import ProductCard from "../components/ProductCard";
import useFetch from "../components/useFetch";

const ProductList = ({navigation}) => {
    const {loading, data, error} = useFetch('https://fakestoreapi.com/products')

    const handlePress = id => {
            navigation.navigate('detail', {id});
    }

    const renderProduct = ({ item }) => <ProductCard
        onPress={() => handlePress(item.id)}
        title={item.title}
        category={item.category}
        description={item.description}
        price={item.price}
        image={item.image}

    />

    if (loading) {
        return <ActivityIndicator size='large' />
    }
    if (error) {
        return <Text>error</Text>
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>PRODUCT LIST</Text>
            <View style={styles.cardContainer}>
                <FlatList
                    numColumns={2}
                    data={data}
                    renderItem={renderProduct}
                />
            </View>
        </View>
    )}

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            paddingHorizontal: '1%',
        },

        cardContainer: {
            flex: 1,
            flexDirection: 'row',
        },

        title: {
            width: '100%',
            fontSize: 24,
            marginVertical: 10,
            padding: 2,
            textAlign: 'center'
        }

    })

    export default ProductList;