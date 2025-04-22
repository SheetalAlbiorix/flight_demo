import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Header from '../component/Header';
import MapView, { Marker, PROVIDER_DEFAULT } from 'react-native-maps';

const FlightsDetail = ({ route }) => {
  const { flight } = route.params || {};

  return (
    <View style={styles.container}>
      <Header title="Flight Details" />

      {/* MapView replacing the static image */}
      <MapView
        provider={PROVIDER_DEFAULT}
        style={styles.map}
        initialRegion={{
          latitude: 28.6139, // Example: New Delhi
          longitude: 77.2090,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}
      >
        <Marker
          coordinate={{ latitude: 28.6139, longitude: 77.2090 }}
          title={flight?.departure}
          description="Departure Airport"
        />
        <Marker
          coordinate={{ latitude: 19.0760, longitude: 72.8777 }} // Example: Mumbai
          title={flight?.arrival}
          description="Arrival Airport"
        />
      </MapView>

      <View style={styles.card}>
        <Text style={styles.flightHeader}>
          {flight.departure} to {flight.arrival}
        </Text>
        <Text style={styles.statusLine}>
          Lands in {flight.duration} — Flight is {flight.status}
        </Text>

        <View style={styles.airportBlock}>
          <View>
            <Text style={styles.airportCode}>{flight.departure}</Text>
            <Text style={styles.airportLabel}>Departure Airport</Text>
            <Text style={styles.gateInfo}>Terminal A • Gate 13</Text>
          </View>
          <Text style={styles.time}>{flight.departureTime}</Text>
        </View>

        <View style={styles.airportBlock}>
          <View>
            <Text style={styles.airportCode}>{flight.arrival}</Text>
            <Text style={styles.airportLabel}>Arrival Airport</Text>
            <Text style={styles.gateInfo}>Terminal B • Gate 29</Text>
          </View>
          <Text style={styles.time}>{flight.arrivalTime}</Text>
        </View>

        <Text style={styles.flightInfo}>
          Total {flight.duration} • {flight.stops} • ₹{flight.price.toLocaleString()}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: 220,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 16,
    marginTop: 20,
    marginHorizontal: 10,
  },
  flightHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 4,
  },
  statusLine: {
    color: '#2ECC71',
    marginBottom: 16,
    fontSize: 14,
  },
  airportBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 10,
    borderBottomColor: '#EEE',
    borderBottomWidth: 1,
  },
  airportCode: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  airportLabel: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  gateInfo: {
    fontSize: 12,
    color: '#555',
    marginTop: 4,
  },
  time: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  flightInfo: {
    textAlign: 'center',
    fontSize: 14,
    color: '#444',
    marginTop: 14,
  },
});

export default FlightsDetail;
