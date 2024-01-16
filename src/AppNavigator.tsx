import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Dashboard, Media, More, Watch} from '@screens';
import { MyTabBar } from './BottomTab';
import {SCREEN_NAMES} from "@constants"


const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const DashboardStack = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Dashboard} />
    </Stack.Navigator>
)

const WatchStack = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Watch} />
    </Stack.Navigator>
)

const MediaStack = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Media} />
    </Stack.Navigator>
)

const MoreStack = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={More} />
    </Stack.Navigator>
)

export const AppNavigator = () => (
  <NavigationContainer>
  <Tab.Navigator screenOptions={{headerShown: false}} tabBar={props => <MyTabBar {...props} />} >
      <Tab.Screen name={SCREEN_NAMES.STACK.DASHBOARD} component={DashboardStack} />
      <Tab.Screen name={SCREEN_NAMES.STACK.Watch} component={WatchStack} />
      <Tab.Screen name={SCREEN_NAMES.STACK.Media} component={MediaStack} />
      <Tab.Screen name={SCREEN_NAMES.STACK.More} component={MoreStack} />
    </Tab.Navigator>
  </NavigationContainer>
);
