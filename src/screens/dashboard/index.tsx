/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/AntDesign';

import Dilevery from './delivery';
import Dining from './dining';

const Dashboard = () => {
  const Tab = createBottomTabNavigator();

  // TabIcon Component
  const TabIcon1 = ({ focused }) => (
    <View style={styles.iconView}>
        <Icon name="search1" size={25} />
    </View>
  );

  const TabIcon2 = ({ focused }) => (
    <View style={styles.iconView}>    
        <Icon name="bells" size={25}/>
    </View>
  );

  return (
    <Tab.Navigator
      initialRouteName="Dilevery"
    >
      <Tab.Screen
        name="Dilevery"
        component={Dilevery}
        options={{
          headerShown:false,
          tabBarIcon: ({ focused }) => <TabIcon1 focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Dining"
        component={Dining}
        options={{
          tabBarIcon: ({ focused }) => <TabIcon2 focused={focused} />,
        }}
      />
     
    </Tab.Navigator>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#100F18',
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  iconView: { top: Platform.OS === 'ios' ? 10 : 0 },
});
