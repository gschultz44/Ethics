// SettingsPage.js
import React, { useState } from 'react';
import { View, Text, Switch, Button, StyleSheet } from 'react-native';

const SettingsPage = () => {
  const [notifications, setNotifications] = useState(true);

  const saveSettings = () => {
    console.log('Settings saved:', { notifications });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.settingItem}>
        <Text style={styles.label}>Dark Mode</Text>
        <Switch value={false} disabled={true} />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.label}>Notifications</Text>
        <Switch value={notifications} onValueChange={setNotifications} />
      </View>

      <Button title="Save Settings" onPress={saveSettings} color="#007AFF" />
    </View>
  );
};

// Basic styles to enhance the look of the settings page
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', // Light mode background color
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333', // Dark text color for title
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  label: {
    fontSize: 18,
    color: '#333', // Dark text color for labels
  },
});

export default SettingsPage;
