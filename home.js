//home.js
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';
import Entypo from 'react-native-vector-icons/Entypo'; // Import FontAwesome5 icon library
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Import MaterialIcons icon library
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import database from '@react-native-firebase/database';

const YourComponent = () => {
  const [selectedEmergencyNumber, setSelectedEmergencyNumber] = useState('');
  const [isBecomeMemberModalVisible, setIsBecomeMemberModalVisible] = useState(false);
  const [resolvedCount, setResolvedCount] = useState(1);
  const [pendingCount, setPendingCount] = useState(3);
  const [totalCount, setTotalCount] = useState(4);
  const navigation = useNavigation();


  const emergencyNumbers = [
    { label: '191', value: '192' },
    { label: '119', value: '119' },
    { label: '911', value: '911' },
    { label: '191', value: '192' },
    { label: '119', value: '119' },
    { label: '155313', value: 'Sewerage board' },

  ];

  // Function to fetch complaint counts from the API and update state
  const fetchComplaintCounts = async () => {
    // Your API fetching logic here
  };

  useEffect(() => {
    // Fetch complaint counts on component mount
    database()
  .ref('/users/123')
  .set({
    name: 'Ada Lovelace',
    age: 31,
  })
  .then(() => console.log('Data set.'));
    fetchComplaintCounts();
  }, []);
  

  const handleEmergencyNumberPress = () => {
    // Handle emergency number press logic
  };

  const handleSubmitComplaint = () => {
    // Handle submit complaint logic
    navigation.navigate('Submit');
  };

  const handleTrackComplaint = () => {
    // Handle track complaint logic
    navigation.navigate('Track');
  };

  const handleViewMap = () => {
    // Handle track complaint logic
    navigation.navigate('Alert');
  };

  const handleBecomeMemberPress = () => {
    // Handle become a member button press logic
    navigation.navigate('Member');
  };

  const handleNotificationPress = () => {
    navigation.navigate('Notification');
  };

  const closeBecomeMemberModal = () => {
    // Handle closing the become a member modal
    setIsBecomeMemberModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('Open drawer')}>
          <Ionicons name="ios-menu" size={30} color="#000814" />
        </TouchableOpacity>
        <View style={styles.appNameContainer}>
          <Text style={styles.appName}>जलNeedhi</Text>
          <Image source={require('./photos/applogo.png')}
            style={styles.logo}
          />
          <FontAwesome name="bell" size={30} color="#ee9b00" style={styles.notificationIcon} onPress={handleNotificationPress} />
        </View>
      </View>
      <View style={styles.buttonContainerTop}>
        <TouchableOpacity style={[styles.button, styles.button1]}
          onPress={handleSubmitComplaint}>
          <Entypo name="drop" size={20} color="#000814" />
          <Text style={styles.buttonText}>File Your Complaint</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.button2]} onPress={handleTrackComplaint}>
          <MaterialCommunityIcons name="clipboard-search-outline" size={20} color="#000814" />
          <Text style={styles.buttonText}>Track Complaint</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.locationContainer}>
        <View style={styles.locationContent}>
          <View style={styles.locationTextContainer}>
            <View style={{padding:3}}>
            <Text style={[styles.locationHeadingText,{marginBottom:10}]}>Your Current Location</Text>
            <Image source={require('./photos/map.jpg')}
            style={{height:130,width:200,borderWidth:1,borderColor:'#000',borderRadius:8}}
            resizeMode='contain'
          />
            </View>
            <View style={styles.locationButtonsContainer}>
              <TouchableOpacity style={styles.viewMapButton} onPress={handleViewMap}>
                <Text style={styles.viewMapButtonText}>
                  View Map
                  </Text>
              </TouchableOpacity>
              <View style={styles.emergencyDropdownContainer}>
                <Picker
                  selectedValue={selectedEmergencyNumber}
                  onValueChange={(itemValue, itemIndex) => setSelectedEmergencyNumber(itemValue)}
                  style={styles.picker}
                >
                  <Picker.Item label="Emergency Numbers" value="" />
                  {emergencyNumbers.map((emergency, index) => (
                    <Picker.Item key={index} label={emergency.label} value={emergency.value} />
                  ))}
                </Picker>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.becomeMemberButtonContainer}>
        <TouchableOpacity style={styles.becomeMemberButton} onPress={handleBecomeMemberPress}>
          <Text style={styles.becomeMemberButtonText}>Become a Member</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.liveCountsContainer}>
        <View style={[styles.countBox, styles.countBox1]}>
          <Text style={styles.liveCountText}>{pendingCount}</Text>
          <Text style={styles.countText}>Pending Complaints</Text>
        </View>
        <View style={[styles.countBox, styles.countBox2]}>
          <Text style={styles.liveCountText}>{totalCount}</Text>
          <Text style={styles.countText}>Total Complaints</Text>
        </View>
        <View style={[styles.countBox, styles.countBox3]}>
          <Text style={styles.liveCountText}>{resolvedCount}</Text>
          <Text style={styles.countText}>Resolved Complaints</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  appNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  notificationIcon: {
    marginLeft: 10,
  },
  liveCountsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 70,
  },
  liveCountText: {
    fontSize: 50, // Adjust the font size for the count numbers
    color: '#000814',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  countText: {
    fontSize: 20, // Adjust the font size for the text (Resolved, Pending, Total)
    color: '#000814',
    textAlign: 'center',
    marginTop: 5,// Add margin top to separate the text from the number
    fontWeight: 'bold',
  },
  countBox: {
    height: 180, // Adjust the height as needed
    width: 110,   // Adjust the width as needed
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 7, // Increase the horizontal margin for spacing
  },
  button: {
    backgroundColor: '#3498db',
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  buttonSpacer: {
    width: 30,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  pickerContainer: {
    borderColor: '#3498db',
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: 200,
    color: '#333',
  },
  becomeMemberButtonContainer: {
    width: '80%', // Keep the desired width
    marginLeft: 'auto', // Center the container horizontally
    marginRight: 'auto', // Center the container horizontally
    marginTop: 2,
  },
  becomeMemberButton: {
    height: 60,
    width: 300,
    backgroundColor: '#e9c46a',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 5,
  },
  becomeMemberButtonText: {
    color: '#000000',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  buttonContainerTop: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#3498db',
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#136f63',
    fontSize: 18,
    fontWeight: 'bold', // Add this line to make the text bold

    textAlign: 'center',
  }, // Add margin to separate the icon and text

  button1: {
    marginRight: 5,
    backgroundColor: '#e0fbfc' // Adjust the margin between the buttons as needed
  },
  button2: {
    marginLeft: 5,
    backgroundColor: '#e0fbfc' // Adjust the margin between the buttons as needed
  },
  locationContainer: {
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 50,
    marginLeft: '10%',
  },
  locationHeading: {
    flexDirection: 'row',
    backgroundColor: '#3498db',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: '60%', // Decrease the width to make it narrower
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  locationHeadingText: {
    color: '#000814',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5, // Adjust the margin as needed
    alignSelf: 'flex-start',

  },
  locationContent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%', // Decrease the width to make it narrower
    justifyContent: 'space-between',
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#ecf0f1',
  },
  locationTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  viewMapButton: {
    backgroundColor: '#3498db',
    borderRadius: 5,
    padding: 10,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',

  },
  viewMapButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  emergencyDropdownContainer: {
    marginTop: 10,
    borderColor: '#3498db',
    borderWidth: 1,
    borderRadius: 5,
    width: '80%',
  },
  emergencyDropdown: {
    height: 50,
    width: '100%',
    color: '#333',
  },
  logo: {
    width: 70, // Adjust the width of the logo as needed
    height: 70, // Adjust the height of the logo as needed
    marginRight: 11, // Adjust the margin as needed
  },
  countBox1: {
    backgroundColor: '#94d2bd', // Set the desired background color for count box 1
  },
  countBox2: {
    backgroundColor: '#b5e2fa', // Set the desired background color for count box 2
  },
  countBox3: {
    backgroundColor: '#dee2ff', // Set the desired background color for count box 3
  },

});

export default YourComponent;