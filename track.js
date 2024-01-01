// App.js

import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';

class ComplainScreen extends React.Component {
  render() {
    return (
      <ScrollView style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
          Complain Tracking
        </Text>

        <Button title="Your Complain" onPress={() => console.log('Button pressed')} />

        <Text style={{ marginTop: 20, fontSize: 18, marginBottom: 10 }}>
          Description:
        </Text>
        <Text style={{ marginBottom: 20 }}>Complain description comes here from complain form registered from backend</Text>

        <Text style={{ fontSize: 18, marginBottom: 10 }}>Progress:</Text>
        <Text>In progress</Text>
      </ScrollView>
    );
  }
}

export default ComplainScreen;