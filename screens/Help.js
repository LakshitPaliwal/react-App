import React from 'react';
import { Button ,View,Text,StyleSheet} from 'react-native';

const Help=()=> {
  return (
    <View style={styles.container}>
      <Text>Help Screen</Text>
      <Button
        title="Cick me"
        onPress={()=>alert('Help button Clicked ')}
      />

    </View>
  );
}
export default Help;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
  });