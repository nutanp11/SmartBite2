import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Colors } from '../../../constants/Colors';
import { Fonts } from '../../../constants/Fonts';
import { restaurant } from '../../../utils/data/categories';

type Restaurant = {
  id: string;
  title: string;
  link: string;
  restaurants: Object;
};

const HorizontalFlatList = ({onPress}) => {
  const [categories, setCategories] = useState<Restaurant[]>(restaurant.categories);


  const renderItem: React.FC = ({ item }) => (
    <TouchableOpacity onPress={()=> onPress(item?.id)} style={styles.item} >
      <Image style={{ width: 80, borderRadius: 15, height: 80 }} source={{ uri: item.link }} />
      <Text style={styles.itemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  item: {
    marginRight: 5,
    padding: 10,
    alignSelf: 'center',
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: "space-between",
    flexDirection: "column"
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10
  },
});

export default HorizontalFlatList;