import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import user1 from '../assets/user1.png';
import user2 from '../assets/user2.png';
import user3 from '../assets/user3.png';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import sg1 from '../assets/sg1.png';
import sg2 from '../assets/sg2.png';
import sg3 from '../assets/sg3.png';
import ProfileIcon from './ProfileIcon'; 

const topStories = [
    { id: 1, name: 'Rocky', image: user1 },
    { id: 2, name: 'Anita', image: user2 },
    { id: 3, name: 'Meena', image: user3 },
    { id: 4, name: 'John', image: user1 },
    { id: 5, name: 'Alice', image: user2 },
    { id: 6, name: 'Bob', image: user3 },
    { id: 7, name: 'Emma', image: user1 },
    { id: 8, name: 'Liam', image: user2 },
    { id: 9, name: 'Olivia', image: user3 },
    { id: 10, name: 'Noah', image: user1 },
    { id: 11, name: 'Sophia', image: user2 },
    { id: 12, name: 'Mason', image: user3 },
];

const posts = [
    { id: 1, image: p1 },
    { id: 2, image: p2 },
    { id: 3, image: p3 },
    { id: 4, image: p1 },
    { id: 5, image: p2 },
    { id: 6, image: p3 },
];

const profileSuggestions = [
    { id: 1, name: 'Daniel', image: sg1 },
    { id: 2, name: 'Chris', image: sg2 },
    { id: 3, name: 'Anderson', image: sg3 },
    { id: 4, name: 'Sarah', image: sg1 },
    { id: 5, name: 'Michael', image: sg2 },
    { id: 6, name: 'Jessica', image: sg3 },
    { id: 7, name: 'David', image: sg1 },
    { id: 8, name: 'Emily', image: sg2 },
    { id: 9, name: 'James', image: sg3 },
    { id: 10, name: 'Linda', image: sg1 },
    { id: 11, name: 'Robert', image: sg2 },
    { id: 12, name: 'Elizabeth', image: sg3 },
];

function Homepage() {
  return (
    <View style={styles.container}>
      <View style={styles.topStorySection}>
        <Text style={styles.heading}>Top Stories</Text>
        <ScrollView horizontal style={styles.scrollContainer}>
          {topStories.map(user => (
            <View key={user.id} style={styles.topStory}>
              <Image source={user.image} style={styles.storyImage} />
              <Text>{user.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.postsSection}>
        <Text style={styles.heading}>Posts</Text>
        <ScrollView horizontal style={styles.scrollContainer}>
          {posts.map(post => (
            <Image key={post.id} source={post.image} style={styles.postImage} />
          ))}
        </ScrollView>
      </View>
      <View style={styles.profileSuggestionsSection}>
        <Text style={styles.heading}>Profile Suggestions</Text>
        <ScrollView horizontal style={styles.scrollContainer}>
          {profileSuggestions.map(suggestion => (
            <View key={suggestion.id} style={styles.profileSuggestion}>
              <Image source={suggestion.image} style={styles.suggestionImage} />
              <Text>{suggestion.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <ProfileIcon />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  topStorySection: {
    marginBottom: 20,
  },
  postsSection: {
    marginBottom: 20,
  },
  profileSuggestionsSection: {
    marginBottom: 20,
  },
  scrollContainer: {
    flexDirection: 'row',
  },
  topStory: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  storyImage: {
    borderRadius: 60,
    width: 120,
    height: 120,
  },
  postImage: {
    width: 300,
    height: 300,
    marginRight: 10,
  },
  profileSuggestion: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  suggestionImage: {
    borderRadius: 60,
    width: 120,
    height: 120,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Homepage;
