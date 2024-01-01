import React, { useState, useEffect } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import * as Location from 'expo-location';

export default function AlertMap() {
  const [mapRegion, setMapRegion] = useState({
    latitude: 20.5937, // Center of India
    longitude: 78.9629,
    latitudeDelta: 30,
    longitudeDelta: 30,
  });

  const [markers, setMarkers] = useState([
    // Example markers
    { id: 1, title: 'Water Pipeline', description: 'Waterlogging in a specific area is a localized problem characterized by the excessive accumulation of water in the soil and on the surface. This issue arises when the capacity of the natural drainage systems in that particular region is exceeded, often due to heavy and sustained rainfall. In such cases, the soil becomes saturated, hindering its ability to absorb more water, and the excess water accumulates on the surface.', coordinate: { latitude: 17.537092, longitude: 78.384455 }, color: 'blue' },
    { id: 2, title: 'Water Logging', description: 'Waterlogging in a specific area is a localized problem characterized by the excessive accumulation of water in the soil and on the surface. This issue arises when the capacity of the natural drainage systems in that particular region is exceeded, often due to heavy and sustained rainfall. In such cases, the soil becomes saturated, hindering its ability to absorb more water, and the excess water accumulates on the surface.', coordinate: { latitude: 17.536946, longitude: 78.384498 }, color: 'blue' },
    // Add more markers as needed
  ]);

  const [selectedComplaint, setSelectedComplaint] = useState(null);

  const [errorMsg, setErrMsg] = useState('');

  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync({
      enableHighAccuracy: true,
    });
    if (status !== 'granted') {
      setErrMsg('Permission to access location was denied');
    }
    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  useEffect(() => {
    userLocation();
  }, []);

  const handleMarkerPress = (complaint) => {
    setSelectedComplaint(complaint);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <MapView style={styles.map} region={mapRegion}>
        {/* User's current location marker */}
        <Marker coordinate={mapRegion} title="Your Location" pinColor="red">
          <Callout>
            <Text>Your Location</Text>
          </Callout>
        </Marker>

        {/* Custom markers */}
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinate}
            title={marker.title}
            pinColor={marker.color}
            onPress={() => handleMarkerPress(marker)}
          >
            <Callout>
              <ScrollView>
                <View>
                  <Text>{marker.title}</Text>
                  <Text>{marker.description}</Text>
                </View>
              </ScrollView>
            </Callout>
          </Marker>
        ))}
      </MapView>

      {/* Complaint details */}
      {selectedComplaint && (
        <View style={styles.overlayBox}>
          <ScrollView>
            <Text style={styles.overlayText}>{selectedComplaint.title}</Text>
            <Text style={styles.overlayText}>{selectedComplaint.description}</Text>
          </ScrollView>
        </View>
      )}

      {/* Get Location button */}
      <View style={styles.buttonContainer}>
        <Button title="Get Location" onPress={userLocation} style={styles.getLocationButton} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  buttonContainer: {
    marginBottom: 100, // Adjust the bottom margin as needed
  },
  getLocationButton: {
    marginBottom: 100, // Adjust the bottom margin as needed
  },
  map: {
    width: '100%',
    height: '65%', // Adjust the height of the map as needed
  },
  overlayBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 10,
    margin: 10,
    maxHeight: '30%', // Adjust the maximum height of the overlay box
  },
  overlayText: {
    fontSize: 20,
    color: 'black',
  },
});