//Updatemember.js
import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

// ... other imports

const MembershipScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Become A Member</Text>
      <View style={styles.cardContainer}>
        <Text style={styles.cardHeading}>Silver Card</Text>
        <View style={styles.cardContent}>
          <View>
            <Text style={styles.cardText}>Name: XXX XXX</Text>
            <Text style={styles.cardText}>Age: XX</Text>
            <Text style={styles.cardText}>Validity: XX/XX/XX - XX/XX/XX</Text>
          </View>
        </View>
        <Text style={styles.centeredText}>Jal Nidhi Member</Text>
        <Text style={[styles.centeredText, styles.boldText]}>JAL HI JEEWAN HAI</Text>
      </View>

      <Text style={styles.perksHeading}>Perks of Becoming a Member:</Text>
      <View style={styles.perksList}>
        <Text style={styles.perkItem}>• Get free water tank cleaning</Text>
        {/* Add "Redeem Now" button */}
        <TouchableOpacity style={styles.redeemButton}>
          <Text style={styles.buttonText}>REDEEM NOW</Text>
        </TouchableOpacity>

        <Text style={styles.perkItem}>• Get water testing free</Text>
        {/* Add "Redeem Now" button */}
        <TouchableOpacity style={styles.redeemButton}>
          <Text style={styles.buttonText}>REDEEM NOW</Text>
        </TouchableOpacity>

        {/* Add other perks */}
        <Text style={styles.perkItem}>• Your complaints will be prioritized to get solved</Text>
        <Text style={styles.perkItem}>• Get the ability to resolve any water-related issue</Text>
        <Text style={styles.perkItem}>• Get access to complaint data</Text>
        <Text style={styles.perkItem}>• Get engaged with our community directly</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: Dimensions.get('window').width * 0.06,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  cardContainer: {
    position: 'relative',
    width: '90%',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#e0e0e0',
    marginTop: 20,
  },
  cardHeading: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').width * 0.05,
    fontWeight: 'bold',
    marginTop: 10,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: Dimensions.get('window').width * 0.05,
  },
  cardText: {
    fontSize: Dimensions.get('window').width * 0.04,
    marginBottom: Dimensions.get('window').height * 0.01,
  },
  centeredText: {
    textAlign: 'center',
    marginBottom: Dimensions.get('window').height * 0.02,
  },
  boldText: {
    fontWeight: 'bold',
  },
  perksHeading: {
    fontSize: Dimensions.get('window').width * 0.05,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  perksList: {
    width: '90%',
    alignSelf: 'center',
  },
  perkItem: {
    fontSize: Dimensions.get('window').width * 0.045, // Adjust the multiplier as needed
    marginBottom: 10,
  },
  redeemButton: {
    backgroundColor: '#2196F3',
    padding: 8,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default MembershipScreen;