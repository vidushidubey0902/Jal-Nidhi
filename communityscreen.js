import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

const App = () => {
  const [complaintsSubheading, setComplaintsSubheading] = useState('COMPLAINTS BY USERS');
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  const handleDislike = () => {
    setDislikeCount(dislikeCount + 1);
  };

  const handleComment = () => {
    if (comment.trim() !== '') {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {/* Header Content */}
      </View>
      <View style={styles.mainContainer}>
        {/* Main Content */}
        <ScrollView>
          {/* Remove Suggestions by Users Section */}
          {/* Remove Blogs Section */}
          {/* Remove Videos Section */}

          {/* Articles by User Section */}
          <View style={styles.sideBySideContainer}>
            <Text style={styles.sectionTitle}>Articles by User</Text>
            {/* Horizontal Scrollable Articles */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {/* Add your articles content here */}
              {/* Example:
              <Card>
                <Card.Title>Article Title</Card.Title>
                <Card.Divider />
                <Text>Article Content Goes Here</Text>
              </Card>
              */}
            </ScrollView>
          </View>

          {/* Complaints by Users Section */}
          <View style={styles.sideBySideContainer}>
            <Text style={styles.sectionTitle}>{complaintsSubheading}</Text>
            {/* Post Card */}
            <Card>
              <Card.Title>Post Title</Card.Title>
              <Card.Divider />
              <Text>Post Description Goes Here</Text>
              <View style={styles.buttonContainer}>
                <Button
                  type="clear"
                  title={`Like (${likeCount})`}
                  icon={<FontAwesome name="thumbs-up" size={20} color="#3498db" />}
                  onPress={handleLike}
                />
                <Button
                  type="clear"
                  title={`Dislike (${dislikeCount})`}
                  icon={<FontAwesome name="thumbs-down" size={20} color="#e74c3c" />}
                  onPress={handleDislike}
                />
                <Button
                  type="clear"
                  title="Comment"
                  icon={<FontAwesome name="comment" size={20} color="#7f8c8d" />}
                  onPress={handleComment}
                />
              </View>
              {/* Comments Section */}
              <View style={styles.commentsContainer}>
                <Text style={styles.commentsTitle}>Comments</Text>
                {comments.map((comment, index) => (
                  <Text key={index}>{comment}</Text>
                ))}
                {/* Comment Input */}
                <TextInput
                  placeholder="Add a comment..."
                  value={comment}
                  onChangeText={(text) => setComment(text)}
                  style={styles.commentInput}
                />
              </View>
            </Card>
          </View>
        </ScrollView>
      </View>
      <View style={styles.bottomContainer}>
        {/* Bottom Container Content */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    // ... Header styles
  },
  mainContainer: {
    flex: 1,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // ... Bottom Container styles
  },
  sideBySideContainer: {
    flex: 1,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  commentsContainer: {
    marginTop: 10,
  },
  commentsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  commentInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
  },
});

export default App;
