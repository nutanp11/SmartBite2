import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';

const MainNavigator: React.FC = () => {
  return (
    <NavigationContainer>
        <StackNavigator/>
    </NavigationContainer>
  );
};

export default MainNavigator;
