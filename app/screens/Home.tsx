import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, Button } from 'react-native';
import FlightCard from '../component/FlightCard';
import flightsData from '../services/data/flights';

const Home = ({ navigation }) => {
  const pageSize = 10;
  const [page, setPage] = useState(1);

  const visibleFlights = flightsData.slice(0, page * pageSize);
  const hasMore = visibleFlights.length < flightsData.length;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Your Upcoming Flights ✈️</Text>

      {visibleFlights.map((flight, index) => (
        <FlightCard
          key={index}
          flight={flight}
          onPress={() => navigation.navigate('Flight', { flight })}
        />
      ))}

      {hasMore && (
        <View style={styles.buttonWrapper}>
          <Button title="Load More Flights" onPress={() => setPage(page + 1)} />
        </View>
      )}

      <View style={styles.buttonWrapper}>
        <Button title="Chat with Bot 🤖" onPress={() => navigation.navigate('ChatBot')} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#E6F7FF',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  buttonWrapper: {
    marginTop: 20,
  },
});

export default Home;
