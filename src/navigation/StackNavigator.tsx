import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screens/auth/SignIn';
import RestaurantDetails from '../screens/dashboard/delivery/RestaurantDetails';
import Dashboard from '../screens/dashboard';
import Cart from '../screens/dashboard/dining';

export type StackParamList = {
  SignIn: undefined;
  Dashboard: undefined;
  RestaurantDetails: { itemData: any }; // Example parameter
  Cart: undefined
};

const Stack = createNativeStackNavigator<StackParamList>();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn">
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

export default StackNavigator;
