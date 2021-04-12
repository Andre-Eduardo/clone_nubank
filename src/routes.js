import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '#/screens/Main/HomeScreen';

const Routes = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }} headerMode='screen'>
        <Screen name='Home' component={HomeScreen} />
      </Navigator>
    </NavigationContainer>
  );
};
export default Routes;
