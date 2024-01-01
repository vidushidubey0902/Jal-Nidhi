// TextIntegrationScreen.js

import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

const TextIntegrationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Top Left Corner */}
      <Image source={require('./photos/applogo.png')} style={styles.imageTopLeft} />

      {/* Top Right Corner */}
      <Image source={require('./photos/applogo.png')} style={styles.imageTopRight} />

      {/* Center */}
      <TouchableOpacity onPress={() => navigation.navigate('CenterScreen')}>
        <Image source={require('./photos/applogo.png')} style={styles.centeredImage} />
      </TouchableOpacity>

      <Text style={styles.heading}>Integration Screen</Text>
      <View style={styles.content}>
        {/* Add your integration components or features here */}
      </View>

      {/* Bottom Left Corner */}
      <Image source={require('./photos/applogo.png')} style={styles.imageBottomLeft} />

      {/* Bottom Right Corner */}
      <Image source={require('./photos/applogo.png')} style={styles.imageBottomRight} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: Dimensions.get('window').width * 0.06,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  imageTopLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },
  imageTopRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },
  centeredImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  imageBottomLeft: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },
  imageBottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },
});

export default TextIntegrationScreen;
