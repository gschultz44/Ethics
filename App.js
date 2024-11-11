import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from './WelcomePage';
import AboutPage from './AboutPage';
import LoginPage, { AuthContext } from './LoginPage';
import { AuthProvider } from './LoginPage';
import QuestionsPage from './QuestionsPage';
import ResultsPage from './ResultsPage';
import ProfilePage from './ProfilePage';
import SettingsPage from './SettingsPage';
import CreateAccount from './CreateAccount';

const Stack = createStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="WelcomePage">
          <Stack.Screen name="WelcomePage" component={WelcomePage} />
          <Stack.Screen name="AboutPage" component={AboutPage} />
          <Stack.Screen name="LoginPage" component={LoginPage} />
          <Stack.Screen name="QuestionsPage" component={QuestionsPage} />
          <Stack.Screen name="ResultsPage" component={ResultsPage} />
          <Stack.Screen name="ProfilePage" component={ProfilePage} />
          <Stack.Screen name="SettingsPage" component={SettingsPage} />
          <Stack.Screen name="CreateAccount" component={CreateAccount} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
