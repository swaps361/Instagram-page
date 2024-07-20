import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import profile from '../assets/profile.jpg';

const ProfileIcon = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Profile')}>
      <Image source={profile} style={styles.iconImage} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  iconImage: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
});

export default ProfileIcon;
