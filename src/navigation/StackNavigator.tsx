// import React from 'react';
import SignIn from '../screens/auth/SignIn';
import RestaurantDetails from '../screens/dashboard/delivery/RestaurantDetails';
import Dashboard from '../screens/dashboard';
import Cart from '../screens/dashboard/dining';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

import * as React from 'react';
import { Button, Linking, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type StackParamList = {
  SignIn: undefined;
  Dashboard: undefined;
  RestaurantDetails: { itemData: any }; // Example parameter
  Cart: undefined
};
const Drawer = createDrawerNavigator();

function MyDrawer() {


const Stack = createNativeStackNavigator<StackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }} />

       <Stack.Screen
       name="RestaurantDetails"
       component={RestaurantDetails}
       options={{headerShown: false}}/>
       <Stack.Screen
       name="Cart"
       component={Cart}
       options={{headerShown: false}}/>
    
    </Stack.Navigator>
  );
};




function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} /> */}
      <DrawerItem
        label="Your Profile"
        onPress={() => Linking.openURL('https://mywebsite.com/help')}
      />
       <DrawerItem
        label="Collection"
        onPress={() => Linking.openURL('https://mywebsite.com/help')}
      />
       <DrawerItem
        label="Address"
        onPress={() => Linking.openURL('https://mywebsite.com/help')}
      />
    </DrawerContentScrollView>
  );
}

  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />} screenOptions={{headerShown: false, drawerPosition:'right'}}>
      <Drawer.Screen options={{}} name="Home" component={StackNavigator} />
      {/* <Drawer.Screen name="Profile" component={ProfileScreen} /> */}
    </Drawer.Navigator>
  );
}
        
export default function App() {
  return (
      <MyDrawer />
  );
}
