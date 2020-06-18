import React from 'react';
import { View,Text,StyleSheet} from 'react-native';

const ExplorScreen=({navigation})=> {
  return (
    <View style={styles.container}>
      <Text>ExplorScreen Screen</Text>
     
    </View>
  );
}
export default ExplorScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
  });