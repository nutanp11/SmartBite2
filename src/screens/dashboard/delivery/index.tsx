/* eslint-disable react-native/no-inline-styles */
import { StatusBar, StyleSheet, View } from 'react-native';
import React from 'react';
import { Colors } from '../../../constants/Colors';

import ProfileInfo from '../components/ProfileInfo';
import SearchInput from '../components/SearchInput';


import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Restaruant from '../components/Restaruant';
import { SafeAreaView } from 'react-native-safe-area-context';

export type RootStackParamList = {
  Home: undefined;
};

type HomeProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const Delivery: React.FC<HomeProps> = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.1, backgroundColor: Colors.white }}>
        <ProfileInfo />
      </View>
      <View style={{ flex: 0.9}}>
        <Restaruant />
      </View>
    </View>
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
