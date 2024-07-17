import React from 'react';
import { View, ViewStyle } from 'react-native';
import Login from './src/screens/login/login';

// Define types for props if needed
interface AppProps {
  title: string;
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
    <View style={containerStyle}>
      <Login />
    </View>
  );
};

export default App;
