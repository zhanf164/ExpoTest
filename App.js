import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, Alert, SafeAreaView,View, Button, TextInput} from 'react-native';


// this is a comment
//Adding a comment here to see if it shows up
//Adding a final comment to see if I understand what is going on here.

export default function App() {
  const [welcomeMessage, setWelcomeMessage] = useState("This is the default message.")

  const ShowAlert = () => {
    Alert.prompt(
      "Enter Text",
      "Please type what you would like to display",
      [
        { text: "Cancel",
          style: "Cancel",
          onPress: () => console.log("Cancel Button was pressed")

        }, 
        {
          text: "Submit",
          onPress: message => setWelcomeMessage(message)
        }
      ]
    )
  }


  return (
    <View style={styles.container}>
      <Text>{welcomeMessage}</Text>

      <TextInput placeholder="XXX-XXX-XXXX" autoCompleteType="tel" style={{padding: 10, borderColor: "black", borderWidth: 1}} />
      <Button title="Click to change the message" onPress={() => ShowAlert()} />        
      <Text>Placed this here indicating a new branch.</Text>
	  <Text>Adding another new textbox here.</Text>
    <Text>A final test.</Text>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: "center"
  },
});
