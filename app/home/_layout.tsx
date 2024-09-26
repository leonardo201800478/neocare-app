import { Slot } from 'expo-router';
import React from 'react';
import { View, StyleSheet } from 'react-native';

const HomeLayout = () => {
  return (
    <View style={styles.container}>
      <Slot /> {/* O Slot renderiza as páginas internas da pasta "home" */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 16,
  },
});

export default HomeLayout;
