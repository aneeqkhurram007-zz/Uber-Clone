import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux'
import HomeScreen from './screens/HomeScreen';
import { store } from './store'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import MapScreen from './screens/MapScreen';

// Setup Redux

export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen name="HomeScreen"
              options={{ headerShown: false }}
              component={HomeScreen} />
            <Stack.Screen name="MapScreen"
              options={{ headerShown: false }}
              component={MapScreen} />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
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
