/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Colors } from '../../../constants/Colors';
import { Fonts } from '../../../constants/Fonts';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../../../redux/CartSlice';
import FilterTypes from '../components/FilterTypes';
import { useNavigation } from '@react-navigation/native';
// import { restaurantData } from '../../../utils/data/categories';
import { restaurant } from '../../../utils/data/categories';
import Icon from 'react-native-vector-icons/AntDesign';
import SearchInput from './SearchInput';

export const width = Dimensions.get('window').width;

type Restaurant = {
  id: string;
  name: string;
  location: string;
  image: string;
  categoryId: string; // Assuming each restaurant has a categoryId
};

const RestaurantComponent: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>(restaurant.categories[0].restaurants);
  const [selectedCategory, setSelectedCategory] = useState<string>(''); // Track selected category
  const [searchValue, setSearchValue] = useState<string>('');
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  useEffect(() => {
    if (selectedCategory === '') {
      setFilteredRestaurants(restaurant.categories[0].restaurants);
    } else {
      const category = restaurant.categories.find(
        (cat) => cat.id === parseInt(selectedCategory)
      );
      if (category) {
        console.log("category", category);

        setFilteredRestaurants(category?.restaurants);
      } else {
        setFilteredRestaurants([]);
      }
    }
  }, [selectedCategory]);

  // const handleSearch = (text: string) => {
  //   setSearchValue(text);

  //   if (text.trim() === '') {
  //     setFilteredRestaurants(restaurant.categories[0].restaurants); // Reset if search is cleared
  //   } else {
  //     const filtered = restaurant.categories[0].restaurants.filter(restaurant => 
  //       restaurant.name.toLowerCase().includes(text.toLowerCase()) || 
  //       restaurant.menu.some(item => item.name.toLowerCase().includes(text.toLowerCase()))
  //     );
  //     setFilteredRestaurants(filtered);
  //   }
  // };
  

  const addItem = (item: any) => {
    dispatch(addCartItem(item));
  };

  const restaurantItem = ({ item }: { item: Restaurant }) => (
<TouchableOpacity onPress={() => navigation.navigate('RestarantDetails', { item: item })}>
<View style={{
        marginBottom: 20, backgroundColor: "white", shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2, borderRadius: 20, 
        width: '100%',
      }}>
        <ImageBackground
          source={{ uri: item?.image }}
          resizeMode="cover"
          style={{
            width: '100%', borderRadius: 20, overflow: 'hidden', height: width / 2,
            alignItems: "flex-start", justifyContent: "flex-end",
           
          }}
        >
          <View style={{ backgroundColor: Colors.appTheme, paddingHorizontal: 14, borderTopRightRadius: 10 }}>
            <Text style={{ fontSize: 14,fontWeight:'600',color:Colors.white, fontFamily: Fonts.regular }}>34 Min</Text>
          </View>
        </ImageBackground>
        <View style={{ flexDirection: 'row',marginVertical:8, width: '100%', alignItems: 'center', justifyContent:"center", }}>
          <View style={{ width: '80%' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>
          </View>
          <View style={{
            alignItems: 'center', justifyContent: 'center',
            backgroundColor: 'green', flexDirection: 'row', paddingHorizontal: 5,
            borderRadius: 5
          }}>
            <Text style={{ color: Colors.white, fontSize: 15, padding: 5, fontWeight: '700' }}>4.3</Text>
            <Icon name="star" color={Colors.white} size={12} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.28 }}>
        <SearchInput value={searchValue} onChangeText={handleSearch} />
        <FilterTypes onPress={handleCategoryChange} />
      </View>
      <View style={{ flex: 0.72 }}>
        <Text
          style={{
            fontFamily: Fonts.bold,
            fontSize: 22,
            fontWeight: '900',
            color: Colors.appTheme,
            marginBottom:10
          }}
        >
          {filteredRestaurants.length} Restaurants delivering to you
        </Text>
        <FlatList
          data={filteredRestaurants}
          keyExtractor={(item) => item.id}
          renderItem={restaurantItem}
        />
      </View>
    </View>
  ); 
};

export default RestaurantComponent;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  item: {
    backgroundColor: Colors.tabBackground,
    height: width / 1.5,
    width: width / 1.2,
    marginEnd: 12,
    borderRadius: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  blackViewStyle: {
    backgroundColor: Colors.appTheme,
    margin: 5,
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    alignSelf: 'flex-end',
    alignContent: 'center',
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  imgStyle: {
    height: 148,
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: 354,
  },
});
