//signup.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator } from 'react-native';
import auth from '@react-native-firebase/auth';
const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const[loader, setLoader]  = useState(false);
  const handleSignup = () => {
    // Perform signup logic here
    // For simplicity, just navigate back to the Login screen
    setLoader(true)
    auth()
  .createUserWithEmailAndPassword(email, password)
  .then((res) => {
    setLoader(false)
    console.log('User account created & signed in!');
    res.user.updateProfile({
      displayName:username
    })
    navigation.navigate('Login');
  })
  .catch(error => {
    setLoader(false)
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
    
  };

  return (
    <View style={styles.container}>
      <Text>Signup Screen</Text>
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
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
      />
      <Button title="Signup" onPress={handleSignup} />
      {loader &&
         <ActivityIndicator size="large" />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});

export default SignupScreen;
