/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  FlatList,
  Image,
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
import { restaurantData } from '../../../utils/data/items';
import { restaurant } from '../../../utils/data/categories';

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
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>(restaurantData.restaurants);
  const [selectedCategory, setSelectedCategory] = useState<string>(''); // Track selected category
  
  // Function to handle category selection
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  // Filter restaurants whenever category changes
  // useEffect(() => {
  //   if (selectedCategory === '') {
  //     // If no category is selected, show all restaurants
  //     setFilteredRestaurants(restaurantData.restaurants);
  //   } else {
  //     // Otherwise, filter restaurants based on category id
  //     const category = restaurant.categories.find(
  //       (cat) => cat.id === parseInt(selectedCategory)
  //     );
  //     if (category) {
  //       setFilteredRestaurants(category.restaurants);
  //     } else {
  //       setFilteredRestaurants([]);
  //     }
  //   }
  // }, [selectedCategory]);

  const addItem = (item: any) => {
    dispatch(addCartItem(item));
  };

  const restaurantItem = ({ item }: { item: Restaurant }) => (
    <TouchableOpacity onPress={() => navigation.navigate('RestarantDetails', { item })}>
      <View style={{ marginBottom: 5, borderRadius: 50, width: width, height: width / 1.5 }}>
        <Image
          source={{ uri: item?.image }}
          resizeMode="cover"
          style={{ width: width - 22, borderRadius: 20, height: width / 2, backgroundColor: 'red' }}
        />
        <Text>{selectedCategory}</Text>
        <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
          <View style={{ width: '85%' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>
            <Text>{item.location}</Text>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'green', borderRadius: 5 }}>
            <Text style={{ color: Colors.white, fontSize: 15, padding: 5 }}>4.3</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.3 }}>
        <FilterTypes onPress={handleCategoryChange} />
      </View>
      <View style={{ flex: 0.8 }}>
        <Text
          style={{
            fontFamily: Fonts.bold,
            fontSize: 22,
            fontWeight: '900',
            color: Colors.appTheme,
          }}
        >
          Restaurants delivering to you
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
