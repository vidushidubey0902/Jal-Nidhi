//WelcomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={require('./photos/applogo.png')} 
          style={styles.logo}
        />
        <Text style={styles.title}>JAL-NIDHI</Text>
        <Text style={styles.subtitle}>Welcomes You!</Text>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.loginButton}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={styles.signupButton}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  topContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  logo: {
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    resizeMode: 'contain',
    marginBottom: 20, // Adjust the margin as needed
  },
  bottomContainer: {
    width: '100%',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 35,
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: '#3498db',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  signupButton: {
    backgroundColor: '#3498db',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default WelcomeScreen;