

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
import { restaurant } from '../../../utils/data/categories';
import Icon from 'react-native-vector-icons/AntDesign';
import SearchInput from './SearchInput';
import { useNavigation } from '@react-navigation/native';

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
        (cat) => cat.id === selectedCategory
      );
      if (category) {
        setFilteredRestaurants(category.restaurants);
      } else {
        setFilteredRestaurants([]);
      }
    }
  }, [selectedCategory]);

  const handleSearch = (text: string) => {
    setSearchValue(text);

    if (text.trim() === '') {
      // Reset to all restaurants from the selected category
      if (selectedCategory === '') {
        setFilteredRestaurants(restaurant.categories[0].restaurants);
      } else {
        const category = restaurant.categories.find(
          (cat) => cat.id === parseInt(selectedCategory)
        );
        if (category) {
          setFilteredRestaurants(category.restaurants);
        }
      }
    } else {
      const filtered = filteredRestaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(text.toLowerCase()) ||
        restaurant.location.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredRestaurants(filtered);
    }
  };

  const addItem = (item: Restaurant) => {
    dispatch(addCartItem(item));
  };

  const restaurantItem = ({ item }: { item: Restaurant }) => (
    <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetails', { itemData: item })}>
      <View style={styles.viewStyle}>
        <ImageBackground
          source={{ uri: item?.image }}
          resizeMode="cover"
          style={styles.imageBStyle}
        >
          <View style={styles.disView}>
            <Text style={styles.timeStyle}>34 Min</Text>
          </View>
        </ImageBackground>
        <View style={styles.bottomView}>
          <View style={{ width: '80%' }}>
            <Text style={styles.itemText1}>{item.name}</Text>
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
        <FilterTypes selectedValue={selectedCategory} onPress={handleCategoryChange} />
      </View>
      <View style={{ flex: 0.72 }}>
        <Text
          style={{
            fontFamily: Fonts.bold,
            fontSize: 22,
            fontWeight: '900',
            color: Colors.appTheme,
            marginBottom: 10
          }}
        >
          {filteredRestaurants.length} Restaurants delivering to you
        </Text>
        <FlatList
        showsVerticalScrollIndicator={false}
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
  disView: {
    backgroundColor: Colors.appTheme,
    paddingHorizontal: 14,
    borderTopRightRadius: 10
  },
  timeStyle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.white,
    fontFamily: Fonts.regular
  },
  imageBStyle: {
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
    height: width / 2,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  bottomView: {
    flexDirection: 'row',
    marginVertical: 8,
    width: '100%',
    alignItems: 'center',
    justifyContent: "center"
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
  itemText: { fontSize: 20, fontWeight: 'bold' },
  viewStyle: {
    marginBottom: 20,
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    borderRadius: 25,
    width: '100%',
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
  itemText1: {
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
