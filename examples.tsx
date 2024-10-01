// AllStylesExample.tsx

import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native';

const AllStylesExample = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>All Style Properties</Text>
        <Text style={styles.text}>Here are some examples of common StyleSheet properties in React Native.</Text>
        <Image
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          style={styles.image}
        />
        <Button title="Press Me" onPress={() => alert('Button Pressed')} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  box: {
    width: 300,
    height: 300,
    backgroundColor: '#FFF',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    fontStyle: 'italic',
    textAlign: 'justify',
    letterSpacing: 1,
    color: '#555',
    marginBottom: 15,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 15,
  },
  flexBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    flex: 1,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
  },
  layout: {
    width: '100%',
    height: 'auto',
    margin: 10,
    padding: 15,
    overflow: 'hidden',
  },
  position: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  border: {
    borderColor: 'blue',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 10,
    borderBottomColor: 'red',
    borderBottomWidth: 4,
  },
  background: {
    backgroundColor: 'lightblue',
    backgroundImage: 'url(path/to/image)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  transform: {
    transform: [{ scale: 1.5 }, { rotate: '45deg' }],
  },
  opacity: {
    opacity: 0.8,
  },
  textStyles: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: 'blue',
  },
});

export default AllStylesExample;
