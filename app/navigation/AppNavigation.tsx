import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from '@screens/Home';
import Profile from '@screens/Profile';
import Search from '@root/app/screens/ChatBot';
import FlightScreen from '../screens/Flights';
import ChatBot from '@root/app/screens/ChatBot';
import CalendarEvents from '../screens/CalendarEvents';

// Create Stack Navigator for nested screens
const Stack = createNativeStackNavigator();

// Create Tab Navigator for bottom navigation
const Tab = createBottomTabNavigator();

// Home Stack to handle navigation inside the Home screen (e.g., flight details)
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
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
          tabBarActiveTintColor: '#1E90FF',
          tabBarInactiveTintColor: '#888',
          tabBarStyle: {height: 60},
          tabBarLabelStyle: {fontSize: 14},
        }}>
        {/* Home Tab */}
        <Tab.Screen
          name="Home"
          component={HomeStack} // Use HomeStack for nested navigation
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Icon name="home" size={24} color="#1E90FF" />
            ),
          }}
        />

        {/* Search Tab */}
        <Tab.Screen
          name="ChatBot"
          component={ChatBot}
          options={{
            tabBarLabel: 'ChatBot',
            tabBarIcon: ({color, size}) => (
              <Icon name="chat" size={24} color="#1E90FF" />
            ),
          }}
        />

        <Tab.Screen
          name="CalendarEvents"
          component={CalendarEvents}
          options={{
            tabBarLabel: 'CalendarEvents',
            tabBarIcon: ({color, size}) => (
              <Icon name="calendar-today" size={24} color="#1E90FF" />
            ),
          }}
        />
        {/* Profile Tab */}
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <Icon name="person" size={24} color="#1E90FF" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
