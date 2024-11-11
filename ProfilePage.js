// ProfilePage.js
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { AuthContext } from './LoginPage';

const ProfilePage = () => {
  const { userInfo, setUserInfo, isLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState(userInfo?.email || '');
  const [recentQuestions, setRecentQuestions] = useState(userInfo?.recentQuestions || []);

  const handleSaveProfile = () => {
    const updatedUserInfo = { ...userInfo, email, recentQuestions };
    setUserInfo(updatedUserInfo);
    console.log("Profile updated:", updatedUserInfo);
  };

  if (!isLoggedIn) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Please log in to view your profile.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email ? "Change email" : email}
        onChangeText={setEmail}
      />
      <Button title="Save Profile" onPress={handleSaveProfile} />
      <Text style={styles.subTitle}>Recent Questions</Text>
      {recentQuestions.map((question, index) => (
        <Text key={index} style={styles.question}>{question}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  question: {
    fontSize: 16,
    marginBottom: 5,
  },
  message: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
  },
});

export default ProfilePage;
