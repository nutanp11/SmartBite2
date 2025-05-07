import React, { useEffect, useState } from 'react';
import { FlatList, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Images } from '../../../assets/images';
import { Colors } from '../../../constants/Colors';
import { useNavigation, RouteProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem, decreaseQuantity, increaseQuantity } from '../../../redux/CartSlice';
import { StackParamList } from '../../../navigation/StackNavigator';

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

interface Section {
  section: string;
  items: MenuItem[];
}

type RestaurantDetailsRouteProp = RouteProp<StackParamList, 'RestaurantDetails'>;

interface RestaurantDetailsProps {
  route: RestaurantDetailsRouteProp;
}

const RestaurantDetails: React.FC<RestaurantDetailsProps> = ({ route }) => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});
  const dispatch = useDispatch();
  const addedItems = useSelector((state: RootState) => state.cart);
  const navigation = useNavigation();
  const totalQuantity =  addedItems.reduce((total, item) => total + item?.quantity, 0);
  

  const routeD = route.params.itemData;
  console.log("addedItems", addedItems);
 console.log("quantity", totalQuantity);


  useEffect(() => {
    if (routeD.menus && routeD.menus.length > 0) {
      const firstSection = routeD.menus[0].section;
      setExpandedSections({
        [firstSection]: true,
      });
    }
  }, [routeD.menus]);

  const toggleSection = (section: string) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  const addItem = (item: MenuItem) => {
    dispatch(addCartItem(item));
  };

  const increaseItemQuantity = (id: string) => {
    dispatch(increaseQuantity(id));
  };

  const decreaseItemQuantity = (id: string) => {
    dispatch(decreaseQuantity(id));
  };

  const renderItem = ({ item, index }: { item: MenuItem, index: number }) => {
    const cartItem = addedItems.find((cartItem) => cartItem.id === item.id);
    const quantity = cartItem ? cartItem.quantity : 0;
    return (
    <View key={index} style={{ alignItems: "center",elevation:1,width:'98%',alignSelf:"center",
     borderRadius:5, padding: 15, backgroundColor: Colors.white, 
     flexDirection: "row", justifyContent: "space-between", 
     marginBottom: 8 }}>
      <View style={{ width: '66%' }}>
        <Text style={styles.itemName}>{item?.name}</Text>
        <Text style={styles.itemPrice}>{item.price} Rs/-</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
      <View style={{ marginHorizontal: 10,borderRadius: 10,overflow:'hidden' }}>
        <ImageBackground source={{ uri: item?.image }} style={{  width: 120, height: 120, justifyContent: "flex-end", alignItems: "center" }}>
        {quantity > 0 ? (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, backgroundColor:Colors.appTheme }}>
              <TouchableOpacity onPress={() => decreaseItemQuantity(item.id)} style={{ backgroundColor: Colors.appTheme, padding: 8, borderRadius: 5 }}>
              <Icon style={{ color: Colors.white }} name="minus" size={14} />
              </TouchableOpacity>
              <Text style={{ marginHorizontal: 13, color: Colors.white, fontWeight:'600' }}>{quantity}</Text>
              <TouchableOpacity onPress={() => increaseItemQuantity(item.id)} style={{ backgroundColor: Colors.appTheme, padding: 5, borderRadius: 5 }}>
              <Icon style={{  color: Colors.white }} name="plus" size={14} />
              </TouchableOpacity>
            </View>
          ) :  <TouchableOpacity onPress={() => addItem(item)} style={{ flexDirection: 'row', alignItems: "center", backgroundColor: Colors.appTheme, paddingHorizontal: 20 }}>
          <Text style={{ color: Colors.white, fontWeight: "700", marginVertical: 3 }}>Add</Text>
          <Icon style={{ marginStart: 10, color: Colors.white }} name="plus" size={14} />
        </TouchableOpacity>}
         
        </ImageBackground>
      
      </View>
    </View>
  )};

  const renderSection = ({ item, index }: { item: Section, index: number }) => (
    <View style={styles.sectionContainer} key={index}>
      <TouchableOpacity onPress={() => toggleSection(item.section)} style={{width:'98%',alignSelf:"center",
        borderRadius: 10,elevation:2, backgroundColor: Colors.white, padding: 15, marginTop: 5,
        flexDirection: "row", justifyContent: "space-between", alignItems: "center"
      }}>
        <View>
          <Text style={{ paddingStart: 5, fontSize: 18, fontWeight: '500' }}>{item.section}</Text>
        </View>
        {expandedSections[item.section] ?
        <Icon2 style={{ color: Colors.black }} name="arrow-drop-up" size={35} />:
        <Icon2 style={{ color: Colors.black }} name="arrow-drop-down" size={35} />}

      </TouchableOpacity>

      {expandedSections[item.section] && (
        <FlatList
        style={{marginTop:8}}
          data={item.items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );

  return (
    <SafeAreaView style={{flex:1}}>
    <ScrollView style={{ flex: 1, backgroundColor: Colors.appgrey }}>
      <View style={{ flexDirection: "row", alignItems: "center", margin: 10 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={{ tintColor: Colors.black, width: 25, height: 18 }} source={Images.back} />
        </TouchableOpacity>
        <Text style={{ marginStart: 20, fontSize: 22, fontWeight: '700' }}>Details</Text>
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <Text style={{ fontSize: 25, fontWeight: '700' }}>{routeD.name}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 16, fontWeight: '600' }}>24 mins . </Text>
          <Text style={{ fontSize: 16, fontWeight: '600' }}>4 Km . </Text>
          <Text style={{ fontSize: 16, fontWeight: '600' }}>Hinjawadi . </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <View style={{ backgroundColor: '#F1F0F0', flexDirection: "row", alignItems: 'center', borderRadius: 10 }}>
            <Icon name="check" size={16} />
            <Text style={{ paddingStart: 5 }}>Frequently recorded</Text>
          </View>
          <View style={{ marginStart: 10, borderRadius: 10, backgroundColor: '#F1F0F0', flexDirection: "row", alignItems: 'center', padding: 10 }}>
            <Icon name="check" size={16} />
            <Text style={{ paddingStart: 5 }}>Frequently recorded</Text>
          </View>
        </View>

        <View style={{ borderRadius: 10, backgroundColor: '#E8E8E8', marginTop: 10, padding: 10, flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <View style={{ borderRadius: 10, backgroundColor: '#D39229', alignSelf: "flex-start", flexDirection: "row", alignItems: 'center', padding: 5 }}>
              <Text style={{ paddingStart: 5, fontSize: 14, color: Colors.white }}>Frequently recorded</Text>
            </View>
            <Text style={{ paddingStart: 5, fontSize: 16, fontWeight: '600' }}>Hurry up! restaurant closes in 40 minutes</Text>
          </View>
          <Icon1 style={{ color: Colors.appDarkTheme }} name="stopwatch" size={55} />
        </View>

        <FlatList
          data={routeD.menus}
          renderItem={renderSection}
          keyExtractor={(item) => item.section}
        />
      </View>
    </ScrollView>
   {totalQuantity > 0  &&
     <View style={{padding:10, backgroundColor: Colors.appTheme, alignItems:'center'}}>
      <TouchableOpacity onPress={()=> navigation.navigate('Cart')}>
      <Text style={{color: Colors.white, fontSize:16}}>{totalQuantity} items added</Text>
      <Text style={{color: Colors.white, fontSize:16, fontWeight:'600', textAlign:'center'}}>View Cart</Text>
      </TouchableOpacity>
     </View>}
     </SafeAreaView>
  );
};

export default RestaurantDetails;

const styles = StyleSheet.create({
  sectionContainer: {
    marginVertical: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
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
  },
});
