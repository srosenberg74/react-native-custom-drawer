import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import MessagesScreen from "../screens/MessagesScreen";
import MomentsScreen from "../screens/MomentsScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
      <Drawer.Navigator screenOptions={{headerShown: false}}>
          <Drawer.Screen
          name="Home"
          component={HomeScreen}
          />
           <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          />
           <Drawer.Screen
          name="Messages"
          component={MessagesScreen}
          />
           <Drawer.Screen
          name="Moments"
          component={MomentsScreen}
          />
           <Drawer.Screen
          name="Settings"
          component={SettingsScreen}
          />
      </Drawer.Navigator>
  )
}

export default AppStack;