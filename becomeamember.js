import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const MembershipScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Become A Member</Text>
      <View style={styles.cardContainer}>
        <Fontisto name="locked" size={100} color="#e9c46a" style={styles.lockIcon} />
        <Text style={styles.cardHeading}>Silver Card</Text>
        <View style={styles.cardContent}>
          <View>
            <Text style={styles.cardText}>Name: XXX XXX</Text>
            <Text style={styles.cardText}>Age: XX</Text>
            <Text style={styles.cardText}>Validity: XX/XX/XX - XX/XX/XX</Text>
          </View>
          <Fontisto name="user-secret" size={Dimensions.get('window').width * 0.2} color="#333" />
        </View>
        <Text style={styles.centeredText}>Jal Nidhi Member</Text>
        <Text style={[styles.centeredText, styles.boldText]}>JAL HI JEEWAN HAI</Text>
      </View>

      <Text style={styles.perksHeading}>Perks of Becoming a Member:</Text>
      <View style={styles.perksList}>
        <Text style={styles.perkItem}>• Free water tank service provided</Text>
        <Text style={styles.perkItem}>• Free water testing service provided</Text>
        <Text style={styles.perkItem}>• Your complaints will be prioritized to get solved</Text>
        <Text style={styles.perkItem}>• Get the ability to resolve any water-related issue</Text>
        <Text style={styles.perkItem}>• Get access to complaint data</Text>
        <Text style={styles.perkItem}>• Get engaged with our community directly</Text>
      </View>

      <View style={styles.conditionsContainer}>
        <Text style={[styles.boldText, styles.conditionsText]}>Conditions for getting Silver Card</Text>
        <Text style={styles.conditionsText}>Donate Rs. 100 or above to get this Silver Card and become a Member of Jal-Nidhi</Text>
      </View>
      <TouchableOpacity style={styles.donateButton} onPress={() => navigation.navigate('Donate')}>
        <Text style={styles.buttonText}>DONATE</Text>
      </TouchableOpacity>
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
  lockIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    zIndex: 1,
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
    fontSize: Dimensions.get('window').width * 0.04,
    marginBottom: 10,
  },
  conditionsContainer: {
    backgroundColor: '#e0e0e0',
    padding: 16,
    width: '70%', // Adjusted width
    marginTop: 20,
    alignSelf: 'flex-start',
  },
  conditionsText: {
    fontSize: Dimensions.get('window').width * 0.04,
    marginBottom: 10,
  },
  donateButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 8,
    alignSelf: 'flex-end',
    marginTop: -120, // Adjusted margin-top
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default MembershipScreen;