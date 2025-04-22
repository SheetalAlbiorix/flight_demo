// screens/ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../component/Header';

const Profile = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header title="Profile" />
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Profile;
