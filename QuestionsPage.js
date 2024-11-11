// QuestionsPage.js

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Define the QuestionsPage component
const QuestionsPage = ({ navigation }) => {
  // Array of questions
  const questions = [
    "Artificial intelligence systems should have the ability to make decisions in healthcare, such as treatment recommendations.",
    "Universal healthcare is a fundamental human right that should be guaranteed to all citizens.",
    "There should be strict regulations on carbon emissions for corporations to combat climate change.",
    "Surveillance programs should be used to enhance national security, even at the cost of individual privacy.",
    "There should be less strict gun laws.",
    "The United States should provide sanctuary to undocumented immigrants.",
    "Companies should be held accountable for creating diverse work environments.",
    "Social media platforms should be in charge of controlling misinformation.",
    "Individuals should be allowed to choose assisted suicide.",
    "Contraception is a basic human right.",
  ];

  // State to track current question index and answers
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  // Function to handle button presses
  const handleResponsePress = (response) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = response;
    setAnswers(newAnswers);

    // Move to the next question
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Handle completion of all questions (e.g., navigate to results or summary page)
      console.log("All questions answered:", newAnswers);
      // Optionally navigate to a results page
      navigation.navigate("ResultsPage", {answers: newAnswers});
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        {/* Display current question number and remaining questions */}
        <Text style={styles.counter}>
          Question {currentIndex + 1} of {questions.length}
        </Text>
        <Text style={styles.question}>{questions[currentIndex]}</Text>

        {/* Buttons for responses */}
        <View style={styles.buttonContainer}>
          <Button title="Fair" onPress={() => handleResponsePress('Fair')} />
          <Button title="Neutral" onPress={() => handleResponsePress('Neutral')} />
          <Button title="Against" onPress={() => handleResponsePress('Against')} />
        </View>
      </View>
    </View>
  );
};

// Define styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', // Light gray background
    justifyContent: 'center', // Center content vertically
  },
  questionContainer: {
    marginBottom: 30, // Space below question container
    padding: 10,
    backgroundColor: '#ffffff', // White background for each question
    borderRadius: 5,
    elevation: 2, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    alignItems: 'center', // Center question text and buttons
  },
  counter: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold', // Bold text for question counter
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Distribute buttons evenly
    width: '100%', // Ensure button container uses full width
  },
});

// Export the QuestionsPage component as default
export default QuestionsPage;
