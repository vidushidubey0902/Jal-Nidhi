//suggestionbyuser.js
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Animated } from 'react-native';

class SuggestionsScreen extends Component {
  constructor(props) {
    super(props);

    this.scrollY = new Animated.Value(0);
    this.state = {
      headerHeight: this.scrollY.interpolate({
        inputRange: [0, 100],
        outputRange: [height * 0.09, height * 0.001],
        extrapolate: 'clamp',
      }),
      suggestions: new Set([
        "It'd be great if the app could provide real-time updates on the water quality in my area. Knowing the quality of the water I'm using is crucial.",
        "I suggest adding a feature that allows users to customize the app's theme colors.",
        "The app would benefit from a dark mode option for nighttime use.",
        "Please consider implementing a community forum where users can discuss and share their experiences.",
        "Adding a daily tips section related to water conservation would be informative and helpful.",
        "arshpreet",
        "deshna",
        "front end wale hai ",
        "dono best hai",
        "Deshna head hai front end ki",
        // Add more suggestions as needed
      ]),
    };
  }

  componentDidMount() {
    this.scrollListener = this.scrollY.addListener(({ value }) => {
      // Handle scroll events if needed
    });
  }

  componentWillUnmount() {
    this.scrollY.removeListener(this.scrollListener);
  }

  render() {
    const { headerHeight, suggestions } = this.state;

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.header, { height: headerHeight }]}>
          <Text style={styles.headerText}>User Suggestions</Text>
        </Animated.View>
        <ScrollView
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.scrollY } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={16}
        >
          <View style={styles.contentContainer}>
            {Array.from(suggestions).map((suggestion, index) => (
              <View key={index} style={styles.suggestionContainer}>
                <Text style={styles.suggestionText}>{suggestion}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    paddingTop: height * 0.02,
    backgroundColor: '#3498db',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: width * 0.06, // Adjust the font size here
    fontWeight: 'bold',
    color: 'white',
  },
  scrollContainer: {
    flex: 1,
    paddingTop: height * 0.04,
  },
  contentContainer: {
    padding: width * 0.05,
  },
  suggestionContainer: {
    marginBottom: height * 0.02,
    backgroundColor: 'white',
    padding: width * 0.06,
    borderRadius: width * 0.04,
    elevation: 3,
    width: '100%',
  },
  suggestionText: {
    fontSize: width * 0.04,
    color: '#444',
    lineHeight: height * 0.03,
  },
});

export default SuggestionsScreen;
