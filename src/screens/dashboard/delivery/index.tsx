/* eslint-disable react-native/no-inline-styles */
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Colors } from '../../../constants/Colors';

import ProfileInfo from '../components/ProfileInfo';
import SearchInput from '../components/SearchInput';


import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Restaruant from '../components/Restaruant';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

export type RootStackParamList = {
  Home: undefined;
};

type HomeProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

interface CartItem {
  id: string;
  title: string;
  image: any;
  quantity: number
}

interface RootState {
  cart: CartItem[];
}

interface MenuItem {
  id: string;
  name: string;
  title:string;
  price: string;
  description: string;
  image: string;
  quantity: number
}
const Delivery: React.FC<HomeProps> = () => {
  const addedItems = useSelector((state: RootState) => state.cart);
  const navigation = useNavigation();
  const totalQuantity =  addedItems?.reduce((total, item) => total + item?.quantity, 0);
  
  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
      <View style={{ flex: 0.1, backgroundColor: Colors.white }}>
        <ProfileInfo />
      </View>
      <View style={{ flex: 0.9}}>
      
        <Restaruant />
       
      </View>
    </View>
    {totalQuantity > 0  &&
                  <TouchableOpacity onPress={()=> navigation.navigate('Cart')}>

             <View style={{paddingHorizontal:30,padding:10, backgroundColor: Colors.appTheme,flexDirection:'row',
             justifyContent:"space-between", alignItems:'center', }}>
              <View>
              <Text style={{color: Colors.white, fontSize:16}}>{totalQuantity} items added</Text>
              <Text style={{color: Colors.white, fontSize:16, fontWeight:'600', textAlign:'center'}}>View Cart</Text>
              </View>
            
              <Icon name="rightcircle" color={'white'} size={20}/>
             </View>
             </TouchableOpacity>
            }
    </SafeAreaView>
  );
};

export default Delivery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appgrey,
    paddingHorizontal: 12,
    paddingTop: 10,
  },
});
