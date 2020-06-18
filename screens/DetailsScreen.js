import React from 'react';
import { View,Text,StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';



const DetailsScreen=({navigation})=> {
  return (
    <View style={styles.container}>
      <Text>Details  Screen</Text>
      <Button mode="contained" 
              onPress={() => navigation.push("Details")}
              >
                Go to detailed Screen
      </Button>

      <Button mode="contained" 
              onPress={() => navigation.navigate("Home")}
              >
         Go to HOme
      </Button>
      
      <Button mode="contained" 
              onPress={() => navigation.goBack()}
               >
         go backk button
      </Button>
      
      <Button mode="contained" 
              onPress={() => navigation.popToTop()}
               >
         go to first screen of App
      </Button>
    </View>
  );
}


export default DetailsScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: "dodgerblue",
      alignItems: 'center',
      justifyContent: 'center',
  
    },
  });
  