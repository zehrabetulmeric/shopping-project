import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator, Image, Dimensions, Button, TouchableOpacity } from 'react-native';
import useFetch from '../components/useFetch';

const device = Dimensions.get("window");

const ProductDetail = ({ route, onPress }) => {
  const { id } = route.params;
  const { loading, data, error } = useFetch('https://fakestoreapi.com/products' + `/${id}`)

  if (loading) {
    return <ActivityIndicator size='large' />
  }
  if (error) {
    return <Text>error</Text>
    console.log(error)
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        
        <Image
          source={{ uri: data.image }}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.category}>{data.category}</Text>
        </View>
        <Text style={styles.description}>{data.description}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{data.price}$</Text>
          <TouchableOpacity
            onPress={onPress}
            style={styles.button}
          >
            <Text style={{ color: 'white', fontSize: 15 }}>Buy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageContainer: {
    backgroundColor: 'white',
    height: device.height / 1.8,
    justifyContent: 'center',
    
  },

  image: {
    backgroundColor: 'white',
    width: device.width / 1.1,
    height: device.height / 2,
    alignSelf: 'center',
    resizeMode: 'contain',

  },

  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,

  },

  title: {
    fontSize: 17,
    marginTop: 10,
    color: 'black',
    fontWeight: 'bold',
  },

  category: {
    fontStyle: 'italic',

  },

  description: {
    fontSize: 13,
    paddingBottom: 15
  },

  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 15
  },

  price: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  button: {
    borderWidth: 1,
    height: 48,
    width: 190,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'black',
    opacity: 0.9
  }

})

export default ProductDetail;
