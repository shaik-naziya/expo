import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Button } from 'react-native';



export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Text>HELLO REACT WORLD. </Text>
      <TouchableOpacity onPress={ () => console.log("image clicked")}>
      <Image
       source={{ 
        width: 200,
        height: 300,
        uri: "https://picsum.photos/200/300"}} />
        </TouchableOpacity>
        <Button title='Click me' onPress={ () => console.log("clicked me")}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightash',
    alignItems: 'center',
    justifyContent: 'center'
  
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
