import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { FontAwesome } from '@expo/vector-icons';

const FAQItem = ({ question, answer }) => {
  const [isCollapsed, setCollapsed] = useState(true);
  const [likes, setLikes] = useState(0);
  const [isLiked, setLiked] = useState(false);

  const handleLike = () => {
    if (!isLiked) {
      setLikes(likes + 1);
      setLiked(true);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setCollapsed(!isCollapsed)}>
        <View style={styles.questionContainer}>
          <FontAwesome name={isCollapsed ? 'plus-circle' : 'minus-circle'} size={20} color="#3498db" />
          <Text style={styles.questionText}>{question}</Text>
        </View>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
        <Text style={styles.answerText}>{answer}</Text>
        <View style={styles.likeContainer}>
          <TouchableOpacity onPress={handleLike} disabled={isLiked}>
            <FontAwesome name={isLiked ? 'thumbs-up' : 'thumbs-o-up'} size={20} color={isLiked ? '#2ecc71' : '#95a5a6'} />
          </TouchableOpacity>
          <Text style={styles.likeText}>{likes} {likes === 1 ? 'Like' : 'Likes'}</Text>
        </View>
      </Collapsible>
    </View>
  );
};

const FAQSection = () => {
  const faqs = [
   
    {
      question: 'What is Jal Nidhi and how does it work?',
      answer: 'Jal Nidhi is a mobile application that empowers users to crowdsource water-related problems in their community. Users can submit reports, and the app aggregates and displays this information on an interactive map.',
    },
    {
      question: 'How can I report a water-related problem using the app?',
      answer: 'To report a water-related issue, simply open the Jal Nidhi app, navigate to the reporting feature, and follow the prompts to submit details about the problem. You can include photos and additional information to provide a comprehensive report.',
    },
    {
      question: 'Is Jal Nidhi available for both iOS and Android devices?',
      answer: 'Yes, Jal Nidhi is available for download on both iOS and Android platforms. You can find it on the App Store and Google Play.',
    },
    {
      question: 'Do I need to create an account to use the app?',
      answer: 'While account creation is optional, having a Jal Nidhi account allows you to track your submitted reports, receive updates on their status, and participate in community discussions.',
    },
    {
      question: 'How does the app handle user privacy and data security?',
      answer: 'Jal Nidhi takes user privacy seriously. All personal information is securely stored, and we adhere to strict data security measures. You can review our privacy policy for more details.',
    },
    {
      question: 'Can I view water-related issues reported by others on a map?',
      answer: 'Absolutely! The Jal Nidhi app features an interactive map that displays water-related issues reported by users in your community. You can explore and filter these reports based on location and the type of problem.',
    },
    {
      question: 'Is the data on the map updated in real-time?',
      answer: 'The map is updated regularly to provide the latest information. While it may not be real-time, Jal Nidhi strives to keep the data as current as possible.',
    },
    {
      question: 'What types of water-related problems can be reported through the app?',
      answer: 'You can report a wide range of issues such as leaks, contamination, infrastructure problems, and more. Jal Nidhi is designed to cover various water-related concerns in your community.',
    },
    {
      question: 'How can I get involved in addressing water-related problems in my community?',
      answer: 'Jal Nidhi encourages community involvement. You can participate in discussions, collaborate with other users, and even join local initiatives aimed at addressing water-related challenges.',
    },
    {
      question: 'Can I share the water-related issues on social media or with my community?',
      answer: 'Yes, you can share water-related issues reported through the Jal Nidhi app on social media or with your community. Help spread awareness and encourage others to participate in addressing these challenges.',
    },
  
    // Add more questions as needed
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
    flexGrow: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  container: {
    marginBottom: 20,
    backgroundColor: '#ecf0f1',
    borderRadius: 10,
    padding: 15,
  },
  questionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  questionText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#2c3e50',
  },
  answerText: {
    marginTop: 10,
    color: '#34495e',
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  likeText: {
    marginLeft: 5,
    color: '#95a5a6',
  },
});

export default FAQSection;