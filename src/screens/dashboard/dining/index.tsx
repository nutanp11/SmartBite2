import { FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import { Colors } from '../../../constants/Colors';
import { removeCartItem } from '../../../redux/CartSlice';

const Dining = () => {
const dispatch= useDispatch();

  interface CartItem {
    id: string;
    title: string;
    image: any;
  }

  interface MenuItem {
    id: string;
    name: string;
    price: string;
    description: string;
    image: string;
  }

  interface RootState {
    cart: CartItem[];
  }
  const addedItems = useSelector((state: RootState) => state.cart);

  const removeItem = (item: number): void => {
    dispatch(removeCartItem(item));
  };

  const renderItem = ({ item, index }: { item: MenuItem, index: number }) => (
    <View key={index} style={{ alignItems: "center", padding: 5, backgroundColor: Colors.white, flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
      <View style={{ width: '66%' }}>
        <Text style={styles.itemName}>{item?.name}</Text>
        <Text style={styles.itemPrice}>{item.price} Rs/-</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <ImageBackground source={{ uri: item?.image }} style={{ borderRadius: 5, width: 120, height: 120, justifyContent: "flex-end", alignItems: "center" }}>
          <TouchableOpacity onPress={() =>  removeItem(index)} style={{ flexDirection: 'row', alignItems: "center", backgroundColor: Colors.appTheme, paddingHorizontal: 20 }}>
            <Text style={{ color: Colors.white, fontWeight: "700", marginVertical: 3 }}>remove</Text>
            <Icon style={{ marginStart: 10, color: Colors.white }} name="minus" size={15} />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );


  return (
    <View>
      <FlatList
        data={addedItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default Dining

const styles = StyleSheet.create({

  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  }
})