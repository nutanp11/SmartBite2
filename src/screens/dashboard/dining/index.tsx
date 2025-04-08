import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import { Colors } from '../../../constants/Colors';
import { decreaseQuantity, increaseQuantity, removeCartItem } from '../../../redux/CartSlice';
import { useNavigation } from '@react-navigation/native';
import { Images } from '../../../assets/images';

const Cart = () => {
  const dispatch = useDispatch();
  interface CartItem {
    id: string;
    title: string;
    name: string;
    image: any;
    price: string;
    quantity: number;
  }

  const addedItems = useSelector((state: { cart: CartItem[] }) => state.cart);
  const navigation = useNavigation();

  const increaseItemQuantity = (id: string) => {
    dispatch(increaseQuantity(id));
  };

  const decreaseItemQuantity = (id: string) => {
    dispatch(decreaseQuantity(id));
  };

  const getSubTotal = () => {
    return addedItems.reduce((total, item) => {
      const itemPrice = parseFloat(item.price);
      return total + itemPrice * item.quantity;
    }, 0);
  };

  const calculateGST = (subTotal: number) => {
    return subTotal * 0.18;
  };

  const calculateDeliveryFee = (distance: number) => {
    const feePerKm = 3;
    return feePerKm * distance;
  };

  const getGrandTotal = () => {
    const subTotal = getSubTotal();
    const gst = calculateGST(subTotal);
    const deliveryFee = calculateDeliveryFee(10);
    return subTotal + gst + deliveryFee;
  };

  const renderItem = ({ item }: { item: CartItem }) => {
    const quantity = item.quantity || 0;

    return (
      <View style={{ alignItems: 'center', padding: 10, backgroundColor: Colors.white, flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ width: '66%' }}>
          <Text style={styles.itemName}>{item?.name}</Text>
          <Text style={styles.itemPrice}>{item.price} Rs/-</Text>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          {quantity > 0 && (
            <View style={{ flexDirection: 'row', backgroundColor: "#FEE5EB", borderRadius: 10, borderWidth: 1, borderColor: Colors.appTheme, alignItems: 'center', marginTop: 10 }}>
              <TouchableOpacity onPress={() => decreaseItemQuantity(item.id)} style={{ paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5 }}>
                <Icon style={{ color: Colors.appTheme }} name="minus" size={15} />
              </TouchableOpacity>
              <Text style={{ marginHorizontal: 10, color: Colors.black }}>{quantity}</Text>
              <TouchableOpacity onPress={() => increaseItemQuantity(item.id)} style={{ paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5 }}>
                <Icon style={{ color: Colors.appTheme }} name="plus" size={15} />
              </TouchableOpacity>
            </View>
          ) }
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView nestedScrollEnabled={true} style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={{ tintColor: Colors.black, width: 25, height: 18 }} source={Images.back} />
          </TouchableOpacity>
          <Text style={{ marginStart: 20, fontSize: 22, fontWeight: '700' }}>Cart</Text>
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <Text style={styles.addItem}>ITEMS ADDED</Text>
          <FlatList
            data={addedItems}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row', padding: 10, backgroundColor: Colors.white, alignItems: "center" }}>
            <View style={{ borderWidth: 0.8, padding: 2, borderRadius: 25 }}>
              <Icon name="plus" size={20} />
            </View>
            <Text style={styles.addmoreText}>Add more items</Text>
          </TouchableOpacity>
          <Text style={styles.billSummary}>BILL SUMMARY</Text>
          <View style={{ backgroundColor: Colors.white, padding: 10 }}>
            <View style={styles.commanviewStyle}>
              <Text style={styles.totalText}>Sub total Price :</Text>
              <Text style={styles.totalText}>{getSubTotal()} Rs/-</Text>
            </View>
            <View style={styles.commanviewStyle}>
              <Text style={styles.totalText}>GST</Text>
              <Text style={styles.totalText}>{calculateGST(getSubTotal()).toFixed(2)} Rs/-</Text>
            </View>
            <View style={styles.commanviewStyle}>
              <Text style={styles.totalText}>Delivery partner fee for 10 km</Text>
              <Text style={styles.totalText}>{calculateDeliveryFee(10)} Rs/-</Text>
            </View>
          </View>
          <View style={styles.totalViewStyle}>
            <Text style={styles.totalText}>Grand Total</Text>
            <Text style={styles.totalText}>{getGrandTotal().toFixed(2)} Rs/-</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  addItem: { fontSize: 16, textAlign: 'center', color: Colors.grey, fontWeight: '700', marginVertical: 5 },
  totalViewStyle: {
    backgroundColor: Colors.white, padding: 10,
    borderTopWidth: 1,
    borderTopColor: Colors.grey,
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  commanviewStyle: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  billSummary: {
    fontSize: 16, textAlign: 'center',
    color: Colors.grey, fontWeight: '700', marginVertical: 10
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  totalContainer: {
    backgroundColor: Colors.white,
    alignItems: 'flex-end',
  },
  totalText: {
    fontSize: 16,
    color: Colors.black,
    lineHeight: 25,
  },
  addmoreText: {
    marginStart: 10,
    fontSize: 16,
    fontWeight: '700',
    color: Colors.black,
  },
});

export default Cart;
