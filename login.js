import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ActivityIndicator } from 'react-native';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loader, setLoader] = useState(false);

  const handleLogin = () => {
    setLoader(true);

    auth()
      .signInWithEmailAndPassword(username, password)
      .then((res) => {
        console.log(res);
        setLoader(false);
        navigation.navigate('TabNavigator');
      })
      .catch(error => {
        console.log(error);
        setLoader(false);

        // Check for specific error codes and handle them
        if (error.code === 'auth/invalid-email') {
          window.alert('Invalid email address. Please enter a valid email.');
        } else {
          window.alert('An error occurred. Please try again.');
        }
      });
  };

  const handleForgotPassword = () => {
    if (!username) {
      window.alert('Please enter your email/username to reset the password.');
      return;
    }

    setLoader(true);

    auth()
      .sendPasswordResetEmail(username)
      .then(() => {
        setLoader(false);
        window.alert('Password Reset Email Sent. Check your email for instructions to reset your password.');
      })
      .catch((error) => {
        setLoader(false);
        console.log(error);

        // Check for specific error codes and handle them
        if (error.code === 'auth/user-not-found') {
          window.alert('User not found. Please check your email/username.');
        } else if (error.code === 'auth/invalid-email') {
          window.alert('Invalid email address. Please enter a valid email.');
        } else {
          window.alert('An error occurred. Please try again.');
        }
      });
  };

  const handleRegister = () => {
    navigation.navigate('Signup');
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>JalNidhi</Text>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          style={styles.input}
        />
        <TouchableOpacity style={styles.showPasswordButton} onPress={toggleShowPassword}>
          <Text style={styles.showPasswordButtonText}>
            {showPassword ? 'Hide Password' : 'Show Password'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton} onPress={handleLogin}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.registerText}>Don't have an account? Register</Text>
        </TouchableOpacity>
        {loader && <ActivityIndicator size="large" color="#3498db" />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loginContainer: {
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3498db',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#3498db',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
    color: '#333',
    marginBottom: 10,
  },
  showPasswordButton: {
    alignSelf: 'flex-end',
    marginTop: -40,
    marginRight: 10,
  },
  showPasswordButtonText: {
    color: '#3498db',
    textDecorationLine: 'underline',
  },
  submitButton: {
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    marginTop: 10,
    color: '#3498db',
    textDecorationLine: 'underline',
  },
  registerText: {
    marginTop: 20,
    color: '#2ecc71',
  },
});

export default LoginScreen;
