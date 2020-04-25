import React from 'react';
import { SafeAreaView } from 'react-native';

// import { Container } from './styles';
import Routes from './src/Routes';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Routes />
    </SafeAreaView>
  );
}
