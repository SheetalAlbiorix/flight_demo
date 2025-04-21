import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from '@screens/Home';
import Profile from '@screens/Profile';
import Search from '@root/app/screens/ChatBot';
import FlightScreen from '../screens/Flights';
import ChatBot from '@root/app/screens/ChatBot';

// Create Stack Navigator for nested screens
const Stack = createNativeStackNavigator();

// Create Tab Navigator for bottom navigation
const Tab = createBottomTabNavigator();

// Home Stack to handle navigation inside the Home screen (e.g., flight details)
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Flight" component={FlightScreen} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

// Bottom Tab Navigator
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#1E90FF',  // Active tab color
          tabBarInactiveTintColor: '#888',   // Inactive tab color
          tabBarStyle: { height: 60 },        // Optional: Custom height for the tab bar
          tabBarLabelStyle: { fontSize: 14 }, // Optional: Customize label font size
        }}
      >
        {/* Only Tab Navigation for other tabs */}
        <Tab.Screen
          name="Home"
          component={Home} // Keep Home in Stack Navigator only
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" size={24} color="#1E90FF" />
            ),
          }}
        />

        {/* Flight Tab */}
        <Tab.Screen
          name="Flight"
          component={FlightScreen}
          options={{
            tabBarLabel: 'Flight',
            tabBarIcon: ({ color, size }) => (
              <Icon name="flight" size={24} color="#1E90FF" />
            ),
          }}
        />

        {/* Search Tab */}
        <Tab.Screen
          name="ChatBot"
          component={ChatBot}
          options={{
            tabBarLabel: 'search',
            tabBarIcon: ({ color, size }) => (
              <Icon name="search" size={24} color="#1E90FF" />
            ),
          }}
        />

        {/* Profile Tab */}
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Icon name="person" size={24} color="#1E90FF" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
