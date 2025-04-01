/* eslint-disable react-native/no-inline-styles */
import {StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '../../../constants/Colors';

import ProfileInfo from '../components/ProfileInfo';
import SearchInput from '../components/SearchInput';


import {StackNavigationProp} from '@react-navigation/native-stack';
import Restaruant from '../components/Restaruant';

export type RootStackParamList = {
  Home: undefined;
};

type HomeProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const Delivery: React.FC<HomeProps> = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 0.20}}>
        <ProfileInfo />
        <SearchInput value={''} onChangeText={()=>{}} />
   
      </View>

      {/* <View style={{flex: 0.22}}>
        <FeaturedListComp />
      </View> */}

      <View style={{flex: 0.80}}>
        <Restaruant  />
      </View>
    </View>
  );
};

export default Delivery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackground,
    paddingHorizontal: 2,
    paddingTop: 10,
  },
});
