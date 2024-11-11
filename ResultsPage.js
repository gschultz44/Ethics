// ResultsPage.js

import React, { useState } from 'react';
import { Text, TextInput, View, FlatList } from 'react-native';
import { Avatar, Button } from 'react-native-elements';
import axios from 'axios';

const ResultsPage = ({ navigation }) => {

const { answers } = navigation?.state?.params || {};
console.log(answers);

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

  // Function to send a message to OpenAI API and get a response
const sendMessageToOpenAI = async (message) => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: message }],
        },
        {
          headers: {
            Authorization: `Bearer [API KEY HERE]`, // replace with API key
          },
        }
      );
  
      // Return response in JSON format
      return response.data;
    } catch (error) {
      console.error('Error sending message to OpenAI:', error);
      return null; 
    }
  };
  
  // Example usage of sendMessageToOpenAI
  const getResponse = async () => {
    const userMessage = 'Testing message to OpenAI!';
  
    const response = await sendMessageToOpenAI(userMessage);
  
    if (response) {
      // Print the response value
      console.log('OpenAI Response:', response);
    } else {
      console.log('Failed to fetch response from OpenAI.');
    }
  };

  
  
  //testing function call to OpenAI
  getResponse();
  //const answerString = answers.join(", ");

  return (
    <View>
        <Text>This is the results page!</Text>
        <Text>{JSON.stringify(answers)}</Text>
        <Text>Confirming the edits went through!</Text>
    </View>
      );
    };

export default ResultsPage;