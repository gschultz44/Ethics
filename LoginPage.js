import React, { useState, createContext, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export const AuthContext = createContext();

// Define the LoginPage component
const LoginPage = ({ navigation }) => {
  const { isLoggedIn, setIsLoggedIn, userInfo, setUserInfo, authCredentials } = useContext(AuthContext); // Access global state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle login action
  const handleLogin = () => {
    // Check if email and password match stored credentials
    if (authCredentials.email === email && authCredentials.password === password) {
      setIsLoggedIn(true);
      setUserInfo({ email });
      navigation.navigate('WelcomePage'); // Navigate to WelcomePage on success
    } else {
      Alert.alert("Login Failed", "Incorrect email or password.");
    }
  };

  // Handle logout action
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserInfo(null);
    setEmail('');
    setPassword('');
  };

  // Handle forgot password popup
  const handleForgotPassword = () => {
    email == '' ? Alert.alert(
      "Forgot Password",
      "Input your email into the email field.",
      [{ text: "OK", onPress: () => console.log("Forgot Password alert dismissed") }],
      { cancelable: true }
    ) : Alert.alert(
      "Forgot Password",
      "An email will be sent to your inbox within 24 hours.",
      [{ text: "OK", onPress: () => console.log("Forgot Password alert dismissed") }],
      { cancelable: true }
    );
  };

  // Navigate to the Create Account page
  const handleCreateAccount = () => {
    navigation.navigate('CreateAccount'); // Adjust the screen name as needed
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      {isLoggedIn ? (
        // Display logged-in user's email and a logout button
        <View style={styles.loggedInContainer}>
          <Text style={styles.loggedInText}>Logged in as: {userInfo.email}</Text>
          <Button title="Logout" onPress={handleLogout} color="#FF3B30" />
        </View>
      ) : (
        // Display login form if user is not logged in
        <>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Button title="Login" onPress={handleLogin} />

          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleCreateAccount}>
            <Text style={styles.createAccount}>Create Account</Text>
          </TouchableOpacity>
        </>
      )}
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
  loggedInContainer: {
    alignItems: 'center',
  },
  loggedInText: {
    fontSize: 18,
    marginBottom: 20,
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

// AuthProvider component to wrap around the app and provide global state
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [authCredentials, setAuthCredentials] = useState({ email: '', password: '' });

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, userInfo, setUserInfo, authCredentials, setAuthCredentials }}>
      {children}
    </AuthContext.Provider>
  );
};

export default LoginPage;
