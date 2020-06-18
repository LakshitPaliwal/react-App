import React from 'react';
import {Button, View,Text,StyleSheet} from 'react-native';

const Settings=()=> {
  return (
    <View style={styles.container}>
      <Text>Setting Screen</Text>
      <Button
        title="Cick me"
        onPress={()=>alert('Settings button Clicked ')}
      />
    </View>
  );
}
export default Settings;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
  });