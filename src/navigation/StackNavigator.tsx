import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screens/auth/SignIn';
import RestarantDetails from '../screens/dashboard/delivery/RestarantDetails';
import Dashboard from '../screens/dashboard';

export type StackParamList = {
  SignIn: undefined;
  Dashboard: undefined;
  RestarantDetails: undefined
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
        name="RestarantDetails"
        component={RestarantDetails}
        options={{headerShown: false}}
        />
    </Stack.Navigator>
  );
};

export default StackNavigator;
