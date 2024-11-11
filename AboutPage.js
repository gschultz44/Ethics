// AboutPage.js

import React from 'react';
import { View, Text, StyleSheet, Linking, ScrollView, Button } from 'react-native';

const AboutPage = ({ navigation }) => {
  const handleBackToWelcome = () => {
    navigation.navigate("WelcomePage");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About Us</Text>

      {/* Profile section for Diego Paredes */}
      <View style={styles.profile}>
        <Text style={styles.name}>Diego Paredes</Text>
        <Text style={styles.university}>Southern Methodist University</Text>
        <Text style={styles.year}>Senior</Text>
        <Text style={styles.major}>Double Majoring in Computer Science and Data Science</Text>
        <Text 
          style={styles.link} 
          onPress={() => Linking.openURL('https://www.linkedin.com/in/thediegoparedes/?trk=contact-info')}
        >
          LinkedIn
        </Text>
      </View>

      {/* Profile section for Sarah Mendoza */}
      <View style={styles.profile}>
        <Text style={styles.name}>Sarah Mendoza</Text>
        <Text style={styles.university}>Southern Methodist University</Text>
        <Text style={styles.year}>Junior</Text>
        <Text style={styles.major}>Double Majoring in Computer Science and Data Science</Text>
        <Text 
          style={styles.link} 
          onPress={() => Linking.openURL('https://www.linkedin.com/in/ryandschaefer/')}
        >
          LinkedIn
        </Text>
      </View>

      {/* Profile section for Grace Schultz */}
      <View style={styles.profile}>
        <Text style={styles.name}>Grace Schultz</Text>
        <Text style={styles.university}>Southern Methodist University</Text>
        <Text style={styles.year}>Junior</Text>
        <Text style={styles.major}>Triple Majoring in Computer Science, Creative Computing, and Data Science</Text>
        <Text 
          style={styles.link} 
          onPress={() => Linking.openURL('https://www.linkedin.com/in/grace-schultz44/')}
        >
          LinkedIn
        </Text>
      </View>

      {/* Button to go back to the Welcome page */}
      <Button title="Back to Welcome" onPress={handleBackToWelcome} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', // Light gray background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20, // Space below the title
  },
  profile: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#ffffff', // White background for profiles
    borderRadius: 5,
    elevation: 2, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold', // Bold text for names
  },
  university: {
    fontSize: 16, // Font size for university
  },
  year: {
    fontSize: 16, // Font size for year
  },
  major: {
    fontSize: 16, // Font size for major
  },
  link: {
    fontSize: 16,
    color: 'blue', // Blue text for links
    textDecorationLine: 'underline', // Underlined text for links
  },
});

// Export the AboutPage component as default
export default AboutPage;
