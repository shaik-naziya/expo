import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Button, Alert, Dimensions } from 'react-native';



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text><h1>HELLO REACT WORLD.</h1> </Text>
      <TouchableOpacity onPress={ () => console.log("image clicked")}>
      <Image
       source={{ 
        width: 500,
        height: 400,
        uri: "https://picsum.photos/200/300"}} />
        </TouchableOpacity>

        <Button 
        color="green"
        title='Click me' 
        onPress={ () => alert("button tapped")}/>

        {/* <View
        style={{
          backgroundColor: "blue",
          width: "50%",
          height: 80
        }}
        ></View> */}
    </SafeAreaView>

        // <View
        //   style={{
        //     backgroundColor: "teal",
        //     width: 200,
        //     height: 100,
        //     flex: 0.5,
        //     flexDirection: "row",
        //     justifyContent: "center",
        //   }}>

        //   <View
        //   style={{
        //     backgroundColor: "black",
        //     width: 200,
        //     height: 100,
        //     flex: 0.5,
        //     flexDirection: "row",
        //     justifyContent: "center",
        //   }}/>

        //   <View
        //   style={{
        //     backgroundColor: "gold",
        //     width: 200,
        //     height: 100,
        //     flex: 0.5,
        //     flexDirection: "row",
        //     justifyContent: "space-around",
        //   }}/>
        // </View>
  );
}


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'lightash',
    // alignItems: 'center',
    // justifyContent: 'center'
  
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    // marginVertical: 30,
    // height: 1,
    // width: '80%',
  },
});
