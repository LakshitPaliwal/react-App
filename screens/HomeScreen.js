import React from 'react';
import { View,Text,StyleSheet,StatusBar} from 'react-native';
import { Button } from 'react-native-paper';
import {useTheme} from '@react-navigation/native'
import { ThemeColors } from 'react-navigation';

const HomeScreen=({navigation})=> {

  const{colors}=useTheme();
  
  const theme=useTheme();

  return (
    <View style={styles.container}>
      <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"}/>
      <Text style={{color:colors.text}}> Home Screen </Text>
      <Button mode="contained" 
              onPress={() => navigation.navigate("Details")}
              
        >
         Go to detailed Screen
      </Button>

    </View>
  );
}
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "dodgerblue",
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
