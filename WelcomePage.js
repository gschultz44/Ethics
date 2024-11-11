import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';

const WelcomePage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Ethical App</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.welcomeMessage}>Welcome to the Ethical App!</Text>
        <Text style={styles.instruction}>
          Explore thought-provoking questions that challenge your ethical beliefs.
        </Text>
        <Button title="Start Ethical Questions" onPress={() => navigation.navigate("QuestionsPage")} />
        <Button title="About Us" onPress={() => navigation.navigate("AboutPage")} />
        <Button title="Login" onPress={() => navigation.navigate("LoginPage")} />
        <Button title="Results" onPress={() => navigation.navigate("ResultsPage")} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#a480d9',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  welcomeMessage: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  instruction: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default WelcomePage;
