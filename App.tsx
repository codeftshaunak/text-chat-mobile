import React from 'react';
import { View, ViewStyle } from 'react-native';
import { AuthContextProvider } from './src/context/auth-context/auth-provide';
import LoginScreen from './src/screens/login/login';

// Define types for props if needed
interface AppProps {
  title?: string;
}

const App: React.FC<AppProps> = () => {
  // Define a style for the container using the ViewStyle type
  const containerStyle: ViewStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0E233D',
    width: '100%',
  };

  return (
    <AuthContextProvider>
      <View style={containerStyle}>
        <LoginScreen />
      </View>
    </AuthContextProvider>
  );
};

export default App;
