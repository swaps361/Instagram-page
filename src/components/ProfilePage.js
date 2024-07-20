import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import post1 from '../assets/post1.jpg';
import post2 from '../assets/post2.jpg';
import post3 from '../assets/post3.jpg';
import post4 from '../assets/post1.jpg';
import post5 from '../assets/post2.jpg';
import post6 from '../assets/post3.jpg';
import post7 from '../assets/post1.jpg';
import profilePic from '../assets/profile.jpg';

function ProfilePage() {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image source={profilePic} style={styles.profilePicture} />
        <View style={styles.statsContainer}>
          <View style={styles.stats}>
            <Text><strong>Followers</strong></Text>
            <Text style={styles.count}>400</Text>
          </View>
          <View style={styles.stats}>
            <Text><strong>Posts</strong></Text>
            <Text style={styles.count}>20</Text>
          </View>
        </View>
      </View>
      <ScrollView style={styles.postsContainer}>
        <Image source={post1} style={styles.postImage} />
        <Image source={post2} style={styles.postImage} />
        <Image source={post3} style={styles.postImage} />
        <Image source={post4} style={styles.postImage} />
        <Image source={post5} style={styles.postImage} />
        <Image source={post6} style={styles.postImage} />
        <Image source={post7} style={styles.postImage} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  topSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  stats: {
    alignItems: 'center',
  },
  count: {
    fontSize: 20,
  },
  postsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  postImage: {
    width: 100,
    height: 100,
    margin: 5,
  },
});

export default ProfilePage;
