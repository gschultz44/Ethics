// LoginPage.js

// Import necessary libraries and components
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

// Define the LoginPage component
const LoginPage = ({ navigation }) => {
  // Placeholder function for handling login
  const handleLogin = () => {
    // Add your login logic here
    console.log("Login button pressed");
  };

  // Function to navigate to the Forgot Password page (you can create this page later)
  const handleForgotPassword = () => {
    // Navigate to the Forgot Password screen
    console.log("Forgot Password pressed");
    // navigation.navigate('ForgotPassword'); // Uncomment when you have the Forgot Password screen
  };

  // Function to navigate to the Create Account page
  const handleCreateAccount = () => {
    navigation.navigate('CreateAccount'); // Adjust the screen name to match your Create Account page
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />

      {/* Forgot Password link */}
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Create Account button */}
      <TouchableOpacity onPress={handleCreateAccount}>
        <Text style={styles.createAccount}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

// Define styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5', // Light gray background
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
  forgotPassword: {
    marginTop: 15,
    color: 'blue',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  createAccount: {
    marginTop: 15,
    color: 'blue',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

// Export the LoginPage component as default
export default LoginPage;
