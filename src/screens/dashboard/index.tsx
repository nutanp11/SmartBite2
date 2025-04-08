/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/AntDesign';
import IconF from 'react-native-vector-icons/FontAwesome5'
import Dilevery from './delivery';
import Dining from './dining';
import { Colors } from '../../constants/Colors';

const Dashboard = () => {
  const Tab = createBottomTabNavigator();

  type TabIcon1Props = {
    focused: boolean
  }
  const TabIcon1: React.FC<TabIcon1Props> = ({ focused }) => (
    <View style={styles.iconView}>
      {focused ?
        <Icon1 name="home" color={Colors.appTheme} size={25} />
        :
        <Icon name="home" size={25} />}
    </View>
  );

  type TabIcon2Props = {
    focused: boolean
  }

  const TabIcon2: React.FC<TabIcon2Props> = ({ focused }) => (
    <View style={styles.iconView}>
      {focused ?
        <IconF name="th-list" color={Colors.appTheme} size={25} />
        :
        <IconF name="list" size={25} />}
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
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon1 focused={focused} />,
          tabBarLabelStyle: { color: Colors.appTheme, fontWeight: '700', fontSize: 12 }
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Dining}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon2 focused={focused} />,
          tabBarLabelStyle: { color: Colors.appTheme, fontWeight: '700', fontSize: 12 }
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
