// FeedbackPage.js
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const FeedbackPage = () => {
  const [responseStats, setResponseStats] = useState({ for: 0, against: 0, neutral: 0 });

  useEffect(() => {
    // Fetch statistics from backend
    fetch('/api/responseStats') // Replace with actual API endpoint
      .then((res) => res.json())
      .then((data) => setResponseStats(data));
  }, []);

  return (
    <View>
      <Text>AI Interaction Feedback</Text>
      <Text>For: {responseStats.for}</Text>
      <Text>Against: {responseStats.against}</Text>
      <Text>Neutral: {responseStats.neutral}</Text>
    </View>
  );
};

export default FeedbackPage;
