import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <Text>Fun Project</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
