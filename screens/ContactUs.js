import React from 'react';
import { Button, View,Text,StyleSheet} from 'react-native';

const ContactUs=()=> {
  return (
    <View style={styles.container}>
      <Text>ContactUs Screen</Text>
      <Button
        title="Cick me"
        onPress={()=>alert('ContactUs button Clicked ')}
      />

    </View>
  );
}
export default ContactUs;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
  });