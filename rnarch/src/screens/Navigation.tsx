import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './Main/home';
import { RouteProp } from '@react-navigation/native';
import { LoginScreen } from './login/LoginScreen';

export type MainStackParamList = {
  Home: undefined;
};

const MainStack = createStackNavigator<MainStackParamList>();

export const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <MainStack.Screen name="Home" component={Home} /> */}
      <MainStack.Screen name="Login" component={LoginScreen} />
    </MainStack.Navigator>
  );
};
