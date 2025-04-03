import React, { useEffect, useState } from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Images } from '../../../assets/images'
import { Colors } from '../../../constants/Colors'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon1 from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/MaterialIcons'

const RestarantDetails = ({ route }) => {
  const [recomendShow , setRecomendShow] = useState<boolean>(false)
  const [expandedSections, setExpandedSections] = useState({});

  const navigation = useNavigation()
  const routeD = route.params.item
  console.log("routeD", routeD);

  const toggleSection = (section) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  const renderItem = ({ item, index }) => (
    <View key={index} style={{alignItems: "center",padding:5, backgroundColor: Colors.white, flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
          <View style={{ width: '66%' }}>
            <Text style={styles.itemName}>{item?.name}</Text>
            <Text style={styles.itemPrice}>{item.price} Rs/-</Text>
            <Text style={styles.itemDescription}>
             {item.description}
            </Text>
          </View>
          <View style={{marginHorizontal:10}}>
            <Image source={{uri: item?.image}} style={{borderRadius:5, width: 120, height: 120 }}/>
          </View>
        </View>
  );

  const renderSection = ({ item, index }) => (
    <View style={styles.sectionContainer}>
        <TouchableOpacity  onPress={() => toggleSection(item.section)} style={{
          borderRadius: 10, backgroundColor:Colors.white,  padding: 5,marginTop:10,
          flexDirection: "row", justifyContent: "space-between", alignItems: "center"
        }}>
          <View>
            <Text style={{ paddingStart: 5, fontSize: 18, fontWeight: '500' }}>{item.section}</Text>
          </View>
          <Icon2 style={{ color: Colors.black }} name="arrow-drop-down" size={35} />
        </TouchableOpacity>

      {expandedSections[item.section] && (
        <FlatList
          data={item.items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );

  return (
    <ScrollView style={{flex:1, backgroundColor: Colors.appgrey}}>
      <View style={{ flexDirection: "row", alignItems: "center",margin:10 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={{ tintColor: Colors.black, width: 25, height: 18 }}
            source={Images.back} />
        </TouchableOpacity>
        <Text style={{ marginStart: 20, fontSize: 22 , fontWeight: '700' }}>Details</Text>
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <Text style={{ fontSize: 25, fontWeight: '700' }}>{routeD.name}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 16, fontWeight: '600' }}>24 mins . </Text>
          <Text style={{ fontSize: 16, fontWeight: '600' }}>4 Km . </Text>
          <Text style={{ fontSize: 16, fontWeight: '600' }}>Hinjawadi . </Text>


        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <View style={{ backgroundColor: '#F1F0F0',  flexDirection: "row", alignItems: 'center', borderRadius: 10 }}>
            <Icon name="check" size={16} />
            <Text style={{ paddingStart: 5 }}>Frequently recorded</Text>
          </View>
          <View style={{ marginStart: 10, borderRadius: 10, backgroundColor: '#F1F0F0', flexDirection: "row", alignItems: 'center', padding: 10 }}>
            <Icon name="check" size={16} />
            <Text style={{ paddingStart: 5 }}>Frequently recorded</Text>
          </View>
        </View>

        <View style={{ borderRadius: 10, backgroundColor: '#E8E8E8', marginTop:10, padding: 10, flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <View style={{ borderRadius: 10, backgroundColor: '#D39229', alignSelf: "flex-start", flexDirection: "row", alignItems: 'center', padding: 5 }}>
              <Text style={{ paddingStart: 5, fontSize: 14, color: Colors.white }}>Frequently recorded</Text>
            </View>
            <Text style={{ paddingStart: 5, fontSize: 16, fontWeight: '600' }}>Hurry up! restarant closed in 40 minutes</Text>
          </View>
          <Icon1 style={{ color: Colors.appDarkTheme }} name="stopwatch" size={55} />
        </View>

        {/*  */}
        {/* {recomendShow && 
  <>
    {routeD?.menu?.map((item, index) => {
      return (
       
      );
    })}
  </>
} */}

<FlatList
      data={routeD.menus}
      renderItem={renderSection}
      keyExtractor={(item) => item.section}
    />



      </View>

    </ScrollView>

  )
}

export default RestarantDetails


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
