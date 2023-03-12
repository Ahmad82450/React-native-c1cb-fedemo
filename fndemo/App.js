import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './components/homePage';
import CelebrateButton from './components/celebrate';
import Settings from './components/settings';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#205C46"
            inactiveColor="#369C76"
            barStyle={{ backgroundColor: '#44C294' }}
        >
          <Tab.Screen 
            name="Home" 
            component={HomePage} 
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen 
            name="Settings" 
            component={Settings}
            options={{
              tabBarLabel: 'Settings',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="cog" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen 
            name="Celebrate" 
            component={CelebrateButton} 
            options={{
              tabBarLabel: 'Celebrate',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="party-popper" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
