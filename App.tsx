import React from 'react';
import { Text, TextStyle, View, ViewStyle } from 'react-native';

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
    backgroundColor: '#f5f5f5',
  };

  // Define a style for the text using the TextStyle type
  const textStyle: TextStyle = {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 800,
    color: '#0E7ADF',
  };

  return (
    <View style={containerStyle}>
      <Text style={textStyle}>Welcome to Community Launch App</Text>
    </View>
  );
};

export default App;
