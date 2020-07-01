import React from 'react';
import { Button ,View,Text,StyleSheet} from 'react-native';

const EditProfileScreen=()=> {
  return (
    <View style={styles.container}>
      <Text>Edit Profile Screen</Text>
      <Button
        title="Cick me"
        onPress={()=>alert('EditProfileScreen button Clicked ')}
      />

    </View>
  );
}
export default EditProfileScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
  });
