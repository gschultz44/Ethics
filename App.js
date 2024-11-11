import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from './WelcomePage';
import AboutPage from './AboutPage';
import LoginPage from './LoginPage';
import QuestionsPage from './QuestionsPage';
import ResultsPage from './ResultsPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomePage">
        <Stack.Screen name="WelcomePage" component={WelcomePage} />
        <Stack.Screen name="AboutPage" component={AboutPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="QuestionsPage" component={QuestionsPage} />
        <Stack.Screen name="ResultsPage" component={ResultsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
