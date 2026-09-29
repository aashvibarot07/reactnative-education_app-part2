import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const About = () => {

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>
        About Us
      </Text>

      <Text style={styles.title}>
        Online Education
      </Text>

      <Text style={styles.description}>
        Welcome to our Online Education App.
        Learn new skills and improve your knowledge
        with simple and easy lessons.
      </Text>

      <Text style={styles.followText}>
        Follow Us
      </Text>

      <View style={styles.socialContainer}>

        <TouchableOpacity
          style={styles.socialButton}
          onPress={() =>
            openLink('https://www.facebook.com/')
          }
        >
          <Ionicons
            name="logo-facebook"
            size={30}
            color="#1877F2"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialButton}
          onPress={() =>
            openLink('https://www.instagram.com/')
          }
        >
          <Ionicons
            name="logo-instagram"
            size={30}
            color="#E4405F"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialButton}
          onPress={() =>
            openLink('https://www.youtube.com/')
          }
        >
          <Ionicons
            name="logo-youtube"
            size={30}
            color="#FF0000"
          />
        </TouchableOpacity>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f7fa',
  },

  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  description: {
    fontSize: 16,
    lineHeight: 25,
    color: '#555',
  },

  followText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 15,
  },

  socialContainer: {
    flexDirection: 'row',
    gap: 20,
  },

  socialButton: {
    width: 55,
    height: 55,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },

});

export default About;