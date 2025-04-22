import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FlightCard = ({ flight, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.header}>
        <Image
          source={require('../assets/air_asia_logo.png')}
          style={styles.logo}
        />
        <Text style={styles.airlineText}>{flight.airline} • {flight.flightNumber}</Text>
      </View>

      <View style={styles.timeRow}>
        <View>
        <Text style={styles.timeText}>{flight.departureTime}</Text>
        <Text style={styles.cityText}>{flight.departure}</Text>
        </View>
        <View style={styles.durationWrapper}>
          <Text style={styles.durationText}>{flight.duration}</Text>
          <View style={{padding: 10 }}>
            <View style={styles.airLineCont}></View>
            <Icon name="airplane" size={20} color="#000" style={styles.airStopLogo} />
          </View>
          <Text style={styles.stopText}>{flight.stops}</Text>
        </View>
        <View>
        <Text style={styles.timeText}>{flight.arrivalTime}</Text>
        <Text style={styles.cityText}>{flight.arrival}</Text>
        </View>
      </View>


      <View style={styles.priceCountainer}>
        <Text style={styles.perAdult}>Per Adult</Text>
        <Text style={styles.price}>₹{flight.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  priceCountainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 8,
  },
  airlineText: {
    fontSize: 14,
    color: '#111827',
    fontWeight: '600',
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
  },
  durationWrapper: {
    alignItems: 'center',
  },
  durationText: {
    fontSize: 12,
    color: '#6B7280',
  },
  stopText: {
    fontSize: 12,
    color: '#6B7280',
  },
  cityText: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    textAlign: 'right',
  },
  perAdult: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '400',
    textAlign: 'right',
  },
  airStopLogo: {
    position: 'absolute',
    left: '50%',
  },
  airLineCont: {
    borderColor: '#000',
    borderTopWidth: 1,
    width: 100,
    borderStyle: 'solid',
  }
});

export default FlightCard;
