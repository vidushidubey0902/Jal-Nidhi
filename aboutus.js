import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const AboutUsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <Image source={require('C:\Users\priya\OneDrive\Desktop\screens\home\applogo.png')} style={styles.logo} /> */}

      <View style={[styles.sectionContainer, { backgroundColor: 'rgba(255, 215, 0, 0.4)' }]}>
        <Text style={[styles.heading, { textAlign: 'center' }]}>About Us</Text>
        <Text style={[styles.description, { textAlign: 'center' }]}>
          Welcome to Jal Nidhi, our community-driven water monitoring app! We are on a mission to empower individuals to make a positive impact on their community's water issues. Through collaboration and data sharing, we aim to create a more sustainable and informed society.
        </Text>
      </View>

      <View style={[styles.sectionContainer, { backgroundColor: 'rgba(144, 238, 144, 0.4)' }]}>
        <Text style={[styles.subHeading, { textAlign: 'center' }]}>Our Mission</Text>
        <Text style={[styles.description, { textAlign: 'center' }]}>
          Our mission is to foster a transparent and informed community by crowdsourcing water-related issues and providing open access to the collected data. We believe in the power of collective action to address and solve water challenges for a better future.
        </Text>
      </View>

      <View style={[styles.sectionContainer, { backgroundColor: 'rgba(135, 206, 235, 0.4)' }]}>
        <Text style={[styles.subHeading, { textAlign: 'center' }]}>Features</Text>
        <Text style={[styles.feature, { textAlign: 'center' }]}>
          • Report and track water-related problems in your community
        </Text>
        <Text style={[styles.feature, { textAlign: 'center' }]}>
          • Explore an interactive map displaying reported issues
        </Text>
        <Text style={[styles.feature, { textAlign: 'center' }]}>
          • Participate in discussions and local initiatives
        </Text>
        <Text style={[styles.feature, { textAlign: 'center' }]}>
          • Stay informed with real-time updates on reported issues
        </Text>
        <Text style={[styles.feature, { textAlign: 'center' }]}>
          • Engage with other community members to find and implement solutions
        </Text>
      </View>

      <View style={[styles.sectionContainer, { backgroundColor: 'rgba(255, 160, 122, 0.4)' }]}>
        <Text style={[styles.subHeading, { textAlign: 'center' }]}>How It Works</Text>
        <Text style={[styles.description, { textAlign: 'center' }]}>
          Jal Nidhi works by allowing users like you to report water-related problems in your community. Once a report is submitted, it is displayed on the interactive map for everyone to see. The community can then come together to discuss, collaborate, and work towards resolving these issues.
        </Text>
      </View>

      <View style={[styles.sectionContainer, { backgroundColor: 'rgba(255, 105, 180, 0.4)' }]}>
        <Text style={[styles.subHeading, { textAlign: 'center' }]}>Our Team</Text>
        <Text style={[styles.description, { textAlign: 'center' }]}>
          Behind Jal Nidhi is a passionate team committed to making a positive impact on water-related challenges. We are dedicated to ensuring the success of our mission and continuously improving the app for the benefit of our users.
        </Text>
      </View>

      <View style={[styles.sectionContainer, { backgroundColor: 'rgba(216, 191, 216, 0.4)' }]}>
        <Text style={[styles.subHeading, { textAlign: 'center' }]}>Contact Us</Text>
        <Text style={[styles.description, { textAlign: 'center' }]}>
          Have questions, feedback, or suggestions? We'd love to hear from you! Reach out to us at support@jalnidhi.com.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  sectionContainer: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    width:350,
    
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  subHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
  },
  feature: {
    fontSize: 16,
    color: '#3498db',
    marginBottom: 10,
  },
});

export default AboutUsScreen;