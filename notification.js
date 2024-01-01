// notification.js
import React, { useState } from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';

export default function NotificationScreen() {
  const [isEnabled, setIsEnabled] = useState({
    newFeatures: true,
    communityUpdates: true,
    membershipPerks: true,
    alertFloods: true,
    alertWaterLogging: true,
    complaintTrack: false,
  });

  const toggleSwitch = (name) => {
    setIsEnabled({ ...isEnabled, [name]: !isEnabled[name] });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notification Settings</Text>
      <View style={styles.settingContainer}>
        <Text style={styles.settingText}>New Features</Text>
        <Switch
          onValueChange={() => toggleSwitch('newFeatures')}
          value={isEnabled.newFeatures}
        />
      </View>
      <View style={styles.settingContainer}>
        <Text style={styles.settingText}>Community Updates</Text>
        <Switch
          onValueChange={() => toggleSwitch('communityUpdates')}
          value={isEnabled.communityUpdates}
        />
      </View>
      <View style={styles.settingContainer}>
        <Text style={styles.settingText}>Membership Perks</Text>
        <Switch
          onValueChange={() => toggleSwitch('membershipPerks')}
          value={isEnabled.membershipPerks}
        />
      </View>
      <View style={styles.settingContainer}>
        <Text style={styles.settingText}>Alerts for Floods</Text>
        <Switch
          onValueChange={() => toggleSwitch('alertFloods')}
          value={isEnabled.alertFloods}
        />
      </View>
      <View style={styles.settingContainer}>
        <Text style={styles.settingText}>Alerts for Water Logging</Text>
        <Switch
          onValueChange={() => toggleSwitch('alertWaterLogging')}
          value={isEnabled.alertWaterLogging}
        />
      </View>
      <View style={styles.settingContainer}>
        <Text style={styles.settingText}>Complaint Tracking</Text>
        <Switch
          onValueChange={() => toggleSwitch('complaintTrack')}
          value={isEnabled.complaintTrack}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'cenxter',
  },
  settingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd', // Light gray border color
    paddingBottom: 10,
  },
  settingText: {
    fontSize: 16,
  },
});
