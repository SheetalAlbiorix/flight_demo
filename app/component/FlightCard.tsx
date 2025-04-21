import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const statusColor = {
  'Upcoming': '#FFD700',
  'Boarding Soon': '#FF6F61',
};

const FlightCard = ({ flight, onPress }) => {
  return (
    <TouchableOpacity style={[styles.card, { borderLeftColor: statusColor[flight.status] }]} onPress={onPress}>
      <Text style={styles.flightNumber}>{flight.airline} {flight.flightNumber}</Text>
      <Text style={styles.route}>{flight.departure} ➡️ {flight.arrival}</Text>
      <Text style={styles.time}>{flight.time} | {flight.date}</Text>
      <Text style={[styles.status, { color: statusColor[flight.status] }]}>{flight.status}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
    borderLeftWidth: 6,
    elevation: 2,
  },
  flightNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  route: {
    fontSize: 16,
    color: '#2C3E50',
  },
  time: {
    fontSize: 14,
    color: '#555',
  },
  status: {
    marginTop: 6,
    fontWeight: 'bold',
  },
});

export default FlightCard;
