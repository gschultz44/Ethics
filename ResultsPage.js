// ResultsPage.js

import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';

const ResultsPage = ({ route, navigation }) => {
  const [aiResponse, setAIResponse] = useState([]); 
  const [userResponse, setUserResponse] = useState([]);
  const [questions, setQuestions] = useState([]);

  const {answers} = route.params || {};
  console.log(answers);

  const theQuestions = [
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


  const addAiResponse = (new_message) => {
    setAIResponse((prevAIResponse) => [...prevAIResponse, new_message]);
  };


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
            Authorization: `Bearer API_KEY`, // replace with API key
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
  
  // Wrapper for usage of sendMessageToOpenAI
  const getResponse = async (inputMessage) => {
  
    const response = await sendMessageToOpenAI(inputMessage);
  
    if (response) {
      // Print the response value
      console.log('OpenAI Response:', response.choices[0].message.content);
      addAiResponse(response.choices[0].message.content);
    } else {
      console.log('Failed to fetch response from OpenAI.');
    }
  };

  const setResponseState = () => {
    for (let i = 0; i < 10; i++){
      const statement = questions[i];
      const updatePromptTemplate = `You are a philosopher reviewing ethical and moral problems faced by modern-day society. Review the provided statement, and decide if you agree, are neutral, or disagree.
        Represent your opinion as "Fair", "Neutral", or "Against". Write a very brief statement that summarizes why you agree with, disagree with, or are neutral about the statement. Provide your response in JSON format
        based on the example provided below. Your response should be VERY specific to the topic mentioned in the provided statement.
        
        Statement: ${statement}

        Return a string of 80 words maximum, such that you state a clear position on the statement and give at least one reason to justify this position. Do NOT format it as a JSON or as a key-value pair. ONLY return the answer itself.

        Example output: 
        "My posiiton on this statement is that it is [fair/neutral/against], because [reason 1] and [reason 2]." `
      
    getResponse(updatePromptTemplate);

    }

  };

  
  useEffect(() => {   //only update these states on initialization, or when "answers" variable changes
    if (answers) {
      setUserResponse(answers);
    }
    setQuestions(theQuestions);
    
    setResponseState();
  }, [answers]);


  //testing function call to OpenAI
  //getResponse("What are the numbers from 1 to 5? Please count down.");
  //const answerString = answers.join(", ");

  return (
    <ScrollView contentContainerStyle={styles.container}>
    {Array.from({ length: 10 }, (_, i) => (
      <View key={i} style={styles.boxContainer}>
        <Text style={styles.label}>Question {i + 1}</Text>
        <Text>{questions[i]}</Text>
        <Text style={{ height: 10 }}>{' '}</Text>
        <Text>User response: {userResponse[i]}</Text>
        <Text style={{ height: 10 }}>{' '}</Text>
        <Text>AI Response: {aiResponse[i]}</Text>

      </View>
    ))}
    </ScrollView>
    
  
  );


  };

  const styles = StyleSheet.create({
    container: {
      padding: 20,
      paddingBottom: 60, 
    },
    boxContainer: {
      marginBottom: 15,
      padding: 15,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 8,
      backgroundColor: '#ffffff',
      shadowColor: '#000', 
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    label: {
      fontSize: 18,
      marginBottom: 10,
      color: '#333',
    },
    textBox: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      paddingHorizontal: 10,
      borderRadius: 5,
      backgroundColor: '#f9f9f9',
    },
  });


export default ResultsPage;