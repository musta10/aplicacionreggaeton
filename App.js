import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Trap from "./Tabs/Trap"
import Lanueva from "./Tabs/Lanueva"
import Reggaeton from "./Tabs/Reggaeton"
import Top5 from "./Tabs/Top5"
import Header from './Header'


const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <>
    <Header />
    <NavigationContainer>
    <Tab.Navigator
    initialRouteName="Trap"
    activeColor="white"
    inactiveColor="#FFD321"
    barStyle={{ backgroundColor: '#282c34' }}
  >
    <Tab.Screen
      name="Trap"
      component={Trap}
      options={{
        tabBarLabel: 'Trap',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="crown" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Reggaeton"
      component={Reggaeton}
      options={{
        tabBarLabel: 'Reggaeton',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="music" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Lanueva"
      component={Lanueva}
      options={{
        tabBarLabel: 'Lanueva',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account-multiple" color={color} size={26} />
        ),
      }}
    />
        <Tab.Screen
      name="Top5"
      component={Top5}
      options={{
        tabBarLabel: 'top5',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="fire" color={color} size={26} />
        ),
      }}
      
    />
  </Tab.Navigator>
  
  </NavigationContainer>
 
  </>
  );
}
