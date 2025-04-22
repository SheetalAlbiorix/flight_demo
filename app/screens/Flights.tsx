import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Flights = ({route}) => {
  const {flight} = route.params || [];
  console.log('Flight Details:', flight);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        {flight.airline} {flight.flightNumber}
      </Text>
      <Text style={styles.route}>
        {flight.departure} ➡️ {flight.arrival}
      </Text>
      <Text style={styles.time}>
        {flight.time} on {flight.date}
      </Text>
      <Text style={styles.status}>{flight.status}</Text>
      <Text style={styles.info}>
        This screen can include maps, gate details, and delay notices from email
        parsing!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {padding: 20, backgroundColor: '#FFF'},
  heading: {fontSize: 26, fontWeight: 'bold', color: '#2C3E50'},
  route: {fontSize: 20, marginVertical: 8},
  time: {fontSize: 18, marginBottom: 10},
  status: {fontSize: 18, color: '#FF6F61'},
  info: {marginTop: 20, color: '#888'},
});

export default Flights;
