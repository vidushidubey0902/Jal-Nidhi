import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator,} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'react-native-gesture-handler';
// ... (Previous imports)

const AccountScreen = () => {
  const navigation = useNavigation();
  const [loader, setLoader] = useState(false);
  const [userData, setUserData] = useState({});
  const [showSyncDialog, setShowSyncDialog] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English'); // State for selected language

  useEffect(() => {
    // Fetch user data when the component mounts
    const fetchUserData = async () => {
      try {
        const user = auth().currentUser;
        if (user) {
          // User is signed in
          setUserData({
            username: user.displayName || 'JalNidhi user',
            email: user.email || '',
          });
        }
      } catch (error) {
        console.error('Fetch user data error:', error);
      }
    };

    fetchUserData();
  }, []);

  // Navigation handlers
  const handleSignOut = async () => {
    // Implement your sign-out logic here
    setLoader(true);
    try {
      await auth().signOut();
      setLoader(false);
      navigation.navigate('Welcome');
    } catch (error) {
      console.error('Sign-out error:', error);
      setLoader(false);
    }
  };

  const handleSync = () => {
    // Implement your sync logic here
    // For simplicity, just set the showSyncDialog state to true
    setShowSyncDialog(true);
  };

  const handleOk = () => {
    // Handle the "Ok" button press in the sync confirmation dialogue
    setShowSyncDialog(false);
    // Implement any additional logic if needed
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="user-circle" size={48} color="#3498db" />
        <Text style={styles.headerText}>User Account</Text>
      </View>
      <Picker
          selectedValue={selectedLanguage}
          style={styles.languagePicker}
          onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
        >
          <Picker.Item label="English" value="English" />
          <Picker.Item label="Telegu" value="Telegu" />
          <Picker.Item label="Hindi" value="hindi" />
          {/* Add more languages as needed */}
        </Picker>

        <TouchableOpacity onPress={handleSync} style={styles.syncButton}>
          <FontAwesome name="refresh" size={24} color="#2C3E50" />
          <Text style={styles.syncButtonText}>Sync</Text>
        </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome back,</Text>
        <Text style={styles.usernameText}>{userData.username}!</Text>
        <Text style={styles.emailText}>Email: {userData.email}</Text>

        <TouchableOpacity onPress={handleSignOut} style={styles.button}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Edit')}>
          <Text style={styles.buttonText}>Edit Information</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Faqs')} style={styles.button}>
          <Text style={styles.buttonText}>FAQs</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('About')} style={styles.button}>
          <Text style={styles.buttonText}>About Us</Text>
        </TouchableOpacity>

        {loader && <ActivityIndicator size="large" color="#3498db" style={styles.loader} />}
      </View>

      {/* Sync Confirmation Dialogue */}
      {showSyncDialog && (
        <View style={styles.syncDialog}>
          <Text>Your data is stored on local storage successfully.</Text>
          <Text>Synced successfully!</Text>
          <TouchableOpacity onPress={handleOk} style={styles.syncDialogButton}>
            <Text style={styles.syncDialogButtonText}>Ok</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f6f6',
  },
  header: {
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
    marginBottom: 20,
    elevation: 2,
  },
  headerText: {
    color: '#2C3E50',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  syncButton: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1, // Added flex property
    justifyContent: 'center', // Center the contents horizontally
  },
  syncButtonText: {
    marginLeft: 5,
    color: '#2C3E50',
    fontSize: 18,
  },
  languagePicker: {
    height: 50,
    width: 120,
    color: '#2C3E50',
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#3498db',
  },
  usernameText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2C3E50',
  },
  emailText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#7F8C8D',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loader: {
    marginTop: 20,
  },
  syncDialog: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
    position: 'absolute',
    top: '40%',
    left: '10%',
    right: '10%',
  },
  syncDialogButton: {
    marginTop: 20,
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
  },
  syncDialogButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AccountScreen;
