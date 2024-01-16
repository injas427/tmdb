import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home} from '@screens';
import { MyTabBar } from './BottomTab';


const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const HomeStack = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
)

export const AppNavigator = () => (
  <NavigationContainer>
  <Tab.Navigator screenOptions={{headerShown: false}} tabBar={props => <MyTabBar {...props} />} >
      <Tab.Screen name="DashboardStack" component={HomeStack} />
      <Tab.Screen name="WatchStack" component={HomeStack} />
      <Tab.Screen name="MediaStack" component={HomeStack} />
      <Tab.Screen name="MoreStack" component={HomeStack} />
    </Tab.Navigator>
  </NavigationContainer>

  
);
