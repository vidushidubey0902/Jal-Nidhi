import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const DonationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentMode, setPaymentMode] = useState('');
  const [occupation, setOccupation] = useState('');

  const handleSubmit = () => {
    // Process the donation data
    Alert.alert(
      'Donation Submitted',
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nAge Group: ${ageGroup}\nAmount: $${amount}\nPayment Mode: ${paymentMode}\nOccupation: ${occupation}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Support Cleaner Water</Text>

      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Phone Number" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />

      <Picker
        selectedValue={ageGroup}
        style={styles.input}
        onValueChange={(itemValue, itemIndex) => setAgeGroup(itemValue)}>
        <Picker.Item label="Select Age Group" value="" />
        <Picker.Item label="18-25" value="18-25" />
        <Picker.Item label="26-35" value="26-35" />
        <Picker.Item label="36-45" value="36-45" />
        <Picker.Item label="46-55" value="46-55" />
        <Picker.Item label="56+" value="56+" />
      </Picker>

      <TextInput style={styles.input} placeholder="Donation Amount" value={amount} onChangeText={setAmount} keyboardType="numeric" />

      <Picker
        selectedValue={paymentMode}
        style={styles.input}
        onValueChange={(itemValue, itemIndex) => setPaymentMode(itemValue)}>
        <Picker.Item label="Select Payment Mode" value="" />
        <Picker.Item label="Credit Card" value="Credit Card" />
        <Picker.Item label="Debit Card" value="Debit Card" />
        <Picker.Item label="PayPal" value="PayPal" />
        <Picker.Item label="Bank Transfer" value="Bank Transfer" />
      </Picker>

      <Picker
        selectedValue={occupation}
        style={styles.input}
        onValueChange={(itemValue, itemIndex) => setOccupation(itemValue)}>
        <Picker.Item label="Select Occupation" value="" />
        <Picker.Item label="Student" value="Student" />
        <Picker.Item label="Employed" value="Employed" />
        <Picker.Item label="Self-Employed" value="Self-Employed" />
        <Picker.Item label="Retired" value="Retired" />
        <Picker.Item label="Other" value="Other" />
      </Picker>

      <Button title="Donate" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 50,
    borderColor: '#3498db',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2C3E50',
  },
});

export default DonationForm;
